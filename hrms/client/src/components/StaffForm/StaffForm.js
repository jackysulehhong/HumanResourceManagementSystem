import React, { useState, useEffect, useRef } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Row,
  Divider,
  Col,
  Typography,
  Alert,
  Modal,
} from 'antd';

import './StaffForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getUser, updateUser } from '../../actions/users';
import { getDepts } from '../../actions/depts';
import { getRoles } from '../../actions/roles';
import { getLeaveTypes } from '../../actions/leaveTypes';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getPoliciesByDept, getPolicy } from '../../actions/policy';
import moment from 'moment';
import { PageLoading } from '@ant-design/pro-layout';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { useForm } = Form;
const StaffForm = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  // const [oriInc, setOriInc] = useState();
  const oriIncRef = useRef();
  //var oriInc;
  const [showPolicyField, setShowPolicyField] = useState(false);
  const [showLeaveCount, setShowLeaveCount] = useState({
    policy: false,
    employment_date: false,
  });
  const [leaveCountText, setLeaveCountText] = useState({});
  const [policyHelpText, setPolicyHelpText] = useState(
    'Select a policy to show description'
  );
  const [password, setPassword] = useState('');
  const [staff, setStaff] = useState({
    emp_id: '',
    first_name: '',
    last_name: '',
    email: '',
    employment_date: '',
    password: '',
    department: '',
    roles: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData().then(() => setLoading(false));
  }, [dispatch]);

  const fetchData = async () => {
    await dispatch(getRoles());
    await dispatch(getDepts());
    await dispatch(getLeaveTypes());
    // await dispatch(getPoliciesByDept());
    if (id) {
      await dispatch(getUser(id)).then(async (data) => {
        await dispatch(getPoliciesByDept(data.department._id));

        let le = {};
        data.leaveCount.forEach((l) => {
          le[l['leaveType']['_id']] = l['count'];
        });
        form.setFieldsValue({
          emp_id: data.emp_id,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          employment_date: moment(data.employment_date),
          department: data.department._id,
          policy: data.policy._id,
          roles: data.roles._id,
          trainingHours: data.trainingHours,
          leaveType: { ...le },
        });
      });
      setShowPolicyField(true);
      setShowLeaveCount({ policy: true, employment_date: true });
      //calcLeaveCount();
    }
  };
  const { depts } = useSelector((state) => state.depts);
  const { roles } = useSelector((state) => state.roles);
  const { policies } = useSelector((state) => state.policy);
  const { leaveTypes } = useSelector((state) => state.leaveTypes);
  const { user, error } = useSelector((state) => state.users);
  const onFinish = async (values) => {
    const leaveCount = [];
    for (const [key, value] of Object.entries(values.leaveType)) {
      leaveCount.push({ leaveType: key, count: value });
    }

    if (id) {
      await dispatch(
        updateUser(id, {
          extra: { department: user.department._id },
          emp_id: values.emp_id,
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          policy: values.policy,
          employment_date: values['employment_date'].format('YYYY-MM-DD'),
          department: values.department,
          roles: values.roles,
          leaveCount: leaveCount,
          trainingHours: values.trainingHours,
        })
      );
      Modal.success({
        content: 'Staff Updated',
        onOk() {
          navigate('/users');
        },
      });
    } else {
      const d = await dispatch(
        createUser({
          emp_id: values.emp_id,
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          policy: values.policy,
          employment_date: values['employment_date'].format('YYYY-MM-DD'),
          department: values.department,
          roles: values.roles,
          leaveCount: leaveCount,
          trainingHours: values.trainingHours,
        })
      );
      if (d) {
        Modal.success({
          content: 'Staff created',
          onOk() {
            navigate('/users');
          },
        });
      } else {
        Modal.error({
          content: 'Email already exist',
        });
      }
    }
  };
  const onDateChange = (val) => {
    const newState = { ...showLeaveCount, employment_date: true };
    setShowLeaveCount(newState);
    if (newState.employment_date && newState.policy) {
      calcLeaveCount();
    }

    /**
    const stacked = policy.stacked;
    const policy = policy.list;
    if (policy) {
      const today = moment('2025-01-01');
      const employmentDate = moment(val);
      const totalYears = today.diff(employmentDate, 'years');
      console.log(totalYears);
      let totalIncrease = 0;
      const policyAfter = policy.filter((p) => p.condition1 == 'after');
      const policyEvery = policy.filter((p) => p.condition1 == 'every');
      let highestAfter = 0;
      policyAfter.forEach((p) => {
        if (totalYears >= p.year) {
          if (stacked) {
            totalIncrease += p.increase;
          } else {
            if (p.year > highestAfter) {
              totalIncrease = p.increase;
              highestAfter = p.year;
            }
          }
        }
      });
      policyEvery.forEach((p) => {
        const count = totalYears / p.year;
        totalIncrease += count * p.increase;
      });

      console.log(totalIncrease);
    }
     */
  };
  const onDeptChange = async (e) => {
    form.setFieldsValue({ policy: undefined });
    setPolicyHelpText('Select a policy to show description');
    setShowLeaveCount({ ...showLeaveCount, policy: false });
    await dispatch(getPoliciesByDept(e));

    setShowPolicyField(true);
  };
  const calcPolicy = (employmentDate, policy) => {
    const totalYears = moment().diff(employmentDate, 'years');
    let inc = {};
    leaveTypes.forEach((lt) => (inc[lt._id] = 0));

    policy.lists.forEach((list) => {
      const policyAfter = list.policy.filter((p) => p.condition1 == 'after');
      const policyEvery = list.policy.filter((p) => p.condition1 == 'every');
      const stacked = list.stacked;
      let highestAfter = 0;
      let totalIncrease = 0;
      policyAfter.forEach((p) => {
        if (totalYears >= p.year) {
          if (stacked) {
            totalIncrease += p.increase;
          } else {
            if (p.year > highestAfter) {
              totalIncrease = p.increase;
              highestAfter = p.year;
            }
          }
        }
      });

      policyEvery.forEach((p) => {
        const count = Math.floor(totalYears / p.year);
        totalIncrease += count * p.increase;
      });
      list.leavetype.forEach((lt) => (inc[lt._id] = totalIncrease));
    });
    console.log('inc', inc);
    return inc;
  };

  const calcLeaveCount = () => {
    const employmentDate = form.getFieldValue('employment_date');
    const totalYears = moment().diff(employmentDate, 'years');
    const policyVal = form.getFieldValue('policy');
    console.log(policies);
    const pol = policies.find((p) => p._id == policyVal);
    const curInc = calcPolicy(employmentDate, pol);
    console.log(curInc, 'curInc');

    const f = {};
    leaveTypes.forEach((lt) => (f[lt._id] = lt.count));
    const t = {};
    leaveTypes.forEach(
      (lt) => (t[lt._id] = `Base: ${lt.count} Not applicable`)
    );

    if (id) {
      if (user.policy._id != pol) {
        let le = {};
        user.leaveCount.forEach((l) => {
          le[l['leaveType']['_id']] = l['count'];
        });
        console.log('here');

        if (!oriIncRef.current) {
          oriIncRef.current = calcPolicy(
            user.employment_date,
            policies.find((p) => p._id == user.policy._id)
          );
        }
        const oriInc = oriIncRef.current;
        //const oriInc = calcPolicy(user.employment_date, oriPolicy);
        console.log(oriInc, curInc);
        leaveTypes.forEach((lt) => {
          let incDiff = oriInc[lt._id] - curInc[lt._id];
          f[lt._id] = le[lt._id] - incDiff;
          f[lt._id] = f[lt._id] > 0 ? f[lt._id] : 0;
          if (incDiff == 0) {
            t[lt._id] = ` Current: ${le[lt._id]} No changes`;
          } else if (incDiff >= 0) {
            t[lt._id] = ` Current: ${le[lt._id]} Decrease: ${Math.abs(
              incDiff
            )}`;
          } else {
            t[lt._id] = ` Current: ${le[lt._id]} Increase: ${Math.abs(
              incDiff
            )}`;
          }
          /* 
        if (incDiff > 0) {
          f[lt._id] = le[lt._id] - incDiff;
        } else if (incDiff < 0) {
          f[lt._id] = le[lt._id] - incDiff;
        }*/
        });
        setLeaveCountText(t);

        form.setFieldsValue({ leaveType: f });
      }
    } else {
      for (const [key, value] of Object.entries(curInc)) {
        t[key] = `Base: ${f[key]} + Increase: ${value}`;
        f[key] += value;
      }
      setLeaveCountText(t);

      form.setFieldsValue({ leaveType: f });
    }

    /**
 * 
      list.leavetype.forEach((lt) => {
        if (id) {
          let le = {};
          user.leaveCount.forEach((l) => {
            le[l['leaveType']['_id']] = l['count'];
          });
          //const curV = form.getFieldValue(`leaveType`);
          //console.log(curV);
          let initialIncrease = le[lt._id] - lt.count;
          initialIncrease = initialIncrease > 0 ? initialIncrease : 0;
          if (totalIncrease > initialIncrease) {
            f[lt._id] = le[lt._id] + (totalIncrease - initialIncrease);
          } else if (totalIncrease < initialIncrease) {
            f[lt._id] = le[lt._id] - (initialIncrease - totalIncrease);
            f[lt._id] = f[lt._id] < 0 ? 0 : f[lt._id];
          }
          t[lt._id] = `Base: ${
            lt.count
          } + Increase: ${totalIncrease} Current: ${le[lt._id]}`;
        } else {
          f[lt._id] = lt.count + totalIncrease;
          t[lt._id] = `Base: ${lt.count} + Increase: ${totalIncrease}`;
        }
      });
 

  */
  };

  const onPolicyChange = async (e) => {
    const policy = policies.find((p) => p._id == e);
    const f = {};
    const text = policy.lists.map((list, i) => {
      return (
        <>
          <b>{list.leavetype.map((lt) => `${lt.name}, `)}</b>
          {list.stacked ? <p>Stacked</p> : <></>}
          {list.policy.map((p, i) => (
            <p
              key={i}
            >{`${p.condition1} ${p.year} years, increase by ${p.increase}`}</p>
          ))}
        </>
      );
    });
    setPolicyHelpText(text);
    const newState = { ...showLeaveCount, policy: true };
    setShowLeaveCount(newState);
    if (newState.employment_date && newState.policy) {
      calcLeaveCount();
    }
  };
  if (loading) return <PageLoading />;
  return (
    <>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        {id ? 'Edit Staff' : 'Create Staff'}
      </Typography.Title>
      <Row>
        <Col xl={{ offset: 6, span: 12 }}>
          <Form
            form={form}
            name='basic'
            onFinish={onFinish}
            autoComplete='off'
            labelCol={{
              sm: { span: 8 },
            }}
          >
            <Form.Item
              label='Employee ID'
              name='emp_id'
              rules={[
                {
                  required: true,
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder={`Please enter employee\'s ID`} />
            </Form.Item>
            <Form.Item
              label='First Name'
              name='first_name'
              rules={[
                {
                  required: true,
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder={`Please enter employee\'s first name`} />
            </Form.Item>
            <Form.Item
              label='Last Name'
              name='last_name'
              rules={[
                {
                  required: true,
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder={`Please enter employee\'s last name`} />
            </Form.Item>
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  type: 'email',
                  whitespace: true,
                },
              ]}
            >
              <Input
                disabled={id ? true : false}
                type='email'
                placeholder={`Please enter employee\'s email`}
              />
            </Form.Item>
            <Form.Item
              label='Employment Date'
              name='employment_date'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker style={{ width: '100%' }} onChange={onDateChange} />
            </Form.Item>
            <Form.Item
              label='Department'
              name='department'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder={`Please choose employee\'s department`}
                onChange={onDeptChange}
              >
                {depts.map((dept) => (
                  <Option key={dept._id} value={dept._id}>
                    {dept.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              help={
                <>
                  <Typography.Paragraph>
                    Staff: Can Apply Leave and Training. Have Personal Dashboard
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    Supervisor: All privilege of staff applied Can approve /
                    reject leave.Have own department dashboard. Can view leave
                    and training list of own department.
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    Admin: All privilege of Supervisor applied. Have Admin
                    Dashboard and view all department training and leave list.
                    Can Create Internal Training.
                  </Typography.Paragraph>
                </>
              }
              label='Roles'
              name='roles'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder={`Please choose employee\'s role`}>
                {roles.map((role) => (
                  <Option key={role._id} value={role._id}>
                    {role.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            {showPolicyField && (
              <Form.Item
                help={policyHelpText}
                label='Policy'
                name='policy'
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder={`Please choose a policy`}
                  onChange={onPolicyChange}
                >
                  {policies.map((policy) => (
                    <Option key={policy._id} value={policy._id}>
                      {policy.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            )}
            <Divider orientation='center'>Training</Divider>
            <Form.Item
              label='Training Hours'
              name='trainingHours'
              initialValue={process.env.REACT_APP_TRAINING_HOURS}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber style={{ width: '100%' }} min={0} />
            </Form.Item>
            <Divider orientation='center'>Leave</Divider>
            {showLeaveCount.policy && showLeaveCount.employment_date ? (
              leaveTypes.map((leaveType) => (
                <Form.Item
                  key={leaveType._id}
                  label={leaveType.name}
                  name={[['leaveType'], [leaveType._id]]}
                  initialValue={leaveType.count}
                  help={
                    leaveCountText[leaveType._id]
                      ? leaveCountText[leaveType._id]
                      : 'Not applicable'
                  }
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <InputNumber style={{ width: '100%' }} min={0} />
                </Form.Item>
              ))
            ) : (
              <p style={{ textAlign: 'center' }}>
                Select employment date and policy to view leave count
              </p>
            )}
            <br />
            <br />
            <br />
            <Form.Item
              wrapperCol={{
                sm: { offset: 8 },
              }}
            >
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
              <Button>
                <Link to='/users'>Back</Link>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default StaffForm;

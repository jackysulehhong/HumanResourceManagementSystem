import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Space,
  Select,
  InputNumber,
  Checkbox,
  Tooltip,
  Alert,
  Typography,
  Col,
  Row,
  Modal,
} from 'antd';
import {
  InfoCircleOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPolicy, getPolicy, updatePolicy } from '../../actions/policy';
import { useForm } from 'antd/lib/form/Form';
import { add } from 'lodash';
import { PageLoading } from '@ant-design/pro-layout';
import { getLeaveTypes } from '../../actions/leaveTypes';
import { getDepts } from '../../actions/depts';
const { Option } = Select;

const calcEvery = (every, increase) => {
  let today = moment();
  let employmentDate = moment('2020-01-01');
  let totalYears = today.diff(employmentDate, 'y');
  let count = totalYears / every;
  return count * increase;
};
const calcAfter = (after, increase) => {
  let today = moment();
  let employmentDate = moment('2020-01-01');
  let totalYears = today.diff(employmentDate, 'y');
  if (totalYears > after) {
    return increase;
  }
  return 0;
};

const LeavePolicy = () => {
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [form] = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { depts } = useSelector((state) => state.depts);
  const { policy, isLoading } = useSelector((state) => state.policy);
  const { leaveTypes } = useSelector((state) => state.leaveTypes);
  var filteredOptions = leaveTypes.filter(
    (lt) => !selectedItems.includes(lt._id)
  );
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await dispatch(getDepts());
    if (id) {
      await dispatch(getLeaveTypes());
      const d = await dispatch(getPolicy(id));
      if (d) {
        let leaveTypeArr = [];
        const newD = {
          ...d,
          lists: d.lists.map((list) => {
            const dlt = list.leavetype;
            const newLt = dlt.map((lt) => {
              const val = leaveTypes.find((alt) => alt._id == lt);
              leaveTypeArr.push(lt);
              return { key: val._id, value: val._id, label: val.name };
            });
            return { ...list, leavetype: newLt };
          }),
        };
        setSelectedItems(leaveTypeArr);
        form.setFieldsValue(newD);
      }
    }
    setLoading(false);
  };
  const onFinish = (values) => {
    const r = {
      ...values,
      lists: values.lists.map((t) => {
        return { ...t, leavetype: t.leavetype.map((lt) => lt.key) };
      }),
    };

    if (id) {
      dispatch(updatePolicy(id, r));
      Modal.success({
        content: 'Policy updated',
        onOk() {
          navigate('/policy');
        },
      });
    } else {
      dispatch(createPolicy(r));
      Modal.success({
        content: 'Policy created',
        onOk() {
          navigate('/policy');
        },
      });
    }
  };

  const onSelectChange = () => {
    const formValues = form.getFieldValue('lists');

    const leavetypeArr = formValues.reduce(
      (all, item) => all.concat(item.leavetype?.map((l) => l.key)),
      []
    );
    setSelectedItems(leavetypeArr);
  };
  if (loading) return <PageLoading />;
  return (
    <>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        {id ? 'Edit Policy' : 'Create Policy'}
      </Typography.Title>
      <Row>
        <Col sm={{ offset: 7, span: 10 }}>
          <Form
            style={{ width: '100%' }}
            form={form}
            name='dynamic_form_nest_item'
            onFinish={onFinish}
            autoComplete='off'
          >
            {/**https://github.com/ant-design/ant-design/issues/7481#issuecomment-802830547 */}
            {/**https://stackoverflow.com/questions/61622292/antd-v4-how-to-add-nesting-in-form-list */}
            {/**https://stackoverflow.com/questions/62995077/how-to-make-ant-designs-form-list-required */}
            <Form.Item
              label='Name'
              name='name'
              rules={[
                { required: true },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (
                      getFieldValue('lists') &&
                      getFieldValue('lists').length
                    ) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Please add Policy');
                  },
                }),
              ]}
            >
              <Input placeholder='Please enter policy name' />
            </Form.Item>

            <Form.Item
              label='Departments'
              name='departments'
              rules={[{ required: true }]}
            >
              <Select
                allowClear
                placeholder='Choose department'
                mode='multiple'
                rules={[{ required: true }]}
              >
                {depts?.map((dept) => (
                  <Option key={dept._id} value={dept._id}>
                    {dept.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.List name='lists'>
              {(fields1, { add: add1, remove: remove1 }) => (
                <>
                  {fields1.map((field1) => (
                    <div key={field1.key}>
                      <Form.Item
                        {...field1}
                        label='Leave Types'
                        name={[field1.name, 'leavetype']}
                        fieldKey={[field1.fieldKey, 'leavetype']}
                        rules={[
                          {
                            required: true,
                            message: 'Please choose leave type',
                          },
                          ({ getFieldValue }) => ({
                            validator(rule, value) {
                              if (
                                getFieldValue([
                                  'lists',
                                  field1.name,
                                  'policy',
                                ]) &&
                                getFieldValue(['lists', field1.name, 'policy'])
                                  .length
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject('Please add Condition');
                            },
                          }),
                        ]}
                      >
                        <Select
                          allowClear
                          placeholder='Choose leave type'
                          mode='multiple'
                          onChange={onSelectChange}
                          labelInValue
                          optionLabelProp='label'
                          rules={[{ required: true }]}
                        >
                          {filteredOptions?.map((lt) => (
                            <Option key={lt._id} value={lt._id} label={lt.name}>
                              {lt.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name={[field1.name, 'stacked']}
                        valuePropName='checked'
                        initialValue={false}
                      >
                        <Checkbox>Stacked</Checkbox>
                      </Form.Item>

                      <Alert
                        style={{ marginBottom: '50px' }}
                        description={`If stacked is selected, all 'After' conditions will apply cumulatively. If stacked is not selected, only the highest 'After' condition will apply`}
                        type='info'
                        showIcon
                      />
                      <Form.List name={[field1.name, 'policy']}>
                        {(policyFields, { add, remove }) => (
                          <>
                            {policyFields.map((policyField) => (
                              <Space
                                key={'policy' + policyField.key}
                                style={{
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  marginBottom: 8,
                                }}
                                align='baseline'
                              >
                                <Form.Item
                                  {...policyField}
                                  name={[policyField.name, 'condition1']}
                                  fieldKey={[
                                    policyField.fieldKey,
                                    'condition1',
                                  ]}
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Please choose a condition',
                                    },
                                  ]}
                                >
                                  <Select
                                    allowClear
                                    placeholder='Choose a condition'
                                  >
                                    <Option value='after'>After</Option>
                                    <Option value='every'>Every</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  {...policyField}
                                  name={[policyField.name, 'year']}
                                  fieldKey={[policyField.fieldKey, 'year']}
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Please enter year',
                                    },
                                  ]}
                                >
                                  <InputNumber
                                    min={1}
                                    style={{ width: '100%' }}
                                    placeholder='Please enter years'
                                  />
                                </Form.Item>
                                <>years, increase by </>
                                <Form.Item
                                  {...policyField}
                                  name={[policyField.name, 'increase']}
                                  fieldKey={[policyField.fieldKey, 'increase']}
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Please enter a number',
                                    },
                                  ]}
                                >
                                  <InputNumber
                                    min={1}
                                    style={{ width: '100%' }}
                                    placeholder='Enter increase count'
                                  />
                                </Form.Item>
                                <MinusCircleOutlined
                                  onClick={() => remove(policyField.name)}
                                />
                              </Space>
                            ))}
                            <Form.Item>
                              <Button
                                type='dashed'
                                onClick={() => add()}
                                icon={<PlusOutlined />}
                              >
                                Add Condition
                              </Button>
                            </Form.Item>
                          </>
                        )}
                      </Form.List>
                      <Form.Item>
                        <Button
                          type='dashed'
                          onClick={() => remove1(field1.name)}
                          block
                          icon={<MinusCircleOutlined />}
                        >
                          Remove Policy
                        </Button>
                      </Form.Item>
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      type='dashed'
                      onClick={() => add1()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Policy
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item
              wrapperCol={{
                sm: { offset: 8 },
              }}
            >
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
              <Button
                type='secondary'
                htmlType='button'
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LeavePolicy;

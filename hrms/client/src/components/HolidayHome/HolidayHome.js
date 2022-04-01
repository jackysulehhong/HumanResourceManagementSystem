import {
  Typography,
  DatePicker,
  Button,
  Table,
  Empty,
  Space,
  Popconfirm,
  Modal,
} from 'antd';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHoliday, fetchHolidaysByYear } from '../../actions/holidays';
import { Link, useNavigate } from 'react-router-dom';
import PageLoading from '../PageLoading/PageLoading';
const HolidayHome = ({ socket, user }) => {
  const navigate = useNavigate();
  const { holidays, isLoading, success, error } = useSelector(
    (state) => state.holidays
  );
  const today = moment();
  const dispatch = useDispatch();
  const [year, setYear] = useState(today.year().toString());
  const onChange = (date, dateStr) => {
    setYear(dateStr);
  };
  useEffect(() => {
    dispatch(fetchHolidaysByYear(year));
  }, [dispatch, year]);

  const deleteHo = async (year, id) => {
    dispatch(deleteHoliday(year, id));
    Modal.success({
      content: 'Holiday Deleted',
    });
  };
  if (isLoading) return <PageLoading />;
  return (
    <>
      <Typography.Title level={1}>Holidays</Typography.Title>
      <DatePicker onChange={onChange} picker='year' defaultValue={today} />
      <Button>
        <Link to={`/holidays/create/${year}`}>Add New Holiday for {year}</Link>
      </Button>
      {holidays?.lists?.length ? (
        <>
          <Table
            dataSource={holidays.lists}
            rowKey='_id'
            style={{ overflowX: 'scroll' }}
          >
            <Table.Column
              title='Title'
              dataIndex='title'
              key='title'
            ></Table.Column>
            <Table.Column
              title='Start Date'
              dataIndex='startDate'
              key='startDate'
              render={(text, record) => moment(text).format('YYYY-MM-DD')}
            ></Table.Column>
            <Table.Column
              title='End Date'
              dataIndex='endDate'
              key='endDate'
              render={(text, record) => moment(text).format('YYYY-MM-DD')}
            ></Table.Column>
            <Table.Column
              title='Action'
              dataIndex='option'
              render={(text, record) => (
                <Space size='middle' key={record._id}>
                  <Button
                    type='primary'
                    onClick={() =>
                      navigate(`/holidays/edit/${year}/${record._id}`)
                    }
                  >
                    Edit
                  </Button>
                  <Popconfirm
                    title='Are you sure you want to delete this holiday?'
                    onConfirm={() => deleteHo(year, record._id)}
                    okText='Yes'
                    cancelText='No'
                  >
                    <Button type='primary' danger>
                      Delete
                    </Button>
                  </Popconfirm>
                </Space>
              )}
            ></Table.Column>
          </Table>
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default HolidayHome;

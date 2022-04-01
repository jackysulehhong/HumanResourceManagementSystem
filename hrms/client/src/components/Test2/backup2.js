import React, { useRef, useState } from 'react';
import {
  PlusOutlined,
  EllipsisOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import {
  Button,
  Select,
  ConfigProvider,
  Space,
  Tooltip,
  Dropdown,
  Menu,
  Input,
} from 'antd';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import moment from 'moment';
import enUSIntl from 'antd/lib/locale/en_US';
import { useSelector } from 'react-redux';
//https://stackoverflow.com/a/59479818
const sorterA = (a, b) =>
  isNaN(a) && isNaN(b) ? (a || '').localeCompare(b || '') : a - b;
//https://stackoverflow.com/a/42948173
const sorterDate = (a, b) => moment(a).diff(moment(b));
const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};
const tableListDataSource = [];
const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];
for (let i = 0; i < 100; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}
const columns = [
  {
    title: '排序',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
    // 自定义筛选项功能具体实现请参考 https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: (
      <>
        创建时间
        <Tooltip placement='top' title='这是一段描述'>
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 140,
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key='link'>链路</a>,
      <a key='link2'>报警</a>,
      <a key='link3'>监控</a>,
      <TableDropdown
        key='actionGroup'
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const columns2 = [
  {
    title: 'Index',
    dataIndex: 'index',
    valueType: 'indexBorder',
    key: 'index',
    width: 48,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => sorterA(a.title, b.title),
  },
  {
    title: 'Start Date',
    dataIndex: 'fromDate',
    key: 'fromDate',
    render: (text, record) => moment(text).format('y-MM-DD'),
    sorter: (a, b) => sorterA(a.fromDate, b.fromDate),
  },
];
const menu = (
  <Menu>
    <Menu.Item key='1'>1st item</Menu.Item>
    <Menu.Item key='2'>2nd item</Menu.Item>
    <Menu.Item key='3'>3rd item</Menu.Item>
  </Menu>
);
export default () => {
  const { leaves } = useSelector((state) => state.leaves);
  const [data, setData] = useState(leaves);
  const actionRef = useRef();
  return (
    <ConfigProvider locale={enUSIntl}>
      <ProTable
        columns={columns2}
        actionRef={actionRef}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          //https://www.codeshelper.com/article/27727.html
          //https://github.com/ant-design/ant-design-pro/blob/master/mock/listTableList.ts
          let dataSource = data;
          //  console.log(dataSource);
          //  console.log(params, sorter, filter);
          /*
          if (sorter) {
            if (Object.keys(sorter).length > 0) {
              dataSource = dataSource.sort((prev, next) => {
                let sortNumber = 0;
          
                Object.keys(sorter).forEach((key) => {
                  if (sorter[key] === 'descend') {
                    if (key == 'frmDate')
                      if (sorterA(prev[key], next[key]) > 0) {
                        sortNumber += -1;
                      } else {
                        sortNumber += 1;
                      }
                    return;
                  }
                  if (sorterA(prev[key], next[key]) > 0) {
                    sortNumber += 1;
                  } else {
                    sortNumber += -1;
                  }
                });
                return sortNumber;
              });
            }
          }
          */
          if (filter) {
            if (Object.keys(filter).length > 0) {
              dataSource = dataSource.filter((item) => {
                return Object.keys(filter).some((key) => {
                  if (!filter[key]) {
                    return true;
                  }
                  if (filter[key].includes(`${item[key]}`)) {
                    return true;
                  }
                  return false;
                });
              });
            }
          }

          if (params) {
            if (Object.keys(params).length > 0) {
              dataSource = dataSource.filter((item) => {
                return Object.keys(params).every((key) => {
                  if (!params[key]) {
                    return true;
                  }

                  if (key == 'pageSize' || key == 'current') {
                    return true;
                  }
                  if (params[key] == 'all') {
                    return true;
                  }
                  if (
                    item[key].search(
                      new RegExp('.*' + params[key] + '.*', 'gi')
                    ) != -1
                  ) {
                    return true;
                  }
                  return false;
                });
              });
            }
          }

          // console.log('nani', dataSource);

          return Promise.resolve({
            data: dataSource,
            success: true,
          });
        }}
        rowKey='key'
        pagination={{
          pageSize: 10,
          showQuickJumper: true,
        }}
        search={{
          layout: 'vertical',
          defaultCollapsed: false,
        }}
        /*{
          layout: 'vertical',
          defaultCollapsed: false,
        }*/
        dateFormatter='string'
        toolbar={{
          title: '高级表格',
          tooltip: '这是一个标题提示',
        }}
        toolBarRender={() => [
          <Button key='danger' danger>
            危险按钮
          </Button>,
          <Button key='show'>查看日志</Button>,
          <Button type='primary' key='primary'>
            创建应用
          </Button>,
          <Dropdown key='menu' overlay={menu}>
            <Button>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ]}
      />
    </ConfigProvider>
  );
};

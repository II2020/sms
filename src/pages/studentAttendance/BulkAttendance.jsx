import React from 'react';
import {Checkbox, Input,DatePicker, Space } from 'antd';
import { studentDetailsByGradeAndDivison } from '../../constants/MockData';
import CustomTable from '../../components/molecules/CustomTable';
import CustomButton from '../../components/atoms/CustomButton';

const { RangePicker } = DatePicker;

const columns = [
    {
        title: 'IndexNo',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: (
            <>
                <Checkbox  />
                2020.10.02
            </>
        ),
        key: 'checkBox',
        render: (tags) => (
            <>
                <Checkbox defaultChecked="true" />
            </>
        ),
    },
    {
        title: (
            <>
                <Checkbox />
                2020.10.03
            </>
        ),
        key: 'checkBox2',
        render: (tags) => (
            <>
                <Checkbox defaultChecked="true"  />
            </>
        ),
    },
    {
        title: (
            <>
                <Checkbox />
                2020.10.04
            </>
        ),
        key: 'checkBox2',
        render: (tags) => (
            <>
                <Checkbox defaultChecked="true" />
            </>
        ),
    },
    {
        title: (
            <>
                <Checkbox />
                2020.10.05
            </>
        ),
        key: 'checkBox2',
        render: (tags) => (
            <>
                <Checkbox defaultChecked="true" />
            </>
        ),
    },
];
const data = studentDetailsByGradeAndDivison;
const BulkAttedanceTable = (props) => {
    
    return (
        <div>
            {/* <div style={{ marginBottom: 16 }}>
                <label></label>
                <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
            </div> */}
            <div style={{ padding: '30px' }}>
                <CustomTable
                    title={
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ fontSize: '25px' }}>
                                Grade:{data.grade.grade}
                                {data.grade.divison}
                            </div>
                            
                            <Space direction="vertical" size={12}>
                                <RangePicker />
                            </Space>
                            <div>
                                <Input placeholder="Enter Teacher Name" />
                            </div>
                            <CustomButton text={'Save'} style={{ width: '130px', height: '35px', float: 'right' }} />
                        </div>
                    }
                    columns={columns}
                    dataSource={data.studentDatails}
                />
            </div>
        </div>
    );
};

export default BulkAttedanceTable;

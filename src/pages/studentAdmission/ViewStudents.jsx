import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import Table from '../../components/molecules/CustomTable';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
const data = [
    {
        key: '1',
        admissionNo: 'JF/ST/001',
        firstName: 'Keerthana',
        middleName: 'Keerthi',
        lastName: 'Raveendran',
        telephoneNo: '0212260088',
    },
    {
        key: '1',
        admissionNo: 'JF/ST/001',
        firstName: 'Keerthana',
        middleName: 'Keerthi',
        lastName: 'Raveendran',
        telephoneNo: '0212260088',
    },
    {
        key: '1',
        admissionNo: 'JF/ST/001',
        firstName: 'Keerthana',
        middleName: 'Keerthi',
        lastName: 'Raveendran',
        telephoneNo: '0212260088',
    },
    {
        key: '1',
        admissionNo: 'JF/ST/001',
        firstName: 'Keerthana',
        middleName: 'Keerthi',
        lastName: 'Raveendran',
        telephoneNo: '0212260088',
    },
    {
        key: '1',
        admissionNo: 'JF/ST/001',
        firstName: 'Keerthana',
        middleName: 'Keerthi',
        lastName: 'Raveendran',
        telephoneNo: '0212260088',
    },
];
const ViewStudents = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        setSearchInput(node);
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex]
                      .toString()
                      .toLowerCase()
                      .includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100);
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Admission No',
            dataIndex: 'admissionNo',
            key: 'admissionNo',
            width: '20%',
            ...getColumnSearchProps('admissionNo'),
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            width: '20%',
            ...getColumnSearchProps('firstName'),
        },
        {
            title: 'Middle Name',
            dataIndex: 'middleName',
            key: 'middleName',
            width: '20%',
            ...getColumnSearchProps('middleName'),
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            width: '20%',
            ...getColumnSearchProps('lastName'),
        },
        {
            title: 'Telephone No',
            dataIndex: 'telephoneNo',
            key: 'telephoneNo',
            width: '20%',
            ...getColumnSearchProps('telephoneNo'),
        },
        {
            title: 'More',
            key: 'action',
            render: (text, record) => <Space size="middle"></Space>,
        },
    ];
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText(searchText);
    };

    return (
        <>
            <div>
                <h1>Student's Details</h1>
            </div>
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    style={{
                        marginTop: '15px',
                        width: '90%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: '8px',
                    }}
                />
            </div>
        </>
    );
};
export default ViewStudents;

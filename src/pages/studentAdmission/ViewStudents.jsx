import React, { useState } from 'react';
import { Button, Input, Space, Modal } from 'antd';
import { Row, Col } from 'rsuite';
import Table from '../../components/molecules/CustomTable';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, EllipsisOutlined } from '@ant-design/icons';
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
        key: '2',
        admissionNo: 'JF/ST/001',
        firstName: 'Keerthana',
        middleName: 'Keerthi',
        lastName: 'Raveendran',
        telephoneNo: '0212260088',
    },
    {
        key: '3',
        admissionNo: 'JF/ST/001',
        firstName: 'Keerthana',
        middleName: 'Keerthi',
        lastName: 'Raveendran',
        telephoneNo: '0212260088',
    },
    {
        key: '4',
        admissionNo: 'JF/ST/001',
        firstName: 'Keerthana',
        middleName: 'Keerthi',
        lastName: 'Raveendran',
        telephoneNo: '0212260088',
    },
    {
        key: '5',
        admissionNo: 'JF/ST/001',
        firstName: 'Keerthana',
        middleName: 'Keerthi',
        lastName: 'Raveendran',
        telephoneNo: '0212260088',
    },
];

const studentContent = (
    <div style={{ width: '100%', borderRadius: '8px' }}>
        <Row>
            <Col md={12}>
                <p>Admission Date:</p>
                <p>Address:</p>
                <p>Grama Sevaka's Division No:</p>
                <p>Distance from place of stay to school:</p>
                <p>Date of Birth:</p>
                <p>Religion:</p>
                <p>Race:</p>
            </Col>
            <Col md={12}>
                <p>2020/10/07</p>
                <p>Jaffna</p>
                <p>J/408</p>
                <p>32km</p>
                <p>1997/12/05</p>
                <p>Hindu</p>
                <p></p>
            </Col>
        </Row>
    </div>
);

const parentContent = (
    <div style={{ width: '100%', borderRadius: '8px' }}>
        <Row>
            <Col md={12}>
                <p>Admission Date:</p>
                <p>Address:</p>
                <p>Grama Sevaka's Division No:</p>
                <p>Distance from place of stay to school:</p>
                <p>Date of Birth:</p>
                <p>Religion:</p>
                <p>Race:</p>
            </Col>
            <Col md={12}>
                <p>2020/10/07</p>
                <p>keerthi</p>
                <p>J/408</p>
                <p>32km</p>
                <p>1997/12/05</p>
                <p>Hindu</p>
                <p>KKKkk</p>
            </Col>
        </Row>
    </div>
);

const sisterContent = (
    <div style={{ width: '100%', borderRadius: '8px' }}>
        <Row>
            <Col md={12}>
                <p>Admission Date:</p>
                <p>Address:</p>
                <p>Grama Sevaka's Division No:</p>
                <p>Distance from place of stay to school:</p>
                <p>Date of Birth:</p>
                <p>Religion:</p>
                <p>Race:</p>
            </Col>
            <Col md={12}>
                <p>2020/10/07</p>
                <p>keerthi</p>
                <p>J/408</p>
                <p>32km</p>
                <p>1997/12/05</p>
                <p>Hindu</p>
                <p>KKKkk</p>
            </Col>
        </Row>
    </div>
);

const ViewStudents = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [visible, setVisible] = useState(false);
    const [details, setDetails] = useState('');

    const showModal = type => {
        setVisible(true);
        if (type === 'student') {
            setDetails(studentContent);
        } else if (type === 'parent') {
            setDetails(parentContent);
        } else if (type === 'sister') {
            setDetails(sisterContent);
        }
    };

    const handleOk = e => {
        console.log(e);
        setVisible(true);
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };
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
            key: 'student',
            render: (text, record) => <EllipsisOutlined onClick={() => showModal('student')} />,
        },
        {
            title: "Parent's Details",
            key: 'parent',
            render: (text, record) => <EllipsisOutlined onClick={() => showModal('parent')} />,
        },
        {
            title: "Sister's Details",
            key: 'sister',
            render: (text, record) => <EllipsisOutlined onClick={() => showModal('sister')} />,
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
            <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel} width="50%">
                {details}
            </Modal>
        </>
    );
};
export default ViewStudents;

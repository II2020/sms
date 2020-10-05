import React, { useState } from 'react';
import { Button, FlexboxGrid, Row, Col, Modal } from 'rsuite';
import { Table, Input, Select } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
const CurrentYearPromation = () => {
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {},
        getCheckboxProps: (record) => ({
            disabled: record.status === 'PROMOTED',
        }),
    };
    const [grade, setGrade] = useState('');
    const [status, setStatus] = useState('');
    const [visible, setVisible] = useState(false);
    const [selectionType] = useState(false);
    const columns = [
        {
            title: 'Grade',
            dataIndex: 'grade',
            width: 270,
            align: 'center',
            key: 'grade',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 200,
            align: 'center',
            key: 'status',
        },
        {
            title: 'Edit & Delete',
            key: 'action',
            width: '12%',
            render: (text, record = data) => (
                <span>
                    <EditTwoTone onClick={() => showModel(record)} />
                </span>
            ),
        },
    ];

    const [data] = useState([
        {
            key: 1,
            grade: 1,
            isPromation: false,
            status: 'PENDING',
        },
        {
            key: 2,
            grade: 2,
            isPromation: true,
            status: 'PROMOTED',
        },
        {
            key: 3,
            grade: 3,
            isPromation: false,
            status: 'PENDING',
        },
        {
            key: 4,
            grade: 4,
            isPromation: true,
            status: 'PROMOTED',
        },
        {
            key: 5,
            grade: 5,
            isPromation: false,
            status: 'PROMOTED',
        },
        {
            key: 6,
            grade: 6,
            isPromation: true,
            status: 'PROMOTED',
        },
        {
            key: 7,
            grade: 7,
            isPromation: false,
            status: 'PENDING',
        },
        {
            key: 8,
            grade: 8,
            isPromation: true,
            status: 'PROMOTED',
        },
        {
            key: 9,
            grade: 9,
            isPromation: false,
            status: 'PENDING',
        },
        {
            key: 10,
            grade: 10,
            isPromation: true,
            status: 'PROMOTED',
        },
    ]);
    const showModel = (record) => {
        setGrade(record.grade);
        setStatus(record.status);
        setVisible(true);
    };
    const showModelClose = () => {
        setVisible(false);
    };
    const handleSelect = (value) => {
        setStatus(value);
    };

    return (
        <>
            <FlexboxGrid justify="center" borderRadius="20px">
                <FlexboxGrid.Item componentClass={Col} colspan={54} md={18}>
                    <h3 style={{ color: 'white' }}>Current Year Promation</h3>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <FlexboxGrid justify="center" borderRadius="20px">
                <FlexboxGrid.Item componentClass={Col} colspan={54} md={18}>
                    <Table
                        columns={columns}
                        tittle={'cu'}
                        dataSource={data}
                        footer={() => <Button appearance="primary">Promote</Button>}
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        pagination={{
                            defaultPageSize: 5,
                        }}
                        scroll={{ y: 500 }}
                    ></Table>
                </FlexboxGrid.Item>
            </FlexboxGrid>

            <Modal show={visible} style={{ width: '60%' }}>
                <Modal.Header>
                    <Modal.Title>Edit Current Year Promation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row style={{ width: '100%' }}>
                        <Col md={12}>
                            <div className="input_wrapper">
                                <label htmlFor="grade" className="label">
                                    Grade:
                                </label>
                                <Input id="grade" name="grade" style={{ width: '50%' }} value={grade} disabled />
                                <div style={{ height: '22px' }} />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="input_wrapper">
                                <label htmlFor="status" className="label">
                                    Status:
                                </label>
                                <Select
                                    id="status"
                                    name="status"
                                    placeholder="Select "
                                    value={status}
                                    width="75"
                                    onChange={handleSelect}
                                >
                                    <Select.Option key="1" value="PENDING">
                                        PENDING
                                    </Select.Option>
                                    <Select.Option key="2" value="PROMOTED">
                                        PROMOTED
                                    </Select.Option>
                                </Select>
                                <div style={{ height: '22px' }} />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={showModelClose} appearance="primary">
                        Promote
                    </Button>
                    <Button onClick={showModelClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default CurrentYearPromation;

import React, { useState } from 'react';
import { Button, FlexboxGrid, Col } from 'rsuite';
import { Table, Modal, Row, Input } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
const style = {
    alignContent: 'center',
    padding: '10px',
};
const CurrentYearPromation = () => {
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.status === 'PROMOTED', // Column configuration not to be checked
            // name: record.name,
        }),
    };
    const [visible, setVisible] = useState(false);
    const [selectionType, setSelectionType] = useState(false);
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
            render: (text, record) =>
                record.status === 'PENDING' ? (
                    ''
                ) : (
                    <span>
                        <EditTwoTone onClick={''} />
                    </span>
                ),
        },
    ];

    const [data, SetData] = useState([
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

    return (
        <>
            <FlexboxGrid justify="center" borderRadius="20px">
                <FlexboxGrid.Item componentClass={Col} colspan={54} md={18}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        footer={() => <Button appearance="primary">Promote</Button>}
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        pagination={{
                            defaultPageSize: 6,
                        }}
                        scroll={{ y: 500 }}
                    ></Table>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <Modal
                width="450px"
                className="addsubcategorymodal"
                visible={visible}
                closable={true}
                //  onOk={this.handleOk}
                //  onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={''}>
                        Return
                    </Button>,
                    // <PrimaryButton
                    //     type={'primary'}
                    //     primary
                    //     style={{
                    //         // color: theme.colors.white,
                    //         border: 'none',
                    //         marginTop: '20px',
                    //     }}
                    //     onClick={this.handleSubmitEdit}
                    // >
                    //     Submit
                    // </PrimaryButton>,
                ]}
            >
                <Row style={{ width: '100%' }}>
                    <Col span={12}>
                        <div className="input_wrapper">
                            <label htmlFor="status" className="label">
                                Test Name
                            </label>
                            <Input id="code" name="code" style={{ width: '100%' }} />
                            <div style={{ height: '22px' }} />
                        </div>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};
export default CurrentYearPromation;

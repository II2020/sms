import React, { useState } from 'react';
import { Content, Row, Breadcrumb, Col, Nav } from 'rsuite';
import Table from '../../components/molecules/CustomTable';
import { NavLink } from 'react-router-dom';
import './Style.StudentAdmissions.scss';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];
const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10t',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];
const StudentAdmission = () => {
    const [steps, setSteps] = useState('step1');
    function changeTabs(activeKey) {
        setSteps(activeKey);
    }

    return (
        <>
            <Content>
                <div>
                    <Row>
                        <Col xs={24} sm={24} md={4}>
                            <Breadcrumb className="breadcrumb">
                                <NavLink to="/">
                                    <>Home</>
                                </NavLink>
                                <NavLink to="/student">
                                    <>Student Admission</>
                                </NavLink>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row className="bodyContent">
                        <Nav appearance="tabs" onSelect={changeTabs}>
                            <Nav.Item eventKey="step1">Default Item</Nav.Item>
                            <Nav.Item eventKey="step2">Active Item</Nav.Item>
                            <Nav.Item eventKey="step3"> Disabled Item</Nav.Item>
                        </Nav>
                    </Row>
                    <Row>
                        {steps === 'step1' ? (
                            <Table
                                columns={columns}
                                dataSource={dataSource}
                                title={<p style={{ backgroundColor: 'red' }}> title</p>}
                            />
                        ) : (
                            'step2'
                        )}
                    </Row>
                </div>
            </Content>
        </>
    );
};
export default StudentAdmission;

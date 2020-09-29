import React, { useState } from 'react';
import { Content, Row, Breadcrumb, Col, Nav } from 'rsuite';
import { NavLink } from 'react-router-dom';
import AddStudentAdmissionForm from './StudentAdmissionForm';
// import './Style.StudentAdmission.scss';

const StudentAdmission = () => {
    const [steps, setSteps] = useState('step1');
    function changeTabs(activeKey) {
        setSteps(activeKey);
    }
    return (
        <>
            <Content className="bodyContent">
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
                    <Row>
                        <Nav appearance="tabs" onSelect={changeTabs}>
                            <Nav.Item eventKey="step1">Default Item</Nav.Item>
                            <Nav.Item eventKey="step2">Active Item</Nav.Item>
                            <Nav.Item eventKey="step3"> Disabled Item</Nav.Item>
                        </Nav>
                    </Row>
                    <Row>{steps === 'step1' ? <AddStudentAdmissionForm /> : 'step2'}</Row>
                </div>
            </Content>
        </>
    );
};
export default StudentAdmission;

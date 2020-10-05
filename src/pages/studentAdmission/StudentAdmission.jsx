import React, { useState } from 'react';
import { Content, Row, Breadcrumb, Col, Nav, FlexboxGrid } from 'rsuite';
import GradeWiseFillter from '../../components/templates/fillter/GradeWiseFillter';
import { NavLink } from 'react-router-dom';
import { grade } from '../../constants/MockData';
import { Space } from 'antd';
import './Style.StudentAdmissions.scss';

const StudentAdmission = () => {
    const [steps, setSteps] = useState('step1');
    const [selectedId, setSelectedId] = useState('');
    const [selectedDivisionId, setSelectedDivisionId] = useState('');
    const [divisions, setDivisions] = useState([]);
    function changeTabs(activeKey) {
        setSteps(activeKey);
    }
    const onClickGrade = (gradeId, division) => {
        console.log(gradeId, division);
        setSelectedId(gradeId);
        setDivisions(division);
    };

    const onClickDivision = (divisionId, division) => {
        console.log(divisionId, division);
        setSelectedDivisionId(divisionId);
    };
    return (
        <>
            <Content>
                <div>
                    <Row>
                        <Col md={4}>
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
                        {steps === 'step1' ? (
                            <GradeWiseFillter
                                grade={grade}
                                onClickGrade={onClickGrade}
                                onClickDivision={onClickDivision}
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

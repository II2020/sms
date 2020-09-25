import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { NavLink } from 'react-router-dom';
import Card from '../../molecules/Card';
import Student from '../../../assets/student.png';
import Academic from '../../../assets/academic.png';
import timeTable from '../../../assets/timeTable.png';
import calander from '../../../assets/calander.png';
import examResult from '../../../assets/test.png';
import library from '../../../assets/bookshelf.png';
import inventory from '../../../assets/checklist.png';
import sport from '../../../assets/basketball.png';

const HomeScreen = () => {
    function onClick(text) {
        console.log(text);
    }
    return (
        <Grid fluid className="grid" style={{ padding: '50px', alignContent: 'center' }}>
            <Row className="show-grid" style={{ padding: '10px', alignContent: 'center' }}>
                <Col xs={24} sm={24} md={6}>
                    <NavLink to="/student">
                        <Card onClick={() => onClick('student')} text="Student" icon={Student} />
                    </NavLink>
                </Col>
                <Col xs={24} sm={24} md={6}>
                    <Card onClick={() => onClick('academic')} text="Academic" icon={Academic} />
                </Col>
                <Col xs={24} sm={24} md={6}>
                    <Card onClick={() => onClick('timeTable')} text="Time Table" icon={timeTable} />
                </Col>
                <Col xs={24} sm={24} md={6}>
                    <Card onClick={() => onClick('academicCalander')} text="Academic Calander" icon={calander} />
                </Col>
            </Row>

            <Row className="show-grid" style={{ padding: '10px', alignContent: 'center' }}>
                <Col xs={24} sm={24} md={6}>
                    <Card onClick={() => onClick('examResult')} text="Examination" icon={examResult} />
                </Col>
                <Col xs={24} sm={24} md={6}>
                    <Card onClick={() => onClick('library')} text="Library" icon={library} />
                </Col>
                <Col xs={24} sm={24} md={6}>
                    <Card onClick={() => onClick('inventory')} text="Inventory" icon={inventory} />
                </Col>
                <Col xs={24} sm={24} md={6}>
                    <Card onClick={() => onClick('sport')} text="Sports" icon={sport} />
                </Col>
            </Row>
        </Grid>
    );
};
export default HomeScreen;

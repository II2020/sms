import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { NavLink } from 'react-router-dom';
import Card from '../../molecules/Card';
import Student from '../../../assets/students.png';
import Academic from '../../../assets/calendar.png';
import timeTable from '../../../assets/time.png';
import calander from '../../../assets/attandence.png';
import examResult from '../../../assets/exam.png';
import library from '../../../assets/library.png';
import inventory from '../../../assets/inventory.png';
import sport from '../../../assets/football.png';

const HomeScreen = () => {
    function onClick(text) {
        console.log(text);
    }

    return (
        <Grid fluid className="grid" style={{ padding: '50px', alignContent: 'center' }}>
            <Row className="show-grid" style={{ padding: '10px', alignContent: 'center' }}>
                <Col xs={24} sm={24} md={6}>
                    <NavLink to="/student">
                        <Card onClick={() => onClick('student')} text="Student" icon={Student} key="Student" />
                    </NavLink>
                </Col>
                <Col xs={24} sm={24} md={6}>
                    <Card onClick={() => onClick('academic')} text="Academic Calender" icon={Academic} key="academic" />
                </Col>
                <Col xs={24} sm={24} md={6}>
                    <Card onClick={() => onClick('timeTable')} text="Time Table" icon={timeTable} key="timeTable" />
                </Col>
                <Col xs={24} sm={24} md={6}>
                <NavLink to="/attendance">
                    <Card onClick={() => onClick('attandence')} text="Attandence" icon={calander} key="attandence" />
                </NavLink>
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

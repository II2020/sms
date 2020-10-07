import React, { useState } from 'react';
import { Header, Navbar, Nav, Dropdown, Icon } from 'rsuite';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Style.scss';

const HeaderComponent = (props) => {
    const [headerStyle] = useState(props.theme);

    const renderStudentAdmissionNav = () => {
        return (
            <Nav>
                <Nav.Item href="/" icon={<Icon icon="home" />}>
                    Home
                </Nav.Item>
                <Nav.Item></Nav.Item>
                <Nav.Item>Profile</Nav.Item>
                <Dropdown title="Admission" menuStyle={{ width: '100%' }} eventKey="admission">
                    <Dropdown.Item eventKey="1">New Admission</Dropdown.Item>
                    <Dropdown.Item eventKey="2">View Admission</Dropdown.Item>
                </Dropdown>
                <Dropdown title="Promotion" menuStyle={{ width: '100%' }} eventKey="promotion">
                    <Dropdown.Item eventKey="3">Promotion</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Add Division</Dropdown.Item>
                </Dropdown>
            </Nav>
        );
    };

    return (
        <Header>
            <Navbar appearance="inverse" style={{ ...headerStyle }}>
                <Navbar.Header className="logo-area">
                    <p className="logo">School Management System</p>
                </Navbar.Header>
                <Navbar.Body>
                    <Nav>
                        {props.currentPath === 'studentAdmission' ? (
                            renderStudentAdmissionNav()
                        ) : (
                            <Nav.Item href="/" icon={<Icon icon="home" />}>
                                Home
                            </Nav.Item>
                        )}
                    </Nav>

                    <Nav pullRight>
                        <Nav.Item icon={<Icon icon="cog" />}>
                            <NavLink to="/login">Settings</NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </Header>
    );
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        theme: state.ThemeReducer.defaultTheme,
        currentPath: state.CurrentPathReducer.currentPath,
    };
};

export default connect(mapStateToProps, null)(HeaderComponent);

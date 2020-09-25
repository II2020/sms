import React, { useState } from 'react';
import { Header, Navbar, Nav, Dropdown, Icon } from 'rsuite';
import { connect } from 'react-redux';
import './Style.scss';

const HeaderComponent = (props) => {
    const [headerStyle] = useState(props.theme);
    return (
        <Header>
            <Navbar appearance="inverse" style={{ ...headerStyle }}>
                <Navbar.Header className="logo-area">
                    <p className="logo">SMS</p>
                </Navbar.Header>
                <Navbar.Body>
                    <Nav>
                        <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
                        <Nav.Item></Nav.Item>
                        <Nav.Item>Products</Nav.Item>
                        <Dropdown title="About">
                            <Dropdown.Item>Company</Dropdown.Item>
                            <Dropdown.Item>Team</Dropdown.Item>
                            <Dropdown.Item>Contact</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
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
    };
};

export default connect(mapStateToProps, null)(HeaderComponent);

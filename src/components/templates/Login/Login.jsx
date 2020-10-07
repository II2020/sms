import React, { useState } from 'react';
import { Content, Row, Breadcrumb, Col, Input, Nav, Form, Icon, Button, ButtonToolbar } from 'rsuite';
import { NavLink } from 'react-router-dom';
import TextField from '../../../components/atoms/TextField';
import './Style.Login.scss';
import Logo from '../../../assets/student.png';

const Login = () => {
    return (
        <>
            <div className="background">
                <h3 className="mainheading">SCHOOL MANAGEMENT SYSTEM</h3>
                <Form className="loginform">
                    <h5 className="h1">Log in to your account</h5>
                    <div className="row">
                        <label for="email" key="usernamelable">
                            Email
                        </label>
                        <TextField className="inputfield" name="name" key="emailinput" />
                    </div>
                    <div className="row">
                        <label for="password" key="password">
                            Password
                        </label>
                        <TextField className="inputfield" name="name" key="passwordinput" />
                    </div>
                    <Button className="button" appearance="primary" type="submit" key="button">
                        Login
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Login;

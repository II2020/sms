import React, { useState } from 'react';
import { Content, Row, Breadcrumb, Col, Nav, Form, Icon, Button, ButtonToolbar } from 'rsuite';
import { Input } from 'antd';
import { NavLink } from 'react-router-dom';
import TextField from '../../../components/atoms/TextField';
import './Style.Login.scss';
import Logo from '../../../assets/shoolbackground.jpg';

const Login = () => {
    return (
        <>
            <div class="some-page-wrapper">
                <div class="row-wrapper">
                    <div class="column-wrapper">
                        <div class="blue-column">
                            <img className="image" src={Logo} alt="Logo" />
                        </div>
                    </div>
                    <div class="column-wrapper">
                        <div class="green-column">
                            <h3 className="mainheading">CHUNDIKULI GIRLS' COLLEGE - JAFFNA</h3>{' '}
                            <Form className="loginform">
                                <h5 className="h1">Login to your account</h5>
                                <div className="row">
                                    <Input
                                        className="inputfield"
                                        placeholder="Username"
                                        key="emailinput"
                                        style={{ width: '300px' }}
                                    />
                                </div>
                                <div className="row">
                                    <Input
                                        className="inputfield"
                                        placeholder="Password"
                                        key="passwordinput"
                                        style={{ width: '300px' }}
                                    />
                                </div>
                                <Button className="button" appearance="primary" type="submit" key="button">
                                    Login
                                </Button>
                                <div className="forgetpassword">
                                    <a>Forget Password?</a>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;

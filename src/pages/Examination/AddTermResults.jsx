import React from 'react';
import { Form, Col, Row, Input, Select, DatePicker } from 'antd';
import './Style.AddTermResult.scss';
import CustomButton from '../../components/atoms/CustomButton';
import { connect } from 'react-redux';

const AddTermResults = (props) => {
    const data = [
        {
            key: '1',
            subject: 'Mathematics',
        },
        {
            key: '2',
            subject: 'Science',
        },
        {
            key: '3',
            subject: 'History',
        },
        {
            key: '4',
            subject: 'Religion',
        },
        {
            key: '5',
            subject: 'Geography',
        },
        {
            key: '6',
            subject: 'Health',
        },
        {
            key: '7',
            subject: 'Tamil',
        },
        {
            key: '8',
            subject: 'Environment',
        },
    ];

    var subjectsArray = data.splice(0, data.length / 2);
    return (
        <div class="flex-container">
            {' '}
            <Form className="form-class" style={{ background: props.theme.color }}>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        <label key="term" className="form-lable">
                            Term :
                        </label>
                        <Form.Item className="select-class">
                            <Select>
                                <Select.Option key="term1">1</Select.Option>
                                <Select.Option key="term2">2</Select.Option>
                                <Select.Option key="term3">3</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col colspan={24} md={12} className="col-class">
                        <label key="grade" className="form-lable">
                            Grade :
                        </label>
                        <Form.Item className="select-class">
                            <Select>
                                <Select.Option key="grade1">1</Select.Option>
                                <Select.Option key="grade2">2</Select.Option>
                                <Select.Option key="grade3">3</Select.Option>
                                <Select.Option key="grade4">4</Select.Option>
                                <Select.Option key="grade5">5</Select.Option>
                                <Select.Option key="grade6">6</Select.Option>
                                <Select.Option key="grade7">7</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        <label key="division" className="form-lable">
                            Division :
                        </label>
                        <Form.Item className="select-class">
                            <Select>
                                <Select.Option key="division1">A</Select.Option>
                                <Select.Option key="division2">B</Select.Option>
                                <Select.Option key="division3">C</Select.Option>
                                <Select.Option key="division4">E</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col colspan={24} md={12} className="col-class">
                        <label key="date" className="form-lable">
                            Date :
                        </label>
                        <Form.Item md={12} className="select-class">
                            <DatePicker key="dateInput" className="select-class" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        <label key="admissionNo" className="form-lable">
                            Admission No :
                        </label>
                        <Form.Item className="select-class">
                            {' '}
                            <Input key="admissionNoInput" />
                        </Form.Item>
                    </Col>
                    <Col md={12} className="col-class">
                        <label key="fullName" className="form-lable">
                            Full Name :
                        </label>
                        <Form.Item className="select-class">
                            <Input key="fullNameInput" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        <label key="subjects" className="form-lable">
                            {' '}
                            Subjects :
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        {data.map((dynamicData) => {
                            let keyValue = dynamicData;
                            return (
                                <div>
                                    <Row>
                                        <Col colspan={24} md={8}>
                                            <p key={keyValue}>{dynamicData.subject}</p>
                                        </Col>
                                        <Col md={4}>
                                            <Input />
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                    </Col>

                    <Col colspan={24} md={12} className="col-class">
                        {subjectsArray.map((dynamicData2) => {
                            let keyValue = dynamicData2;
                            return (
                                <div>
                                    <Row>
                                        <Col colspan={24} md={8}>
                                            <p key={keyValue}>{dynamicData2.subject}</p>
                                        </Col>
                                        <Col md={4}>
                                            <Input />
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
                <Row>
                    <Col colspan={24} md={24} className="col-submit-class">
                        <CustomButton
                            text={'Submit'}
                            style={{
                                float: 'right',
                            }}
                        />
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(AddTermResults);

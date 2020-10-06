import React from 'react';
import { Form, Col, Row, Input, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch } from 'antd';
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

    var arr = data.splice(0, data.length / 2);
    return (
        <div class="flex-container">
            {' '}
            <Form className="form-class" style={{ background: props.theme.color }}>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        <label className="form-lable">Term :</label>
                        <Form.Item className="select-class">
                            <Select>
                                <Select.Option value="demo">1</Select.Option>
                                <Select.Option value="demo">2</Select.Option>
                                <Select.Option value="demo">3</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col colspan={24} md={12} className="col-class">
                        <label className="form-lable">Grade :</label>
                        <Form.Item className="select-class">
                            <Select>
                                <Select.Option value="demo">1</Select.Option>
                                <Select.Option value="demo">2</Select.Option>
                                <Select.Option value="demo">3</Select.Option>
                                <Select.Option value="demo">4</Select.Option>
                                <Select.Option value="demo">5</Select.Option>
                                <Select.Option value="demo">6</Select.Option>
                                <Select.Option value="demo">7</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        <label className="form-lable">Division :</label>
                        <Form.Item className="select-class">
                            <Select>
                                <Select.Option value="demo">A</Select.Option>
                                <Select.Option value="demo">B</Select.Option>
                                <Select.Option value="demo">C</Select.Option>
                                <Select.Option value="demo">E</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col colspan={24} md={12} className="col-class">
                        <label className="form-lable">Date :</label>
                        <Form.Item md={12} className="select-class">
                            <DatePicker className="select-class" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        <label className="form-lable">Admission No :</label>
                        <Form.Item className="select-class">
                            {' '}
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={12} className="col-class">
                        <label className="form-lable">Full Name :</label>
                        <Form.Item className="select-class">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        <label className="form-lable"> Subjects :</label>
                    </Col>
                </Row>
                <Row>
                    <Col colspan={24} md={12} className="col-class">
                        {data.map((dynamicData) => {
                            let d = dynamicData;
                            return (
                                <div>
                                    <Row>
                                        <Col colspan={24} md={8}>
                                            <p style={{ color: 'black' }}>{dynamicData.subject}</p>
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
                        {arr.map((dynamicData2) => {
                            return (
                                <div>
                                    <Row>
                                        <Col colspan={24} md={8}>
                                            <p style={{ color: 'black' }}>{dynamicData2.subject}</p>
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
                    <Col colspan={24} md={24} style={{ padding: '0px 20px 20px 0px' }}>
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

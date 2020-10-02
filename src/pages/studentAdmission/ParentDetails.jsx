import React, { useState } from 'react';
import Button from '../../components/atoms/CustomButton';
import { Form, FlexboxGrid, Col, DatePicker, Input, Radio, RadioGroup, Row } from 'rsuite';
import TextField from '../../components/atoms/TextField';
import SelectPicker from '../../components/atoms/SelectField';
import './Style.StudentAdmissions.scss';

const ParentForm = () => {
    const [formValue, setFormValue] = useState({
        fatherName: '',
        fatherOccupation: '',
        fatherOfficalAddress: '',
        fatherPhoneNo: '',
        fatherEmail: '',
        motherName: '',
        motherOccupation: '',
        motherOfficalAddress: '',
        motherEmail: '',
        motherPhoneNo: '',
        motherAnOldGirl: '',
        guardian: '',
        guardianName: '',
        guardianOccupation: '',
        guardianAddress: '',
        guardianTelephoneNo: '',
        guardianEmail: '',
        ifMotherAnOldGirl: '',
        maidenName: '',
        periodInSchool: '',
        house: '',
    });
    const [formError, setFormError] = useState({});
    const [form, setForm] = useState({});
    const handleSubmit = () => {
        if (!form.check()) {
            console.error('Form Error');
            return;
        }
        console.log(formValue, 'Form Value', formError);
    };
    return (
        <div className="bodyContent">
            <br></br>
            <Form>
                <div className="show-grid">
                    <Row>
                        <Col md={12}>
                            <FlexboxGrid justify="start">
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="fatherName"
                                        // placeholder="Enter Father Name"
                                        label="Name of Father"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="fatherOccupation"
                                        // placeholder="Enter Father Occupation"
                                        label="Father Occupation"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="fatherPhoneNo"
                                        // placeholder="Enter Telephone No"
                                        label="Father Telephone No"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="fatherEmail"
                                        // placeholder="Enter Email"
                                        label="Father Email"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={48} md={24}>
                                    <p className="textArea">Father Offical Address</p>
                                    <Input
                                        className="field"
                                        componentClass="textarea"
                                        name="fatherOfficalAddress"
                                        rows={3}
                                        style={{ width: '99%' }}
                                        // placeholder="Enter Address"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <SelectPicker
                                        className="field"
                                        name="guardian"
                                        // placeholder="Select the Class Applicant"
                                        label="Guardian"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="guardianName"
                                        // placeholder="Enter Guardian Name"
                                        label="Name of Guardian"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="guardianOccupation"
                                        // placeholder="Enter Occupation"
                                        label="Guardian Occupation"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="guardianAddress"
                                        // placeholder="Enter Address"
                                        label="Guardian Address"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="guardianTelephoneNo"
                                        // placeholder="Enter Telephone No"
                                        label="Guardian Telephone No"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="guardianEmail"
                                        // placeholder="Enter Email"
                                        label="Guardian Email"
                                    />
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Col>
                        <Col md={12}>
                            <FlexboxGrid justify="start">
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="motherName"
                                        // placeholder="Enter Mother Name"
                                        label="Name of Mother"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="motherOccupation"
                                        // placeholder="Enter Mother Occupation"
                                        label="Mother Occupation"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="motherPhoneNo"
                                        // placeholder="Enter Telephone No"
                                        label="Mother Telephone No"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="motherEmail"
                                        // placeholder="Enter Email"
                                        label="Mother Email"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={48} md={24}>
                                    <p className="textArea">Mother Offical Address</p>
                                    <Input
                                        className="field"
                                        componentClass="textarea"
                                        name="motherOfficalAddress"
                                        rows={3}
                                        style={{ width: '99%' }}
                                        // placeholder="Enter Address"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <p className="textArea">If Mother an Old Girl</p>
                                    <RadioGroup inline>
                                        <Radio value="A" className="textArea">
                                            Yes
                                        </Radio>
                                        <Radio value="B" className="textArea">
                                            No
                                        </Radio>
                                    </RadioGroup>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="house"
                                        // placeholder="Enter House"
                                        label="House"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={24}>
                                    <p className="textArea">Period in School</p>
                                    <div>
                                        <Row style={{ width: '100%' }}>
                                            <Col md={12}>
                                                <DatePicker
                                                    name="periodInSchool"
                                                    appearance="default"
                                                    placeholder="From"
                                                    style={{ width: '95%' }}
                                                />
                                            </Col>
                                            <Col md={12}>
                                                <DatePicker
                                                    name="periodInSchool"
                                                    appearance="default"
                                                    placeholder="To"
                                                    style={{ width: '95%' }}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Col>
                    </Row>
                    <br></br>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <Button appearance="primary" onClick={handleSubmit} text="Submit" />
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </Form>
        </div>
    );
};

export default ParentForm;

import React, { useState } from 'react';
import { Schema, Form, FlexboxGrid, Col, DatePicker, Input, Radio, RadioGroup } from 'rsuite';
import TextField from '../../components/atoms/TextField';
import SelectPicker from '../../components/atoms/SelectField';
import { IS_EMAIL, IS_NUMBER, IS_REQUIRED } from '../../constants/ValidationMassage';
import Button from '../../components/atoms/CustomButton';
import './Style.StudentAdmissions.scss';

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
    name: StringType().isRequired(IS_REQUIRED),
    email: StringType()
        .isEmail(IS_EMAIL)
        .isRequired(IS_REQUIRED),
    age: NumberType(IS_NUMBER),
    password: StringType().isRequired(IS_REQUIRED),
    verifyPassword: StringType().isRequired(IS_REQUIRED),
});

const StudentAdmissionForm = () => {
    const [formValue, setFormValue] = useState({
        admissionNo: '',
        firstName: '',
        middleName: '',
        lastName: '',
        admissionDate: '',
        address: '',
        telephoneNo: '',
        gsDivisionNo: '',
        distance: '',
        dateOfBirth: '',
        religion: '',
        race: '',
        formerSchool: '',
        distinctionInStudies: '',
        distinctionInSports: '',
        pupilSeeksAdmission: '',
        classApplicant: '',
        admissionToHostel: '',
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
            <Form
                ref={ref => setForm(ref)}
                onChange={formValue => {
                    setFormValue(formValue);
                }}
                onCheck={formError => {
                    setFormError(formError);
                }}
                formValue={formValue}
                model={model}
            >
                <div className="show-grid">
                    <FlexboxGrid justify="start">
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField
                                className="field"
                                name="admissionNo"
                                // placeholder="Enter Admission No"
                                label="Admission No"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField
                                className="field"
                                name="firstName"
                                // placeholder="Enter First Name"
                                label="First Name"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField
                                className="field"
                                name="middleName"
                                // placeholder="Enter Middle Name"
                                label="Middle Name"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField
                                className="field"
                                name="lastName"
                                // placeholder="Enter Last Name"
                                label="Last Name"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <p className="textArea">Admission Date</p>
                            <DatePicker
                                className="field"
                                name="admissionDate"
                                appearance="default"
                                // placeholder="Enter Admission Date"
                                style={{ width: '95%' }}
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField className="field" name="address" label="Address" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField
                                className="field"
                                name="telephoneNo"
                                // placeholder="Enter Phone Number"
                                label="Telephone No"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField
                                className="field"
                                name="gsDivisionNo"
                                // placeholder="Enter G.S Divison No"
                                label="G.S Division No"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField
                                name="distance"
                                // placeholder="Enter Distance"
                                label="Distance from Place of Stay to School"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <p className="textArea">Date of Birth</p>
                            <DatePicker
                                name="dateOfBirth"
                                appearance="default"
                                // placeholder="Enter Date of Birth"
                                style={{ width: '95%' }}
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <SelectPicker
                                className="field"
                                name="religion"
                                // placeholder="Select the Religion"
                                label="Religion"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <SelectPicker className="field" name="race" label="Race" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <SelectPicker
                                className="field"
                                name="pupilSeeksAdmission"
                                // placeholder="Select the Pupil Seek Admission"
                                label="Class to which Pupil seeks Admission"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <SelectPicker
                                className="field"
                                name="classApplicant"
                                // placeholder="Select the Class Applicant"
                                label="Class the Applicant in now is"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField
                                className="field"
                                name="formerSchool"
                                // placeholder="Enter Former School Name"
                                label="Former School"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <p className="textArea">In the Applicant seeking admission to Hostel</p>
                            <RadioGroup inline>
                                <Radio value="A" className="textArea">
                                    Yes
                                </Radio>
                                <Radio value="B" className="textArea">
                                    No
                                </Radio>
                            </RadioGroup>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={48} md={12}>
                            <p className="textArea">Any Distinction in Studies</p>
                            <Input
                                className="field"
                                componentClass="textarea"
                                name="distinctionInStudies"
                                rows={3}
                                style={{ width: '100%' }}
                                // placeholder="Enter any Distinction in Studies"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={48} md={12}>
                            <p className="textArea">Any Distinction in Sports</p>
                            <Input
                                className="field"
                                componentClass="textarea"
                                name="distinctionInSports"
                                rows={3}
                                style={{ width: '100%' }}
                                // placeholder="Enter any Distinction in Sports"
                            />
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
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

export default StudentAdmissionForm;

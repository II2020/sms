import React, { useState } from 'react';
import { Schema, Form, FlexboxGrid, Col, DatePicker, Input, Radio, RadioGroup } from 'rsuite';
import TextField from '../../components/atoms/TextField';
import SelectPicker from '../../components/atoms/SelectField';
import { IS_REQUIRED } from '../../constants/ValidationMassage';
import Button from '../../components/atoms/CustomButton';
import './Style.StudentAdmissions.scss';

const { StringType } = Schema.Types;

const model = Schema.Model({
    admissionNo: StringType().isRequired(IS_REQUIRED),
    firstName: StringType().isRequired(IS_REQUIRED),
    middleName: StringType().isRequired(IS_REQUIRED),
    lastName: StringType().isRequired(IS_REQUIRED),
    admissionDate: StringType().isRequired(IS_REQUIRED),
    address: StringType().isRequired(IS_REQUIRED),
    telephoneNo: StringType().isRequired(IS_REQUIRED),
    gsDivisionNo: StringType().isRequired(IS_REQUIRED),
    distance: StringType().isRequired(IS_REQUIRED),
    dateOfBirth: StringType().isRequired(IS_REQUIRED),
    religion: StringType().isRequired(IS_REQUIRED),
    race: StringType().isRequired(IS_REQUIRED),
    formerSchool: StringType().isRequired(IS_REQUIRED),
    distinctionInStudies: StringType().isRequired(IS_REQUIRED),
    distinctionInSports: StringType().isRequired(IS_REQUIRED),
    pupilSeeksAdmission: StringType().isRequired(IS_REQUIRED),
    classApplicant: StringType().isRequired(IS_REQUIRED),
    admissionToHostel: StringType().isRequired(IS_REQUIRED),
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
                className="form"
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
                            <TextField className="field" name="admissionNo" label="Admission No" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField className="field" name="firstName" label="First Name" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField className="field" name="middleName" label="Middle Name" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField className="field" name="lastName" label="Last Name" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <p className="textArea">Admission Date</p>
                            <DatePicker
                                className="field"
                                name="admissionDate"
                                appearance="default"
                                style={{ width: '95%' }}
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField className="field" name="address" label="Address" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField className="field" name="telephoneNo" label="Telephone No" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField className="field" name="gsDivisionNo" label="G.S Division No" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField name="distance" label="Distance from Place of Stay to School" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <p className="textArea">Date of Birth</p>
                            <DatePicker name="dateOfBirth" appearance="default" style={{ width: '95%' }} />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <SelectPicker className="field" name="religion" label="Religion" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <SelectPicker className="field" name="race" label="Race" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <SelectPicker
                                className="field"
                                name="pupilSeeksAdmission"
                                label="Class to which Pupil seeks Admission"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <SelectPicker
                                className="field"
                                name="classApplicant"
                                label="Class the Applicant in now is"
                            />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField className="field" name="formerSchool" label="Former School" />
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

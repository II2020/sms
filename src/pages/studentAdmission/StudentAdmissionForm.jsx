import React, { useState } from 'react';
import { Schema, Form, FlexboxGrid, Col, Row, DatePicker, Input, Radio, RadioGroup } from 'rsuite';
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
        <div>
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
                        <Row style={{ width: '100%' }}>
                            <Col md={12}>
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="admissionNo"
                                    label="Admission No"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="firstName"
                                    label="First Name"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="middleName"
                                    label="Middle Name"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="lastName"
                                    label="Last Name"
                                />
                                <Row>
                                    <Col md={12}>
                                        <p className="textArea">Date of Birth</p>
                                    </Col>
                                    <Col md={12}>
                                        <DatePicker
                                            className="field"
                                            name="dateOfBirth"
                                            appearance="default"
                                            style={{ width: '58%', marginTop: '-10px' }}
                                        />
                                    </Col>
                                </Row>
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="distance"
                                    label="Distance from Place of Stay to School"
                                />
                                <SelectPicker
                                    className="field"
                                    name="religion"
                                    label="Religion"
                                    style={{ width: '58%', marginTop: '-10px' }}
                                />
                                <SelectPicker
                                    className="field"
                                    name="pupilSeeksAdmission"
                                    label="Class to which Pupil seeks Admission"
                                    style={{ width: '58%', marginTop: '-10px' }}
                                />
                            </Col>

                            <Col md={12}>
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="telephoneNo"
                                    label="Telephone No"
                                />
                                <TextField style={{ width: '98%' }} className="field" name="address" label="Address" />

                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="gsDivisionNo"
                                    label="G.S Division No"
                                />
                                <Row>
                                    <Col md={12}>
                                        <p className="textArea">Admission Date</p>
                                    </Col>
                                    <Col md={12}>
                                        <DatePicker
                                            className="field"
                                            name="admissionDate"
                                            appearance="default"
                                            style={{ width: '58%', marginTop: '-10px' }}
                                        />
                                    </Col>
                                </Row>
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="formerSchool"
                                    label="Former School"
                                />
                                <SelectPicker
                                    className="field"
                                    name="race"
                                    label="Race"
                                    style={{ width: '58%', marginTop: '-10px' }}
                                />
                                <SelectPicker
                                    className="field"
                                    name="classApplicant"
                                    label="Class the Applicant in now is"
                                    style={{ width: '58%', marginTop: '-10px' }}
                                />
                                <Row>
                                    <Col md={12}>
                                        <p className="textArea">In the Applicant seeking admission to Hostel</p>
                                    </Col>
                                    <Col md={12}>
                                        <RadioGroup
                                            inline
                                            style={{ color: 'black', marginTop: '-5px' }}
                                            defaultValue="A"
                                        >
                                            <Radio value="A" style={{ color: 'black' }}>
                                                Yes
                                            </Radio>
                                            <Radio value="B">No</Radio>
                                        </RadioGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <Col md={12}>
                                <p className="textArea">Any Distinction in Studies</p>
                                <Input
                                    className="field"
                                    componentClass="textarea"
                                    name="distinctionInStudies"
                                    rows={3}
                                    style={{ width: '90%' }}
                                />
                            </Col>
                            <Col md={12}>
                                <p className="textArea">Any Distinction in Sports</p>
                                <Input
                                    className="field"
                                    componentClass="textarea"
                                    name="distinctionInSports"
                                    rows={3}
                                    style={{ width: '90%' }}
                                />
                            </Col>
                        </Row>
                    </FlexboxGrid>
                    <br></br>
                    <FlexboxGrid justify="end">
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

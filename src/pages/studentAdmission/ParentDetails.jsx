import React, { useState } from 'react';
import Button from '../../components/atoms/CustomButton';
import { Schema, Form, FlexboxGrid, Col, Input, Radio, RadioGroup, Row } from 'rsuite';
import TextField from '../../components/atoms/TextField';
import SelectPicker from '../../components/atoms/SelectField';
import { IS_REQUIRED } from '../../constants/ValidationMassage';
import './Style.StudentAdmissions.scss';

const { StringType } = Schema.Types;

const model = Schema.Model({
    fatherName: StringType().isRequired(IS_REQUIRED),
    fatherOccupation: StringType().isRequired(IS_REQUIRED),
    fatherOfficalAddress: StringType().isRequired(IS_REQUIRED),
    fatherPhoneNo: StringType().isRequired(IS_REQUIRED),
    fatherEmail: StringType().isEmail(IS_REQUIRED),
    motherName: StringType().isRequired(IS_REQUIRED),
    motherOccupation: StringType().isRequired(IS_REQUIRED),
    motherOfficalAddress: StringType().isRequired(IS_REQUIRED),
    motherEmail: StringType().isRequired(IS_REQUIRED),
    motherPhoneNo: StringType().isRequired(IS_REQUIRED),
    motherAnOldGirl: StringType().isRequired(IS_REQUIRED),
    guardian: StringType().isRequired(IS_REQUIRED),
    guardianName: StringType().isRequired(IS_REQUIRED),
    guardianOccupation: StringType().isRequired(IS_REQUIRED),
    guardianAddress: StringType().isRequired(IS_REQUIRED),
    guardianTelephoneNo: StringType().isRequired(IS_REQUIRED),
    guardianEmail: StringType().isRequired(IS_REQUIRED),
    ifMotherAnOldGirl: StringType().isRequired(IS_REQUIRED),
    maidenName: StringType().isRequired(IS_REQUIRED),
    periodInSchool: StringType().isRequired(IS_REQUIRED),
    house: StringType().isRequired(IS_REQUIRED),
});

const ParentForm = (props) => {
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
            props.next()
            return;
        }else {
            props.next();
            console.log(formValue, 'Form Value', formError);
        }
        console.log(formValue, 'Form Value', formError);
    };
    return (
        <div className="bodyContent">
            <br></br>
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
                                    name="fatherName"
                                    label="Name of Father"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="fatherOccupation"
                                    label="Father Occupation"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="fatherPhoneNo"
                                    label="Father Telephone No"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="fatherEmail"
                                    label="Father Email"
                                />
                                <SelectPicker
                                    style={{ width: '58%', marginTop: '-10px' }}
                                    className="field"
                                    name="guardian"
                                    label="Guardian"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="guardianOccupation"
                                    label="Guardian Occupation"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="guardianTelephoneNo"
                                    label="Guardian Telephone No"
                                />
                                <Row>
                                    <Col md={12}>
                                        <p className="textArea">If Mother an Old Girl</p>
                                    </Col>
                                    <Col md={12}>
                                        <RadioGroup
                                            inline
                                            style={{ color: 'black', marginTop: '-5px' }}
                                            defaultValue="A"
                                        >
                                            <Radio value="A" className="textArea">
                                                Yes
                                            </Radio>
                                            <Radio value="B" className="textArea">
                                                No
                                            </Radio>
                                        </RadioGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="motherName"
                                    label="Name of Mother"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="motherOccupation"
                                    label="Mother Occupation"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="motherPhoneNo"
                                    label="Mother Telephone No"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="motherEmail"
                                    label="Mother Email"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="guardianName"
                                    label="Name of Guardian"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="guardianAddress"
                                    label="Guardian Address"
                                />
                                <TextField
                                    style={{ width: '98%' }}
                                    className="field"
                                    name="guardianEmail"
                                    label="Guardian Email"
                                />
                                <TextField style={{ width: '98%' }} className="field" name="house" label="House" />
                            </Col>
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <Col md={12}>
                                <p className="textArea">Father Offical Address</p>
                                <Input
                                    className="field"
                                    componentClass="textarea"
                                    name="fatherOfficalAddress"
                                    rows={3}
                                    style={{ width: '90%' }}
                                />
                            </Col>
                            <Col md={12}>
                                <p className="textArea">Mother Offical Address</p>
                                <Input
                                    className="field"
                                    componentClass="textarea"
                                    name="motherOfficalAddress"
                                    rows={3}
                                    style={{ width: '90%' }}
                                />
                            </Col>
                        </Row>
                    </FlexboxGrid>
                    <br></br>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <Button style={{ margin: '0 8px' }} onClick={() => props.prev()} text=" Previous"/>
                            <Button appearance="primary" onClick={handleSubmit} text="Next" />
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </Form>
        </div>
    );
};

export default ParentForm;

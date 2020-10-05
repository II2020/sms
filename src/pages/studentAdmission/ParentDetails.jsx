import React, { useState } from 'react';
import Button from '../../components/atoms/CustomButton';
import { Schema, Form, FlexboxGrid, Col, DatePicker, Input, Radio, RadioGroup, Row } from 'rsuite';
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
                    <Row>
                        <Col md={12}>
                            <FlexboxGrid justify="start">
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="fatherName" label="Name of Father" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="fatherOccupation" label="Father Occupation" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="fatherPhoneNo" label="Father Telephone No" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="fatherEmail" label="Father Email" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={48} md={24}>
                                    <p className="textArea">Father Offical Address</p>
                                    <Input
                                        className="field"
                                        componentClass="textarea"
                                        name="fatherOfficalAddress"
                                        rows={3}
                                        style={{ width: '99%' }}
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <SelectPicker className="field" name="guardian" label="Guardian" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="guardianName" label="Name of Guardian" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="guardianOccupation"
                                        label="Guardian Occupation"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="guardianAddress" label="Guardian Address" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField
                                        className="field"
                                        name="guardianTelephoneNo"
                                        label="Guardian Telephone No"
                                    />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="guardianEmail" label="Guardian Email" />
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Col>
                        <Col md={12}>
                            <FlexboxGrid justify="start">
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="motherName" label="Name of Mother" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="motherOccupation" label="Mother Occupation" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="motherPhoneNo" label="Mother Telephone No" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={12}>
                                    <TextField className="field" name="motherEmail" label="Mother Email" />
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={48} md={24}>
                                    <p className="textArea">Mother Offical Address</p>
                                    <Input
                                        className="field"
                                        componentClass="textarea"
                                        name="motherOfficalAddress"
                                        rows={3}
                                        style={{ width: '99%' }}
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
                                    <TextField className="field" name="house" label="House" />
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

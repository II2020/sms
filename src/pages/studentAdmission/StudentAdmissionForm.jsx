import React, { useState } from 'react';
import { Button, ButtonToolbar, Schema, Form, FlexboxGrid, Col } from 'rsuite';
import TextField from '../../components/atoms/TextField';
import { IS_EMAIL, IS_NUMBER, IS_REQUIRED } from '../../constants/ValidationMassage';
const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
    name: StringType().isRequired(IS_REQUIRED),
    email: StringType().isEmail(IS_EMAIL).isRequired(IS_REQUIRED),
    age: NumberType(IS_NUMBER),
    password: StringType().isRequired(IS_REQUIRED),
    verifyPassword: StringType().isRequired(IS_REQUIRED),
});

const StudentAdmissionForm = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        verifyPassword: '',
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

    const handleCheckEmail = () => {
        console.log(form);
        form.checkForField('email', (checkResult) => {
            console.log(checkResult);
        });
    };

    return (
        <div>
            <Form
                ref={(ref) => setForm(ref)}
                onChange={(formValue) => {
                    setFormValue(formValue);
                }}
                onCheck={(formError) => {
                    setFormError(formError);
                }}
                formValue={formValue}
                model={model}
            >
                <div className="show-grid">
                    <FlexboxGrid justify="start">
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField name="name" label="Username" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField name="email" label="Email" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField name="age" label="Age" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField name="password" label="Password" type="password" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <TextField name="verifyPassword" label="Verify password" type="password" />
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>

                                <Button onClick={handleCheckEmail}>Check Email</Button>
                            </ButtonToolbar>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </Form>
        </div>
    );
};

export default StudentAdmissionForm;

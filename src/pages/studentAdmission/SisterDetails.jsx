import React, { useState } from 'react';
import Button from '../../components/atoms/CustomButton';
import { Form, FlexboxGrid, Col, DatePicker, Input, Radio, RadioGroup, Row } from 'rsuite';
// import TextField from '../../components/atoms/TextField';
// import SelectPicker from '../../components/atoms/SelectField';

const SisterForm = () => {
    const [formValue, setFormValue] = useState({});
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
            <br></br>
            <Form>
                <div className="show-grid">
                    <Row>
                        <Col md={12}>
                            <FlexboxGrid justify="start"></FlexboxGrid>
                        </Col>
                        <Col md={12}>
                            <FlexboxGrid justify="start"></FlexboxGrid>
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

export default SisterForm;

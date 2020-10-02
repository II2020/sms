import React, { useState } from 'react';
import { Content, Row, Breadcrumb, Col } from 'rsuite';
import { NavLink } from 'react-router-dom';
import AddStudentAdmissionForm from './StudentAdmissionForm';
import ParentForm from './ParentDetails';
import SisterForm from './SisterDetails';
import './Style.StudentAdmissions.scss';
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

const steps = [
    {
        title: 'First',
        content: <AddStudentAdmissionForm />,
    },
    {
        title: 'Second',
        content: <ParentForm />,
    },
    {
        title: 'Last',
        content: <SisterForm />,
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];
const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];
const StudentAdmission = () => {
    const [step, setStep] = useState(0);
    const [current, setCurrent] = useState(0);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 2 ? 2 : nextStep);
    };

    const next = () => {
        const currentNo = current + 1;
        setCurrent(currentNo);
    };

    const prev = () => {
        const currentNo = current - 1;
        setCurrent(currentNo);
    };
    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};
export default StudentAdmission;

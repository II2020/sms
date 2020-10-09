import React, { useState, useEffect } from 'react';
import AddStudentAdmissionForm from './StudentAdmissionForm';
import ParentForm from './ParentDetails';
import SisterForm from './SisterDetails';
import { connect } from 'react-redux';
import { SAVE_CURRENT_PATH } from '../../redux/action/CurrentPath';
import './Style.StudentAdmissions.scss';
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

const steps = [
    {
        title: "Student's Details",
        content: <AddStudentAdmissionForm />,
    },
    {
        title: "Parent's Details",
        content: <ParentForm />,
    },
    {
        title: "Sister's Details",
        content: <SisterForm />,
    },
];

const StudentAdmission = props => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        props.saveCurrentPath('studentAdmission');
    });
    const next = () => {
        const currentNo = current + 1;
        setCurrent(currentNo);
    };

    const prev = () => {
        const currentNo = current - 1;
        setCurrent(currentNo);
    };
    return (
        <div className="bodyContent">
            <Steps current={current} style={{ margin: 'auto', width: '80%', padding: '10px' }}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content" style={{ margin: 'auto', width: '97%', padding: '10px' }}>
                {steps[current].content}
            </div>
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
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        saveCurrentPath: path => {
            dispatch({ type: SAVE_CURRENT_PATH, payload: path });
        },
    };
};
export default connect(null, mapDispatchToProps)(StudentAdmission);

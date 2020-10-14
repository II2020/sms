import React, { useState, useEffect } from 'react';
import AddStudentAdmissionForm from './StudentAdmissionForm';
import ParentForm from './ParentDetails';
import SisterForm from './SisterDetails';
import { connect } from 'react-redux';
import { SAVE_CURRENT_PATH } from '../../redux/action/CurrentPath';
import './Style.StudentAdmissions.scss';
import { Steps} from 'antd';

const { Step } = Steps;


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



    const steps =()=>{
        return [
            {
                title: "Pupil's Details",
                content: <AddStudentAdmissionForm next={next} prev={prev} />,
            },
            {
                title: "Parent's Details",
                content: <ParentForm next={next} prev={prev}/>,
            },
            {
                title: "Sister's Details",
                content: <SisterForm prev={prev}/>,
            },
        ];
    }
    return (
        <div >
            <Steps current={current} style={{ margin: 'auto', width: '80%', padding: '10px' }}>
                {steps().map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content" style={{ margin: 'auto', width: '97%', padding: '10px' }}>
                {steps()[current].content}
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

import { Card, Col, Row } from 'antd';
import React, { Component, useState } from 'react';
import attendanceCards from './attendanceCards';
import './Style.Attendance.scss';
const defaltstyle={
    margin: '10px',
    borderColor: 'blue',
    borderWidth: '3px',
    borderRadius: '20px',
}
const clickstyle={
    margin: '10px',
    borderColor: 'blue',
    borderWidth: '3px',
    borderRadius: '20px',
    backgroundColor:'blue',
    color:'#fafafa'
}
const AttendanceViewType = () => {

    const [style,setstyle]=useState('false');
    const [click,setClick]=useState('');

    const changeStyle = (id) =>{
        setstyle(!style);
        setClick(id);
        console.log(id);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1%' }}>
            <Card className="viewtype" style={{  borderWidth: '10px', borderRadius: '20px' }}>
                <div style={{ justifyContent: 'center', alignItems: 'center', margin:'auto',paddingTop:'10%' }}>
                    <Row style={{ width: '100%' }}>
                        <Col span={12}>
                            <Card onClick={()=><attendanceCards/>}
                            // onClick={()=>changeStyle("grade")}
                               style={!style && click === 'grade'? clickstyle : defaltstyle} 
                            >
                                <p className="para">Grade</p>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                // onClick={()=>changeStyle("indivitual")}
                               style={!style && click === 'indivitual'? clickstyle : defaltstyle}
                            >
                                <p className="para">Individual</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    );
};

export default AttendanceViewType;

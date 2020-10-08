import React, { useState } from 'react';
import { Breadcrumb, Row, Col, Content } from 'rsuite';
import { NavLink } from 'react-router-dom';
import AttendanceCards from '../studentAttendance/attendanceCards';
import {Tabs} from 'antd';
import AttedanceTable from './AttendanceTable';
import BulkAttedanceTable from './BulkAttendance';
import AttendanceViewType from './AttendanceViewType';

const { TabPane } = Tabs;

const Attendance = () => {
    const [isStudentDatail, setIsStudentDatail] = useState(true);

    const changeTabs=(activekey)=> {
        // activekey===1 ?
        setIsStudentDatail(false);
        // :setIsStudentDatail(true);
    }
    const backToTab=()=> {
        
        setIsStudentDatail(true);
    }
    return (
        <>
            <Content >
                <div>
                    <Row>
                        <Col  md={4}>
                            <Breadcrumb className="breadcrumb">
                                <NavLink to="/">
                                    <>Home</>
                                </NavLink>
                                <NavLink to="/attendance" >
                                   <p onClick={()=>backToTab()}>StudentAttendance  {!isStudentDatail? 
                                   ' /StudentAttendance'
                                :''}</p>
                                </NavLink>
                               
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="TodayStudentAttendance" key="1">
                           {isStudentDatail?<AttendanceCards changeTabs={changeTabs}/>:<AttedanceTable/>}
                            {/* <AttedanceTable/>}  */}
                            </TabPane>
                            <TabPane tab="ListStudentAttendance" key="2">
                            {isStudentDatail?<AttendanceCards changeTabs={changeTabs}/>:<BulkAttedanceTable/>}
                            </TabPane>
                            <TabPane tab="View Attendance" key="3">
                                <AttendanceViewType/>
                            </TabPane>
                           
                        </Tabs>
                    </Row>
                    
                </div>
            </Content>
        </>
    );
};

export default Attendance;

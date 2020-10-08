import React, { useState } from 'react';
import { Col, Row} from 'rsuite';
import { connect } from 'react-redux';
import { grade } from '../../constants/MockData';
import './Style.Attendance.scss';
import { Card } from 'antd';
// import AttedanceTable from './AttendanceTable';

const AttendanceCards = (props) => {
    const [gradeJson] = useState(grade);
    const [division, setdivision] = useState(grade[0].divison);

    console.log('de',division)
    // const [click, setClick] = useState('false');

    const divisionClick = (e) => {
        console.log('e',e);
        setdivision(e);
        // setClick('true');
        // console.log('click',click)
    };
    return (
        <>
            <Row>
                <Col xs={12} sm={12} md={12}>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        //    backgroundColor:'blue',
                           marginLeft:'15px',
                           paddingBottom:'15px'
                        }}
                    >
                        {gradeJson.map((e) => {
                            return (
                                <Card active={true}
                                    style={{
                                        backgroundColor:props.theme.color,
                                        // click === 'false' ? props.theme.color : props.theme.backgroundColor,
                                        color: props.theme.backgroundColor,
                                        borderColor: props.theme.backgroundColor,
                                        borderWidth: '2%',
                                        //  padding:'3%',
                                        fontWeight: '10%',
                                        justifyContent: 'center',
                                        WebkitBoxShadow: '3px 7px 28px 7px rgba(161, 167, 219, 0.86)',
                                        MozBoxShadow: '3px 7px 38px 7px rgba(206, 228, 13, 0.86)',
                                        boxShadow: '3px 7px 10px 5px rgba(161, 167, 219, 0.86)',
                                         width: '15%',
                                        // height: '20%',
                                        margin:'10px',
                                        borderRadius:'15px'
                                    }}
                                    onClick={() => divisionClick(e.divison)}
                                    key={e.id}
                                >
                                    <p className="h1" key={e.id}>
                                        G{e.grade}
                                    </p>
                                </Card>
                            );
                        })}
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <div style={{backgroundColor:props.theme.color}}></div>
                </Col>
                <Col xs={12} sm={12} md={12}>
                    {/* <div style={{display:'flex',flexWrap:'wrap' ,flexDirection:'row',justifyContent:'space-evenly',padding:'30%',width:'10%',height:'10%'}}>{division.map(e=><div style={{ backgroundColor:props.theme.color,
                    color:props.theme.backgroundColor 
                    ,borderColor:props.theme.backgroundColor,borderWidth:'2%',width:'200px',height:'200px'}}><p>{e.division}</p></div>)}</div>
                 */}

                    {division.map((e) => (
                      
                        <Card
                            style={{
                                 display: 'inline-flex',
                                backgroundColor: props.theme.color,
                                color: props.theme.backgroundColor,
                                borderColor: props.theme.backgroundColor,
                                justifyContent:'center',
                                margin:'10px',
                                borderRadius:'15px',
                                 borderWidth: '2px',
                                 width: '15%',
                                  height: '100px',
                                
                                
                            }}
                            onClick={() => props.changeTabs()}
                        >
                            <h2>{e.division}</h2>
                        </Card>
                    ))}
                </Col>
            </Row>
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(AttendanceCards);

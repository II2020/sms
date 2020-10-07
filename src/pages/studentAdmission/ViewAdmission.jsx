import React from 'react';
import { Col, Row} from 'antd';
import CustomTable from '../../components/molecules/CustomTable';
import { StudentD } from '../../constants/mockData';
import './Style.StudentAdmissions.scss';

const columns = [
    {
        title: "Pupil's Details",
        dataIndex: 'name',
    },
    {
        title: ' ',
        dataIndex: 'details',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
];
const column4 = [
    {
        title: " ",
        dataIndex: 'name',
    },
    {
        title: ' ',
        dataIndex: 'details',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
];


const column1 = [
    {
        title: 'Father Details',
        dataIndex: 'name',
    },
    {
        title: ' ',
        dataIndex: 'details',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
];

const column2 = [
    {
        title: 'Mother Details',
        dataIndex: 'name',
    },
    {
        title: ' ',
        dataIndex: 'details',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
];
const column3 = [
    {
        title: 'Guardian Details',
        dataIndex: 'name',
    },
    {
        title: ' ',
        dataIndex: 'details',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
];

const data = StudentD;

var arr = data.splice(0, 8);
var arr1 = data.splice(0, 8);
var arr2 = data.splice(0,5);
var arr3 = data.splice(0,5);


export default function ViewAdmission() {
    return (
        <div>

            <Col md={24}>
                <Row>
                    <Col md={12} style={{padding:'15px 5px 5px 15px'} } >
                    
                        <CustomTable columns={columns} dataSource={arr} size="small" style={{backgroundColor: 'black', boxShadow: "20px 20px 20px grey" }} />
                  
                    </Col>
                    <Col md={12} style={{padding:'15px 15px 5px 5px'}}>
                   
                    <CustomTable columns={column4} dataSource={arr1} size="small" style={{backgroundColor: 'black', boxShadow: "20px px 20px grey" }}/>
                   
                    </Col>
                </Row>
                <Row>
                <Col md={8 } style={{padding:'5px 5px 5px 15px'}}> 
               

                <CustomTable columns={column1} dataSource={arr2} size="small" style={{backgroundColor: 'black', boxShadow: "20px 5px 20px grey" }} />
             
                </Col>
                <Col md={8} style={{padding:'5px 5px 5px 5px'}}> 
               
                <CustomTable columns={column2} dataSource={arr3} size="small" style={{backgroundColor: 'black', boxShadow: "20px 5px 20px grey" }}/>
              
                </Col>
                <Col md={8} style={{padding:'5px 15px 5px 5px'}}> 
                
                <CustomTable columns={column3} dataSource={data} size="small" style={{backgroundColor: 'black', boxShadow: "20px 5px 20px grey" }}/>
              
                </Col>
                </Row>
            </Col>

        </div>
    );
}

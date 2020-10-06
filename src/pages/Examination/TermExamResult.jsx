import React from 'react';
import CustomTable from '../../components/molecules/CustomTable';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const TermExamResult = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/addTermResults');
    };
    const columns = [
        {
            title: 'Admission Number',
            dataIndex: 'admissionnumber',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: '',
            key: 'action',

            render: () => (
                <span>
                    <PlusOutlined style={{ color: 'blue', fontSize: '1.2em' }} onClick={handleClick} />
                </span>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            admissionnumber: '13266',
            name: 'Rammiya Narayanasamy',
        },
        {
            key: '2',
            admissionnumber: '13267',
            name: 'Pakeesan Viththiyanathan',
        },
        {
            key: '3',
            admissionnumber: '13268',
            name: 'Mathu Thiya Sharma',
        },
        {
            key: '4',
            admissionnumber: '13267',
            name: 'Keerthana Raveendran',
        },
    ];
    return (
        <div>
            <CustomTable
                title="Term Exam Results"
                columns={columns}
                pagination={{ defaultPageSize: 10 }}
                dataSource={data}
            />
        </div>
    );
};

export default TermExamResult;

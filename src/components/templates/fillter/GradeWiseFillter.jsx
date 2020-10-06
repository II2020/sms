import React, { useState } from 'react';
import { Row, Col, FlexboxGrid } from 'rsuite';
import MiniCard from '../../molecules/MiniCard';
import NanoCard from '../../molecules/NanoCard';
import './Style.fillter.scss';

const GradeWiseFillter = (props) => {
    const [selectedId, setSelectedId] = useState('');
    const [selectedDivisionId, setSelectedDivisionId] = useState('');
    const [divisions, setDivisions] = useState([]);

    const onClickGrade = (gradeId, division) => {
        setSelectedId(gradeId);
        setDivisions(division);
        props.onClickGrade(gradeId, division);
    };

    const onClickDivision = (divisionId, division) => {
        setSelectedDivisionId(divisionId);
        props.onClickDivision(divisionId, division);
    };
    return (
        <div className="container">
            {' '}
            <FlexboxGrid justify="space-between" style={{ width: '100%' }}>
                <Row className="show-grid" style={{ width: '100%' }}>
                    <Col xs={24} sm={24} md={12}>
                        {props.grade.map((post, index) => {
                            return (
                                <FlexboxGrid.Item componentClass={Col} colspan={24} md={4} key={index}>
                                    <MiniCard
                                        key={index}
                                        text={`G${post.grade}`}
                                        id={post.id}
                                        obj={post.divison}
                                        onClick={onClickGrade}
                                        className={post.id === selectedId ? 'minicardselected' : 'minicard'}
                                        classNameText={post.id === selectedId ? 'selectedtext' : 'textMini'}
                                    />
                                </FlexboxGrid.Item>
                            );
                        })}
                    </Col>
                    <Col xs={24} sm={24} md={1}></Col>
                    <Col xs={24} sm={24} md={11}>
                        {divisions &&
                            divisions.map((post, index) => {
                                return (
                                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={4} key={index}>
                                        <NanoCard
                                            key={index}
                                            text={post.division}
                                            id={post.id}
                                            obj={post.division}
                                            onClick={onClickDivision}
                                            className={post.id === selectedDivisionId ? 'nanocardselected' : 'nanocard'}
                                            classNameText={post.id === selectedDivisionId ? 'selectedtext' : 'textMini'}
                                        />
                                    </FlexboxGrid.Item>
                                );
                            })}
                    </Col>
                </Row>
            </FlexboxGrid>
        </div>
    );
};
export default GradeWiseFillter;

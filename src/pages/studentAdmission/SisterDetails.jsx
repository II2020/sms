import React, { useState } from 'react';
import { Row, Col, FlexboxGrid } from 'rsuite';
import { Space, Input } from 'antd';
import Button from '../../components/atoms/CustomButton';

const SisterForm = () => {
    const [inputList, setInputList] = useState([{ name: '', grade: '', admissionNo: '' }]);
    const handleSubmit = () => {};
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { name: '', grade: '', admissionNo: '' }]);
    };

    return (
        <div className="App">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <Row style={{ width: '100%' }}>
                    <Col md={6}>
                        <label>Name</label>
                    </Col>
                    <Col md={6}>
                        <label>Grade</label>
                    </Col>
                    <Col md={6}>
                        <label>Admission No</label>
                    </Col>
                </Row>
                <div style={{ height: '10px' }} />
                {inputList.map((x, i) => {
                    return (
                        <div className="box">
                            <Row style={{ width: '100%' }}>
                                <Col md={6}>
                                    <Input name="name" value={x.name} onChange={event => handleInputChange(event, i)} />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        className="ml10"
                                        name="grade"
                                        value={x.grade}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        className="ml10"
                                        name="admissionNo"
                                        value={x.admissionNo}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <div className="btn-box">
                                        <Space>
                                            {inputList.length !== 1 && (
                                                <Button
                                                    className="mr10"
                                                    onClick={() => handleRemoveClick(i)}
                                                    text="Remove"
                                                />
                                            )}

                                            {inputList.length - 1 === i && (
                                                <Button onClick={handleAddClick} text="Add" />
                                            )}
                                        </Space>
                                    </div>
                                </Col>
                            </Row>
                            <div style={{ height: '10px' }} />
                        </div>
                    );
                })}
                <FlexboxGrid justify="end">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <Button appearance="primary" onClick={handleSubmit} text="Submit" />
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        </div>
    );
};

export default SisterForm;

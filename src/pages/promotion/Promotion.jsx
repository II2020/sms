import React, { useState } from 'react';
import { Radio, RadioGroup, FormGroup, Row, Col, Modal, Icon } from 'rsuite';
import CustomButton from '../../components/atoms/CustomButton';
import './Style.Promotion.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Promotion = (props) => {
    const [promotionType, setPromationType] = useState('/promotion');
    const [visible, setVisible] = useState(false);
    const [allPromotion, setAllPromotion] = useState('');
    const handleSubmit = () => {
        if (allPromotion === 'allPromotion') {
            setVisible(true);
        }
        setAllPromotion('');
    };
    const close = () => {
        setVisible(false);
    };
    const handleChange = (value) => {
        if (value === 'allPromotion') {
            setAllPromotion(value);
        }
        var path = value === 'currentYear' ? '/promotionType' : '/promotionType';
        setPromationType(path);
    };
    return (
        <div class="flex-container">
            <FormGroup>
                <RadioGroup
                    style={{ background: props.theme.color }}
                    name="radioList"
                    inline
                    className="radioGroup"
                    onChange={(value) => handleChange(value)}
                >
                    <Row>
                        <Col className="radio" colspan={24} md={8}>
                            <Radio value="allPromotion">All Promotion</Radio>
                        </Col>
                        <Col className="radio" colspan={24} md={8}>
                            <Radio value="currentYear">Current Year</Radio>
                        </Col>
                        <Col className="radio" colspan={24} md={8}>
                            <Radio value="individualPromotion">Individual Promotion</Radio>
                        </Col>
                    </Row>
                    <Row>
                        <Col colspan={24} md={24}>
                            <NavLink to={promotionType}>
                                <CustomButton text={'SUBMIT'} onClick={() => handleSubmit()} />
                            </NavLink>
                        </Col>
                    </Row>
                </RadioGroup>
            </FormGroup>
            <Modal backdrop="static" show={visible} onHide={close} size="xs">
                <Modal.Body>
                    <Icon
                        icon="remind"
                        style={{
                            color: '#ffb300',
                            fontSize: 24,
                        }}
                    />
                    {'  '}
                    Are you sure you want to promote all students?
                </Modal.Body>
                <Modal.Footer>
                    <CustomButton onClick={close} text="OK" />
                    <CustomButton
                        onClick={close}
                        text="Cancel"
                        style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}
                    />
                </Modal.Footer>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(Promotion);

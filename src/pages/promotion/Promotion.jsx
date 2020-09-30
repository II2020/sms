import React, { useState } from 'react';
import { Radio, RadioGroup, FormGroup, Row, Col } from 'rsuite';
import CustomButton from '../../components/atoms/CustomButton';
import './Style.Promotion.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Promotion = (props) => {
    const [promotionType, setPromationType] = useState('/promotion');
    const handleSubmit = () => {};
    const handleChange = (value) => {
        var path =
            value === 'allPromotion'
                ? '/allPromotionUI'
                : value === 'currentYear'
                ? '/promotionType'
                : value === 'individualPromotion'
                ? '/promotionType'
                : '';
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
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(Promotion);

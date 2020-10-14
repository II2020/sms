import React from 'react';
import { Radio, RadioGroup, Row, Col } from 'rsuite';
import './Style.Promotion.scss';
import { connect } from 'react-redux';

const PromotionLayout = (props) => {
    return (
        <div class="flex-container">
            <span class="border-text">Promotion</span>
            <RadioGroup name="radioList" inline className="radioGroup">
                {' '}
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
            </RadioGroup>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(PromotionLayout);

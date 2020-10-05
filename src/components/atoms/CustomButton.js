import React, { useState } from 'react';
import { Button } from 'rsuite';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
    color: PropTypes.string,
    labelName: PropTypes.string,
    width: PropTypes.string,
    float: PropTypes.string,
};
const defaultProps = {
    buttonColor: 'red',
    size: 'md',
    text: 'Button',
    active: true,
    disabled: false,
    loading: false,
    appearance: 'primary',
};
const CustomButton = props => {
    const [buttonStyle] = useState(props.theme);

    return (
        <Button
            componentClass={props.componentClass}
            active={props.active}
            block={props.block}
            children={props.children}
            disabled={props.disabled}
            href={props.href}
            size={props.size}
            loading={props.loading}
            onClick={props.onClick}
            appearance={props.appearance}
            style={{ ...buttonStyle, ...props.style }}
        >
            {props.text}
        </Button>
    );
};
CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;
const mapStateToProps = state => {
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(CustomButton);

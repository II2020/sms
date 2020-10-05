import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Style.Card.scss';

const NanoCard = (props) => {
    return (
        <div className={props.className} onClick={() => props.onClick(props.id, props.obj)} key={props.key}>
            <div className="cardcontainernano">
                <h4>
                    <p className={props.classNameText}>{props.text}</p>
                </h4>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(NanoCard);

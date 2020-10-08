import React from 'react';
import { connect } from 'react-redux';
import './Style.Card.scss';

const MiniCard = (props) => {
    return (
        <div className={props.className} onClick={() => props.onClick(props.id, props.obj)} key={props.key}>
            <div className="cardcontainer">
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

export default connect(mapStateToProps, null)(MiniCard);

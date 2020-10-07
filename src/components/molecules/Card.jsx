import React from 'react';
import { connect } from 'react-redux';
import './Style.Card.scss';

const Card = (props) => {
    return (
        <div className="container">
            <div
                // className="card"
                onClick={props.onClick}
                style={{
                    backgroundImage: `url(${props.icon})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#F4F9F6',
                    backgroundSize: '150px',
                    backgroundPosition: 'center',
                    width: '100%',
                    borderRadius: '5px',
                    height: '190px',
                    hover: {
                        boxShadow: '10px 14px 15px 14px rgba(0, 0, 0, 0.3)',
                        transform: "translate3d('2px')",
                        transition: '0.3s ease-in-out',
                    },
                }}
            >
                <div className="overlay" style={{ backgroundColor: `${props.theme.backgroundColor}` }}>
                    <div className="text">{props.text}</div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(Card);

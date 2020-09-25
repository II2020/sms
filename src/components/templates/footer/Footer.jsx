import React, { useState } from 'react';
import { Footer } from 'rsuite';
import { connect } from 'react-redux';
import './Style.Footer.scss';

const FooterComponent = (props) => {
    const [footerStyle] = useState(props.theme);
    return (
        <Footer className="footer" style={{ ...footerStyle }}>
            Footer
        </Footer>
    );
};
const mapStateToProps = (state) => {
    console.log(state);
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(FooterComponent);

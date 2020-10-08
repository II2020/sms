import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Content } from 'rsuite';
import HeaderComponent from '../components/templates/header/HeaderComponent';
import FooterComponent from '../components/templates/footer/Footer';
import HomeScreen from '../components/templates/homescreen/HomeScreen';
import Student from '../pages/studentAdmission/StudentAdmission';

import './Style.Layout.scss';
import TermExamResult from '../pages/Examination/TermExamResult';
import AddTermResults from '../pages/Examination/AddTermResults';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
const Router = () => {
    const { height } = useWindowDimensions();

    return (
        <div>
            <Container
                style={{
                    // backgroundImage: `url(${Image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#fafafa',
                    height: height,
                    width: '100%',
                }}
            >
                <Route path="/">
                    <HeaderComponent />
                </Route>
                <Content>
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/student" component={Student} />
                        <Route exact path="/termExamResult" component={TermExamResult} />
                        <Route exact path="/addTermResults" component={AddTermResults} />
                    </Switch>
                </Content>

                <FooterComponent />
            </Container>
        </div>
    );
};
export default Router;

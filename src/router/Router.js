import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Content } from 'rsuite';
import HeaderComponent from '../components/templates/header/HeaderComponent';
import FooterComponent from '../components/templates/footer/Footer';
import HomeScreen from '../components/templates/homescreen/HomeScreen';
import Student from '../pages/studentAdmission/StudentAdmission';
import './Style.Layout.scss';
import ViewAdmission from '../pages/studentAdmission/ViewAdmission';

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
                        <Route exact path="/ViewAdmission" component={ViewAdmission} />
                        <Route exact path="/student" component={Student} />
                    </Switch>
                </Content>

                <FooterComponent />
            </Container>
        </div>
    );
};
export default Router;

import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Content } from 'rsuite';
import HeaderComponent from '../components/templates/header/HeaderComponent';
import FooterComponent from '../components/templates/footer/Footer';
import HomeScreen from '../components/templates/homescreen/HomeScreen';
import Student from '../pages/studentAdmission/StudentAdmission';
import Image from '../assets/bag.jpg';
import './Style.Layout.scss';
import Login from '../components/templates/Login/Login';

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
const Router = (props) => {
    const { height } = useWindowDimensions();

    return (
        <div className="show-fake-browser navbar-page">
            <Container
                style={{
                    backgroundImage: `url(${Image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: height,
                }}
            >
                {props.location.pathname !== '/login' ? <HeaderComponent path="/" /> : ''}
                <Content>
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/student" component={Student} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </Content>
                {props.location.pathname !== '/login' ? <FooterComponent /> : ''}
            </Container>
        </div>
    );
};
export default Router;

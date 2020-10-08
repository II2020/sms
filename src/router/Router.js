import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Content } from 'rsuite';
import HeaderComponent from '../components/templates/header/HeaderComponent';
import FooterComponent from '../components/templates/footer/Footer';
import HomeScreen from '../components/templates/homescreen/HomeScreen';
import Student from '../pages/studentAdmission/StudentAdmission';
import './Style.Layout.scss';
import Login from '../components/templates/Login/Login';
import Logo from '../assets/student.png';

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
        <div>
            <Container
                style={{
                    backgroundImage: `url(${props.location.pathname == '/login' ? 'rgb(75, 38, 238)' : '#fafafa'})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#fafafa',
                    height: height,
                    width: '100%',
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

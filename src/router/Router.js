import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Content } from 'rsuite';
import HeaderComponent from '../components/templates/header/HeaderComponent';
import FooterComponent from '../components/templates/footer/Footer';
import HomeScreen from '../components/templates/homescreen/HomeScreen';
import Student from '../pages/studentAdmission/StudentAdmission';
import ViewStudents from '../pages/studentAdmission/ViewStudents';
// import Image from '../assets/bag.jpg';
import './Style.Layout.scss';
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
                <Content style={{ overflow: 'scroll' }}>
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/student" component={Student} />
                        <Route exact path="/viewStudent" component={ViewStudents} />
                    </Switch>
                </Content>

                <FooterComponent />
            </Container>
        </div>
    );
};
export default Router;

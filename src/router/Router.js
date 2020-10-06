import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Content } from 'rsuite';
import HeaderComponent from '../components/templates/header/HeaderComponent';
import FooterComponent from '../components/templates/footer/Footer';
import HomeScreen from '../components/templates/homescreen/HomeScreen';
import Student from '../pages/studentAdmission/StudentAdmission';
import ViewStudents from '../pages/studentAdmission/ViewStudents';
import Image from '../assets/bag.jpg';
import './Style.Layout.scss';

const Router = () => {
    return (
        <div className="show-fake-browser navbar-page">
            <Container
                style={{
                    backgroundImage: `url(${Image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '680px',
                }}
            >
                <Route path="/">
                    <HeaderComponent />
                </Route>
                <Content>
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

import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Content } from 'rsuite';
import HeaderComponent from '../components/templates/header/HeaderComponent';
import FooterComponent from '../components/templates/footer/Footer';
import Image from '../assets/school.jpg';
import HomeScreen from '../components/templates/homescreen/HomeScreen';

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
                <Route path="/">
                    <HeaderComponent />
                </Route>
                <Content>
                    <Switch>
                        <Route path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                    {/* <Button size="md" text="Submit" style={buttonStyle} /> */}
                </Content>

                <FooterComponent />
            </Container>
        </div>
    );
};
export default Router;

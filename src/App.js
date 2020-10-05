import React from 'react';
import Content from './router/Router';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/templates/Login/Login';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Content} />
                {/* <Route exact path="/login" component={Login} /> */}
            </Switch>
        </div>
    );
}

export default App;

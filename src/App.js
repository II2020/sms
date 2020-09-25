import React from 'react';
import Content from './router/Router';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Content} />
            </Switch>
        </div>
    );
}

export default App;

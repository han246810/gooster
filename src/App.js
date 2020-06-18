import React from 'react';
import './App.css';



import { Provider } from 'react-redux';
import store from './store'
import Home from './Home';
import Login from './Login'
import UserInfo from './UserInfo'

import { HashRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/user-info" component={UserInfo}></Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;

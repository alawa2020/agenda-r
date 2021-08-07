import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Home from '../Home';
import Agenda from '../Agenda';
import Login from '../Login';
import Menu from './Menu';

const RouteComponent = () => {
    return (
        <>
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/agenda" component={Agenda} />
                <Route pathF="/login" component={Login} />
            </Switch>
        </Router>
            

        </>
    )
}

export default RouteComponent

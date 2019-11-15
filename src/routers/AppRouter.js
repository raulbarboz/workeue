import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Home from '../components/Home';
import Signup from '../components/Signup';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage'; 
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/" component={ Home } exact={ true } />
            <PublicRoute path="/signup" component={ Signup } exact={ true } />
            <PrivateRoute path="/dashboard" component={ Dashboard } exact={ true } />
            <Route component={ NotFoundPage } />
        </Switch>
    </Router>
)

export default AppRouter;
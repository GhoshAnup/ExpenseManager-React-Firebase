import React from 'react';
import {Router,Route,Switch,Link,NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter =() =>(
    <Router history={history}>
    <div>
        <Header/>
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <Route path="/dashboard" component={ExpenseDashboard}/>
        <PublicRoute path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={Help}/>
        <Route component={NotFound}/>
        </Switch>
    </div>      
    </Router>
);

export default AppRouter;
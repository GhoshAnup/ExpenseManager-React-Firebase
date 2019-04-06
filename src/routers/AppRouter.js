
import React from 'react';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';


const AppRouter =() =>(
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={Help}/>
        <Route component={NotFound}/>
        </Switch>
    </div>      
    </BrowserRouter>
);

export default AppRouter;
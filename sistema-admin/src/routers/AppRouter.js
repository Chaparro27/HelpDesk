import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useCookies, withCookies } from 'react-cookie';

import AdminPrivateRoute from './AdminPrivateRoute';
import PublicRoute from './PublicRoute';

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const AppRouter = () => {
    
    const [cookies] = useCookies(['c_user'])
    
            // <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            // <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            // <Redirect from="/" to="/admin/index" />
    return (
        <Router>
            <Switch>
                <AdminPrivateRoute 
                    path="/admin" 
                    component={ AdminLayout }
                    isAuthenticated={ cookies.c_user === undefined ? false : cookies.c_user.isLogged }
                    />
                <PublicRoute 
                    path="/auth" 
                    component={ AuthLayout } 
                    isAuthenticated={ cookies.c_user === undefined ? false : cookies.c_user.isLogged }
                    /> 
                <Redirect from="/" to="/admin/index" />
            </Switch>
        </Router>
    )
}

export default withCookies(AppRouter);

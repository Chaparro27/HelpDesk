import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

const AdminPrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest } 
            component={ ( props ) => (
                ( !isAuthenticated )
                    ? <Redirect to="/auth" />
                    : <Component { ...props }/>
            )}
        />
    )
}

AdminPrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

export default AdminPrivateRoute;

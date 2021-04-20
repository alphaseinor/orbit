import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

const PrivateRoute = (props) => {
    const authContext = useContext(AuthContext)
    return (
        <Route>
            {
                authContext.isAuthenticated() && authContext.isAdmin() ? <>{props.children}</> : <Redirect to="/" />
            }
        </Route>
    )
}

export default PrivateRoute; 
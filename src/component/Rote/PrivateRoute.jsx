import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
            render={props =>(
                localStorage.getItem('token') ? 
                (<Component {...props}/>)
            :(<Redirect to="/login"/>))
        }
        ></Route>
)

export default PrivateRoute
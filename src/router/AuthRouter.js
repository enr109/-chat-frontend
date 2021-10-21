import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from '../pages/LoginPage';
import '../css/login2.css';


export const AuthRouter = () => {
    return (
        <section>
                <Switch>
                    <Route exact path="/auth/login" component={ LoginPage }/>
                    <Redirect to="/auth/login"/>
                </Switch>
        </section>
    )
        
}

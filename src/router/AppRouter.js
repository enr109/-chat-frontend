import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {

    const {auth, verificaToken } = useContext( AuthContext );

    console.log(auth);

    useEffect( () => {
        verificaToken();
    }, [verificaToken])

    if ( auth.checking ) {
        return <h1>espere por favor</h1>
    }
    return (
        <Router>
            <div>
                <section>
                    <Switch>
                        <PublicRoute isAuthenticated = { auth.logged } path="/auth" component={ AuthRouter } />
                        <PrivateRoute isAuthenticated = { auth.logged } exact path="/" component={ ChatPage } />
                        <Redirect to="/"/>
                    </Switch>
                </section>
            </div>
        </Router>
    )
}

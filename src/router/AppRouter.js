import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';


import { ChatPage } from '../pages/ChatPage';
import { UserPage } from '../pages/UserPage';
import { AuthRouter } from './AuthRouter';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <section>
                    <Switch>
                        <Route path="/auth" component={ AuthRouter } />
                        <Route exact path="/user" component={ UserPage } />
                        <Route exact path="/" component={ ChatPage } />
                        <Redirect to="/"/>
                    </Switch>
                </section>
            </div>
        </Router>
    )
}

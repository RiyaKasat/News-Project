import React from 'react'
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import Home1 from './Home1';
import AdminLogin from './AdminLogin';
import Protected from './Protected';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import UserInt from './UserInt';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };


    return (
      
        <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
      >
        <Switch>
          <Route path='/AdminPage' exact={true} component={Home1} />
          <SecureRoute path='/protected' component={Protected} />
          <Route path='/login' render={() => <AdminLogin config={oktaSignInConfig} />} />
          <Route path='/login/callback' component={LoginCallback} />
          <SecureRoute path='/UserInt' component={UserInt}/>
        </Switch>
      </Security>
    )
}

export default AppWithRouterAccess

import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWrapper from './route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <RouteWrapper path="/login" component={SignIn} />
            <RouteWrapper path="/" component={Dashboard} isPrivate />
        </Switch>
    );
}

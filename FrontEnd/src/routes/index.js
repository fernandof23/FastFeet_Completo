import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteWrapper from './route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';

import DeliveryRoute from './Delivery';
import DeliverymanRoute from './Deliveryman';
import RecipientsRoute from './Recipients';
import ProblemsRoute from './Problems';

export default function Routes() {
    return (
        <Switch>
            <RouteWrapper path="/login" component={SignIn} />
            <RouteWrapper path="/" exact component={Dashboard} isPrivate />

            <Route path="/delivery">{DeliveryRoute()}</Route>
            <Route path="/deliveryman">{DeliverymanRoute()}</Route>
            <Route path="/recipients">{RecipientsRoute()}</Route>
            <Route path="/problems">{ProblemsRoute()}</Route>
        </Switch>
    );
}

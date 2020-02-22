import React from 'react';
import RouteWrapper from './route';

import Deliveryman from '~/pages/Deliveryman';

export default function DeliverymanRoute() {
    return (
        <>
            <RouteWrapper
                path="/deliveryman"
                exact
                component={Deliveryman}
                isPrivate
            />
        </>
    );
}

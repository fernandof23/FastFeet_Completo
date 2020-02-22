import React from 'react';
import RouteWrapper from './route';

import Delivery from '~/pages/Delivery';

export default function DeliveryRoutes() {
    return (
        <>
            <RouteWrapper
                path="/delivery"
                exact
                component={Delivery}
                isPrivate
            />
        </>
    );
}

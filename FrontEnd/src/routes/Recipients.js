import React from 'react';
import RouteWrapper from './route';

import Recipients from '~/pages/Recipients';

export default function RecipientsRoute() {
    return (
        <>
            <RouteWrapper
                path="/recipients"
                exact
                component={Recipients}
                isPrivate
            />
        </>
    );
}

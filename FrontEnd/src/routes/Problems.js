import React from 'react';
import RouteWrapper from './route';

import Problems from '~/pages/Problems';

export default function ProblemRoute() {
    return (
        <>
            <RouteWrapper
                path="/problems"
                exact
                component={Problems}
                isPrivate
            />
        </>
    );
}

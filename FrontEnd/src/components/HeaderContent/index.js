import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function HeaderContent({ children }) {
    return <Container>{children}</Container>;
}

HeaderContent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
        .isRequired,
};

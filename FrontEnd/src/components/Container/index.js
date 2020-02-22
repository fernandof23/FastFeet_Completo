import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Container({ children, maxWight }) {
    return <Wrapper maxWight={maxWight}>{children}</Wrapper>;
}

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
        .isRequired,
    maxWight: PropTypes.string,
};

Container.defaultProps = {
    maxWight: null,
};

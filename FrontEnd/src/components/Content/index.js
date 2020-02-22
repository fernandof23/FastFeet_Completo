import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Content({ children, inputColor }) {
    return <Wrapper inputColor={inputColor}>{children}</Wrapper>;
}

Content.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
        .isRequired,
    inputColor: PropTypes.string,
};

Content.defaultProps = {
    inputColor: null,
};

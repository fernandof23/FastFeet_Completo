import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const button = ({
    children,
    fontSize,
    borderRadius,
    color,
    background,
    width,
    height,
    margin,
    fontWeight,
    onClick,
    type,
}) => {
    return (
        <Button
            type={type || 'button'}
            fontSize={fontSize}
            color={color}
            background={background}
            borderRadius={borderRadius}
            width={width}
            height={height}
            margin={margin}
            fontWeight={fontWeight}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default button;

button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
        .isRequired,
    fontSize: PropTypes.string,
    borderRadius: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    fontWeight: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

button.defaultProps = {
    fontSize: null,
    borderRadius: null,
    color: null,
    background: null,
    width: null,
    height: null,
    margin: null,
    fontWeight: null,
    onClick: PropTypes.func,
    type: null,
};

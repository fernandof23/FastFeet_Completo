/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, error, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <>
            <input ref={inputRef} {...rest} defaultValue={defaultValue} />
            {error && <span>{error}</span>}
        </>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
};

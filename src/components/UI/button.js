import React from 'react';
import './style.scss'

export const UIButton = ({
    children,
    className,
    isDisabled,
    ...restProps
}) => {
    return (
        <button
            type="button"
            disabled={isDisabled}
            className={`ui-button ${className}`}
            {...restProps}
        >
            {children}
        </button>
    );
};



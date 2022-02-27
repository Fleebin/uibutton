import React from 'react';
import './style.scss'

export const UIButton = ({
    children,
    className,
    component: Component,
    ...restProps
}) => {
    return (
        <Component
            className={`ui-button ${className}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

UIButton.defaultProps = {
    component: 'a',
};

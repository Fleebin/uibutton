import React from 'react';
import './style.scss'
import { ReactComponent as Check } from '../../icons/check.svg'
import { ReactComponent as Arrow } from '../../icons/arrow.svg'
import { ReactComponent as Refresh } from '../../icons/refresh.svg'

export const UIButton = ({
    className,
    isDisabled,
    icon,
    onClick,
    children,
    ...restProps
}) => {
    return (
        <button
            type="button"
            disabled={isDisabled}
            onClick={onClick}
            className={`ui-button ${className}`}
            {...restProps}
        >
            {children}
            <span>
                {icon === 'arrow-right' ? <Arrow /> : null}
                {icon === 'check' ? <Check /> : null}
                {icon === 'refresh' ? <Refresh /> : null}
            </span>
        </button>
    );
};

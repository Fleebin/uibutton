import React from 'react';
import './style.scss'
import { ReactComponent as Check } from '../../icons/check.svg'
import { ReactComponent as Arrow } from '../../icons/arrow.svg'
import { ReactComponent as Refresh } from '../../icons/refresh.svg'

export const UIButton = ({
    className,
    isDisabled,
    icon,
    ...restProps
}) => {
    return (
        <button
            type="button"
            disabled={isDisabled}
            className={`ui-button ${className}`}
            {...restProps}
        >
            <span>
                {icon === 'arrow-right' ? <Arrow /> : ''}
                {icon === 'check' ? <Check /> : ''}
                {icon === 'refresh' ? <Refresh /> : ''}
            </span>
        </button>
    );
};

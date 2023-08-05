import React, { memo, FC, useMemo, useCallback, forwardRef } from 'react';
import { Button } from './Button.styles';
import Loader from '../Loader';

interface props {
    children: JSX.Element | string | undefined;
    secondary?: boolean;
    loading?: boolean;
    onClick?: Function;
    disabled?: boolean;
    width?: string;
}

const BrandComponent = ({ children, secondary, loading, disabled, width, onClick }: props, ref: any) => {
    const ChildrenComponent = useMemo(() => {
        if (loading) {
            return <Loader />;
        } else {
            return children;
        }
    }, [loading, children]);

    const className = useMemo(() => (loading ? 'loading' : ''), [loading]);

    const handleOnclick = useCallback(
        (event: any) => {
            if (!disabled && typeof onClick === 'function') {
                onClick(event);
            }
        },
        [disabled]
    );

    const handleOnKeyPress = (event: any) => {
        if (event.charCode === 13) {
            handleOnclick(event);
        }
    };

    return (
        <Button
            ref={ref}
            onClick={handleOnclick}
            onKeyPress={handleOnKeyPress}
            secondary={secondary}
            width={width}
            className={className}
            disabled={disabled}
        >
            {ChildrenComponent}
        </Button>
    );
};

export default memo(forwardRef(BrandComponent));

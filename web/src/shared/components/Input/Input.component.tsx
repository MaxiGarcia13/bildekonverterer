import React, { memo, forwardRef } from 'react';
import { Input } from './Input.styles';

interface propsInterfaces {
    id?: string;
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (ev: any) => void;
    readOnly?: boolean;
}

const InputComponent = ({ ...props }: propsInterfaces, ref: any) => {
    return <Input ref={ref} {...props} />;
};

export default memo(forwardRef(InputComponent));

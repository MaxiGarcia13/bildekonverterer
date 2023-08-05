import React, { memo, SFC } from 'react';
import { Label } from './Lable.styles';

interface props {
    htmlFor: string;
    children?: any;
}

const LabelComponent: SFC<props> = ({ children, htmlFor }) => {
    return <Label htmlFor={htmlFor}>{children}</Label>;
};

export default memo(LabelComponent);

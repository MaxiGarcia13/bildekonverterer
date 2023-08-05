import React, { memo, FC, useMemo } from 'react';
import { Strong, Wrapper, propsInterface } from './MadeByMe.styles';

const MadeByMeComponent: FC<propsInterface> = ({ absoulte, right, bottom }) => {
    const className = useMemo(() => (absoulte ? 'absolute' : undefined), [absoulte]);
    return (
        <Wrapper className={className} right={right} bottom={bottom}>
            <Strong>By Maximiliano Garcia 🤓</Strong>
        </Wrapper>
    );
};

export default memo(MadeByMeComponent);

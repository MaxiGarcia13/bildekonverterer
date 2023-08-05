import React, { memo, SFC } from 'react';
import { BrandWrapper, Icon, Title } from './Brand.styles';
import { brandSVG } from '../../../shared/icons';

const BrandComponent: SFC = () => (
    <BrandWrapper>
        <Icon src={brandSVG} />
        <Title>Bilde Konverter</Title>
    </BrandWrapper>
);

export default memo(BrandComponent);

import React, { memo, SFC } from 'react';
import { HeaderWrapper } from './Header.styles';
import BrandComponent from '../Brand';
import NavBarComponent from '../NavBar';
import SwitchThemeComponent from '../SwitchTheme';

interface props {}

const HeaderComponent: SFC<props> = () => {
    return (
        <HeaderWrapper>
            <BrandComponent />
            <NavBarComponent />
            <SwitchThemeComponent />
        </HeaderWrapper>
    );
};

export default memo(HeaderComponent);

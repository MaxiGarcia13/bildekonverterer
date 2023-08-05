import React, { memo, FC } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../../../shared/themes';
import { useSelector } from 'react-redux';
import { getThemeSelector } from '../../selectors/configurations';

interface props {
    children: JSX.Element | any;
}

const ThemeControlComponent: FC<props> = ({ children }) => {
    const themeSelector: 'light' | 'dark' = useSelector(getThemeSelector);

    return <ThemeProvider theme={themes[themeSelector]}>{children}</ThemeProvider>;
};

export default memo(ThemeControlComponent);

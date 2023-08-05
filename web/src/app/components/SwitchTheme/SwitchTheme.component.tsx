import React, { memo, FC, useState } from 'react';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeDispatch } from '../../actions/configurations';
import { getThemeSelector } from '../../selectors/configurations';
import { Icon, SwitchWrapper } from './SwitchTheme.styles';
import { sunSVG, moonSVG } from '../../../shared/icons';
import themes from '../../../shared/themes';

interface props {}

const SwitchThemeComponent: FC<props> = () => {
    const dispatch = useDispatch();
    const themeSelector: 'dark' | 'light' = useSelector(getThemeSelector);
    const [theme, setTheme] = useState(themeSelector === 'dark');

    const handleOnSetTheme = (value: boolean) => {
        setTheme(value);
        dispatch(setThemeDispatch(value ? 'dark' : 'light'));
    };

    return (
        <SwitchWrapper>
            <Switch
                checked={theme}
                onChange={handleOnSetTheme}
                uncheckedIcon={<Icon src={sunSVG} />}
                checkedIcon={<Icon src={moonSVG} checked />}
                offColor={themes[themeSelector].switch.offColor}
                onColor={themes[themeSelector].switch.onColor}
                offHandleColor={themes[themeSelector].switch.offHandleColor}
                onHandleColor={themes[themeSelector].switch.onHandleColor}
            />
        </SwitchWrapper>
    );
};

export default memo(SwitchThemeComponent);

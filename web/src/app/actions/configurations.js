import { THEME_V1 } from '../../shared/constants';

export const SET_THEME = 'SET_THEME';

/**
 * @param {"light" | "dark"} theme
 */
export const setThemeDispatch = (theme) => {
    localStorage.setItem(THEME_V1, theme);

    return {
        type: SET_THEME,
        payload: {
            theme,
        },
    };
};

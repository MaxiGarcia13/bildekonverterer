import baseThemes from './baseThemes';

export default {
    ...baseThemes,
    backgrounds: {
        ...baseThemes.backgrounds,
        primary: '#1e2a4a',
        secondary: '#1d2130',
    },
    svg: {
        ...baseThemes.svg,
        primary: '#fb4a72',
    },
    font: {
        ...baseThemes.font,
        colors: {
            ...baseThemes.font.colors,
            primary: '#f4f4f4',
            tertiary: '#bfbdbd',
        },
    },
    input: {
        ...baseThemes.input,
        background: '#1e2a4a',
    },
};

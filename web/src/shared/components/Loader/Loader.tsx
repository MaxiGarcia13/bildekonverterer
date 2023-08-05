import React, { memo, useMemo } from 'react';
import Loader from 'react-loader-spinner';
import themes from '../../themes';
import { useSelector } from 'react-redux';
import { getThemeSelector } from '../../../app/selectors/configurations';

interface propsInterface {
    type?:
        | 'ThreeDots'
        | 'TailSpin'
        | 'Rings'
        | 'Puff'
        | 'Oval'
        | 'Hearts'
        | 'Grid'
        | 'Circles'
        | 'Bars'
        | 'Audio'
        | 'BallTriangle'
        | 'Watch'
        | 'RevolvingDot'
        | 'Triangle'
        | 'Plane'
        | 'MutatingDots'
        | 'None'
        | 'NotSpecified'
        | undefined;
    height?: number;
    width?: number;
    accent?: boolean;
}

const LoaderComponent = ({ type, height = 24, width = 24, accent }: propsInterface) => {
    const themeSelector: 'dark' | 'light' = useSelector(getThemeSelector);
    const color = useMemo(() => {
        return themes[themeSelector].font.colors[accent ? 'accent' : 'primary'];
    }, [themeSelector, accent]);

    return <Loader type={type || 'TailSpin'} color={color} height={height} width={width} />;
};

export default memo(LoaderComponent);

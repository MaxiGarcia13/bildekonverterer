import React, { memo, SFC, useCallback, useMemo } from 'react';
import Loader from '../../../shared/components/Loader';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { processingSelector } from '../../selectors/imageProcessing';
import { NavWrapper, Ul, Li, Icon } from './NavBar.styles';
import { homeSVG, imageSVG, smileSVG } from '../../../shared/icons';
import { homePathName, converterPathName, aboutMePathName } from '../../../shared/routes';

const NavBarComponent: SFC = () => {
    const { t } = useTranslation('app');

    const location = useLocation();
    const imageProcessingSelector = useSelector(processingSelector);

    const isSelected = useCallback((path) => (path === location.pathname ? 'selected' : ''), [location]);

    const ConverterIconComponent = useMemo(() => {
        if (imageProcessingSelector && isSelected(converterPathName) !== 'selected') {
            return <Loader />;
        } else {
            return <Icon src={imageSVG} />;
        }
    }, [imageProcessingSelector, isSelected]);

    return (
        <NavWrapper>
            <Ul>
                <Li className={isSelected(homePathName)}>
                    <Link to={homePathName}>
                        <Icon src={homeSVG} />
                        Home
                    </Link>
                </Li>
                <Li className={isSelected(converterPathName)}>
                    <Link to={converterPathName}>
                        {ConverterIconComponent}
                        {t('app:converter')}
                    </Link>
                </Li>
                <Li className={isSelected(aboutMePathName)}>
                    <Link to={aboutMePathName}>
                        <Icon src={smileSVG} />
                        {t('app:about_me')}
                    </Link>
                </Li>
            </Ul>
        </NavWrapper>
    );
};

export default memo(NavBarComponent);

import React, { memo } from 'react';
import { Wrapper } from './AboutMe.styles';
import { useTranslation } from 'react-i18next';

const AboutMeComponent = () => {
    const { t } = useTranslation('app');

    return (
        <Wrapper>
            <img src='./assets/images/maximilianoGarcia.jpeg' alt='Hi, This is me, i am fron-end developer' />
            <h1>Maximiliano Garcia Mortigliengo</h1>
            <a href='https://www.linkedin.com/in/maximilianogarcia13' target='_blank' rel='noopener noreferrer'>
                {t('app:see_my_linkedin')}
            </a>
        </Wrapper>
    );
};

export default memo(AboutMeComponent);

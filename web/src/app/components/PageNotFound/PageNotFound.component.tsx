import React, { memo, FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon, PageNotFoundWrapper, TextBody } from './PageNotFound.styles';
import { pageNotFoundBackground } from '../../../shared/icons';
import { homePathName } from '../../../shared/routes';

const PageNotFound: FC = () => {
    const { t } = useTranslation('app');

    return (
        <PageNotFoundWrapper>
            <Icon src={pageNotFoundBackground} />
            <TextBody>
                {t('app:page_not_found')}, <Link to={homePathName}>{t('app:back_to_homepage')}</Link>.
            </TextBody>
        </PageNotFoundWrapper>
    );
};

export default memo(PageNotFound);

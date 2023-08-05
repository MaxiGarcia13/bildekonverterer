import React, { memo, SFC } from 'react';
import Button from '../../../shared/components/Button';
import PictureCard from '../PictureCard';
import MadeByMe from '../MadeByMe';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomeWrapper, HeaderWrapper, ButtonWrapper, Icon, MainWrapper, H1, Gallery, ScrollX } from './Home.styles';
import { converterPathName } from '../../../shared/routes';
import {
    flyBackground,
    adjustmentsBackground,
    imageUploadBackground,
    orderConfirmedBackground,
} from '../../../shared/icons';

const HomeComponent: SFC = () => {
    const { t } = useTranslation('app');
    const history = useHistory();

    const getStarted = () => history.push(converterPathName);

    return (
        <HomeWrapper>
            <HeaderWrapper>
                <H1>{t('app:convert_some_image')}</H1>
                <Icon src={flyBackground} />
            </HeaderWrapper>

            <MainWrapper>
                <ButtonWrapper>
                    <Button onClick={getStarted} width='250px' secondary>
                        {t('app:get_started')}
                    </Button>
                </ButtonWrapper>

                <Gallery>
                    <ScrollX>
                        <PictureCard
                            src={imageUploadBackground}
                            title={t('app:choose_a_image')}
                            desctiprion={t('app:choose_a_image_detail')}
                        />
                        <PictureCard
                            src={adjustmentsBackground}
                            title={t('app:configure_your_image')}
                            desctiprion={t('app:configure_your_image_detail')}
                        />
                        <PictureCard
                            src={orderConfirmedBackground}
                            title={t('app:export_to_format')}
                            desctiprion={t('app:export_detail')}
                        />
                    </ScrollX>
                </Gallery>

                <MadeByMe />
            </MainWrapper>
        </HomeWrapper>
    );
};

export default memo(HomeComponent);

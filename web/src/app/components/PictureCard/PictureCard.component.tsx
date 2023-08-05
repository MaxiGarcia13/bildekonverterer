import React, { memo, SFC } from 'react';
import { Wrapper, Icon, BodyWapper, H2, P } from './PictureCard.styles';

interface props {
    src: string;
    title: string;
    desctiprion: string;
}

const PictureCardComponent: SFC<props> = ({ src, title, desctiprion }) => {
    return (
        <Wrapper>
            <Icon src={src} />
            <BodyWapper>
                <H2>{title}</H2>
                <P>{desctiprion}</P>
            </BodyWapper>
        </Wrapper>
    );
};

export default memo(PictureCardComponent);

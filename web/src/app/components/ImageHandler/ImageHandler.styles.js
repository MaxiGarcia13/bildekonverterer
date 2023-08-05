import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const DivCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled(DivCenter)`
    height: 100%;
    cursor: pointer;
    background: inherit;
    border-radius: ${({ theme }) => theme.borderRadius};
    position: relative;
    overflow: hidden;
    border-width: 2px;
    border-style: dashed;
    border-color: ${({ theme }) => theme.backgrounds.third};

    & input[type='file'] {
        display: none;
    }

    &:hover {
        border-color: ${({ theme }) => theme.backgrounds.accent};

        & .hoverWrapper {
            display: flex;
        }
    }

    &.selected {
        border-style: solid;
        border-color: ${({ theme }) => theme.backgrounds.accent};
    }
`;

export const ImageInformationForUpload = styled(DivCenter)`
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const Img = styled.img`
    height: 80%;
    width: 80%;
    object-fit: contain;
`;

export const Icon = styled(ReactSVG)`
    min-width: 200px;
    width: 100%;
    max-width: 40%;

    & svg {
        width: 100%;
        height: auto;
    }
`;

export const H2 = styled.h2`
    font-size: ${({ theme }) => theme.font.size.xl};
    color: ${({ theme }) => theme.font.colors.primary};
    margin: ${({ theme }) => theme.spacings.m};
`;

export const HoverWrapper = styled(DivCenter)`
    display: none;
    background: rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    flex-direction: column;

    & * {
        color: ${({ theme }) => theme.font.colors.accent};
    }
`;

export const P = styled.p`
    font-size: ${({ theme }) => theme.font.size.m};
    margin: 0 ${({ theme }) => theme.spacings.m};
    color: ${({ theme }) => theme.font.colors.primary};
`;

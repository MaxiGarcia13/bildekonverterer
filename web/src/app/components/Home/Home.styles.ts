import styled from 'styled-components';

interface baseProps {}

interface iconProps extends baseProps {
    src: string;
}

export const HomeWrapper = styled.main<baseProps>`
    height: auto;
    background: ${({ theme }: any) => theme.backgrounds.primary};
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 500px 1fr;
`;

export const HeaderWrapper = styled.div<baseProps>`
    background: ${({ theme }: any) => theme.backgrounds.accent};
    position: relative;
`;

export const MainWrapper = styled.div<baseProps>`
    min-height: 200px;
    background: transparent;
    position: relative;
`;

export const H1 = styled.h1<baseProps>`
    font-size: ${({ theme }: any) => theme.font.size.xxxl};
    color: ${({ theme }: any) => theme.font.colors.secondary};
    text-align: center;
    margin: 0 ${({ theme }: any) => theme.spacings.m};
    margin-top: ${({ theme }: any) => theme.spacings.xxl};
`;

export const ButtonWrapper = styled.div<baseProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
`;

export const Icon = styled.div<iconProps>`
    --fillColorSvg: ${({ theme }: any) => theme.svg.primary};

    height: auto;
    width: 100vw;
    height: 100%;
    object-fit: contain;
    position: absolute;
    bottom: -84px;
    overflow-y: visible;
    overflow-x: hidden;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: 1292px;
    background-position: bottom center;

    @media (max-width: 640px) {
        background-position-x: -100px;
    }

    @media (min-width: 641px) and (max-width: 768px) {
        background-position-x: -100px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        background-position-x: -200px;
    }
`;

export const Gallery = styled.div<baseProps>`
    display: flex;
    width: 100vw;
    overflow-x: hidden;
`;

export const ScrollX = styled.div<baseProps>`
    overflow-y: hidden;
    overflow-x: auto;
    width: 100%;
    display: flex;
    margin: 0 ${({ theme }) => theme.spacings.l};

    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        justify-content: unset;
        align-items: unset;
    }

    @media (min-width: 641px) and (max-width: 768px) {
        justify-content: unset;
        align-items: unset;
    }
`;

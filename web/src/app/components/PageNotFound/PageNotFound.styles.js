import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const PageNotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.6;
    background: ${({ theme }) => theme.backgrounds.primary};
    height: calc(100vh - 70px);

    @media (max-width: 1024px) {
        height: calc(100vh - 140px);
    }
`;

export const Icon = styled(ReactSVG)`
    --fillColorSvg: ${({ theme }) => theme.svg.primary};
    --strokeColorSvg: ${({ theme }) => theme.svg.secondary};

    & svg {
        height: 40vh;
        width: 50vw;
    }
`;

export const TextBody = styled.p`
    font-size: ${({ theme }) => theme.font.size.m};
    color: ${({ theme }) => theme.font.colors.third};

    & a:visited {
        color: ${({ theme }) => theme.link.visited};
    }
`;

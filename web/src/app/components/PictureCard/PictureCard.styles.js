import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 140px;
    grid-column-gap: ${({ theme }) => theme.spacings.m};
    grid-row-gap: ${({ theme }) => theme.spacings.m};
    height: auto;
    width: 380px;
    min-width: 380px;
    background: ${({ theme }) => theme.backgrounds.secondary};
    margin-right: ${({ theme }) => theme.spacings.l};
    border-radius: ${({ theme }) => theme.borderRadius};

    @media (max-width: 640px) {
        width: 250px;
        min-width: 250px;
    }

    @media (min-width: 641px) and (max-width: 768px) {
        width: 250px;
        min-width: 250px;
    }
`;

export const BodyWapper = styled.div`
    color: ${({ theme }) => theme.font.colors.primary};
    padding: 0 ${({ theme }) => theme.spacings.m};
`;

export const H2 = styled.h2`
    font-size: ${({ theme }) => theme.font.size.xl};
    margin-bottom: ${({ theme }) => theme.spacings.m};
    text-align: center;
`;

export const P = styled.p`
    font-size: ${({ theme }) => theme.font.size.m};
    margin-top: ${({ theme }) => theme.spacings.m};
    margin-bottom: ${({ theme }) => theme.spacings.m};
    text-align: center;
`;

export const Icon = styled(ReactSVG)`
    padding: ${({ theme }) => theme.spacings.m};

    & svg {
        width: 100%;
        height: auto;
    }
`;

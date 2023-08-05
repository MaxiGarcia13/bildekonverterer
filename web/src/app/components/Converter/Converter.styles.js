import styled from 'styled-components';

export const MainWrapper = styled.main`
    height: calc(100vh - 70px);
    background: ${({ theme }) => theme.backgrounds.primary};

    display: grid;
    grid-template-columns: 0.7fr 0.3fr;
    grid-template-rows: 1fr;

    @media (max-width: 1024px) {
        height: calc(100vh - 140px);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 400px 500px;
    }
`;

export const ImageWrapper = styled.div`
    padding: ${({ theme }) => theme.spacings.m};
    background: inherit;
`;

export const ToolBarWrapper = styled.div`
    background: ${({ theme }) => theme.backgrounds.secondary};
    padding: ${({ theme }) => theme.spacings.m};
    position: relative;
`;

export const H2 = styled.h2`
    font-size: ${({ theme }) => theme.font.size.xl};
    margin-bottom: ${({ theme }) => theme.spacings.m};
    color: ${({ theme }) => theme.font.colors.primary};
`;

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacings.s} 0;
`;

export const SectionCenter = styled(Section)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

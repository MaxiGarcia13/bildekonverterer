import styled from 'styled-components';

export const Wrapper = styled.main`
    min-height: calc(100vh - 70px);
    background: ${({ theme }) => theme.backgrounds.primary};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1024px) {
        min-height: calc(100vh - 140px);
    }

    & img {
        width: 300px;
        height: 300px;
        border-radius: 100%;
        box-shadow: 0px 0 1px 0px ${({ theme }) => `${theme.font.colors.primary}8C`};
    }

    & h1 {
        font-size: ${({ theme }) => theme.font.size.xxxl};
        color: ${({ theme }) => theme.font.colors.primary};
        margin: ${({ theme }) => theme.spacings.m};
    }

    & a {
        font-size: ${({ theme }) => theme.font.size.m};
        color: ${({ theme }) => theme.link.visited};
    }
`;

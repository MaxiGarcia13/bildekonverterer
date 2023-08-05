import styled from 'styled-components';

export const LoaderWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    background: ${({ theme }) => theme.backgrounds.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        height: calc(100vh - 140px);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 400px 500px;
    }
`;

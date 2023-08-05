import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    background: ${({ theme }) => theme.backgrounds.secondary};
    min-height: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: ${({ theme }) => `0 ${theme.spacings.m}`};
    padding-bottom: 0;
    padding-top: 0;
    position: relative;
    box-shadow: 0px 0 1px 0px ${({ theme }) => `${theme.font.colors.primary}8C`};
    z-index: 1;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: 40px 1fr;
        padding-top: ${({ theme }) => `${theme.spacings.m}`};
    }
`;

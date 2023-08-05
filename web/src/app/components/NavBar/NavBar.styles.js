import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    box-sizing: border-box;
    height: 100%;
    flex: 1;
    justify-content: center;
`;

export const Li = styled.ul`
    height: 100%;
    max-width: 120px;
    width: calc(100% / 3);
    padding: ${({ theme }) => `0 ${theme.spacings.s}`};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.font.colors.primary};
    font-size: ${({ theme }) => theme.font.size.l};
    position: relative;
    box-sizing: border-box;

    &,
    & a {
        display: flex;
    }

    & a {
        flex: 1;
        font-style: unset;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        line-height: 1.6;
        flex-direction: column;

        &,
        &:visited {
            color: inherit;
        }
    }

    &:active,
    &:hover {
        color: ${({ theme }) => theme.link.visited};

        & svg {
            fill: ${({ theme }) => theme.link.visited};
        }
    }

    &.selected {
        color: ${({ theme }) => theme.font.colors.accent};

        & svg {
            fill: ${({ theme }) => theme.font.colors.accent};
        }
    }

    @media (max-width: 1200px) {
        margin-top: ${({ theme }) => theme.spacings.xs};
    }
`;

export const Icon = styled(ReactSVG)`
    height: 24px;
    width: 24px;

    & svg {
        fill: ${({ theme }) => theme.font.colors.primary};
    }
`;

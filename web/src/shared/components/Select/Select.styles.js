import styled from 'styled-components';

export const Select = styled.select`
    height: 32px;
    width: 100%;
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.font.size.l};
    padding: 0 ${({ theme }) => theme.spacings.s};
    outline: none;
    margin-top: ${({ theme }) => theme.spacings.s};
    margin-bottom: ${({ theme }) => theme.spacings.m};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.input.background};
    border: unset;
    color: ${({ theme }) => theme.font.colors.primary};

    &:hover,
    &:active {
        box-shadow: 0 0 0 1px ${({ theme }) => `${theme.input.hover}`};
    }

    &:focus {
        box-shadow: 0 0 0 1px ${({ theme }) => `${theme.input.focus}`};
    }
`;

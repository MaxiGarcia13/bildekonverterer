import styled from 'styled-components';

export const Label = styled.label`
    font-size: ${({ theme }) => theme.font.size.m};
    color: ${({ theme }) => theme.font.colors.primary};
`;

import styled from 'styled-components';

export interface propsInterface {
    absoulte?: boolean;
    right?: string;
    bottom?: string;
}

export const Wrapper = styled.div<propsInterface>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: ${({ theme }) => `100px ${theme.spacings.m} ${theme.spacings.m} ${theme.spacings.m}`};

    &.absolute {
        position: absolute;
        right: ${({ theme, right }) => right || theme.spacings.m};
        bottom: ${({ theme, bottom }) => bottom || theme.spacings.m};
    }
`;

export const Strong = styled.strong`
    font-size: ${({ theme }) => theme.font.size.m};
    color: ${({ theme }) => theme.font.colors.primary};
`;

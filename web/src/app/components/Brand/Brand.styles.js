import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const BrandWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Icon = styled(ReactSVG)`
    height: 40px;
    width: 40px;
    margin: 0 ${({ theme }) => theme.spacings.m} 0 0;
`;

export const Title = styled.span`
    font-size: ${({ theme }) => theme.font.size.xxl};
    color: ${({ theme }) => theme.font.colors.primary};
`;

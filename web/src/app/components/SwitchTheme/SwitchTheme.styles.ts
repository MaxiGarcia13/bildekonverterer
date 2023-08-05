import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const SwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 1200px) {
        position: absolute;
        top: ${({ theme }) => theme.spacings.l};
        right: ${({ theme }) => theme.spacings.m};
    }
`;

interface IconProps {
    checked?: boolean;
}

export const Icon = styled(ReactSVG)<IconProps>`
    & svg {
        margin: 4px 0 0 4px;
        height: 20px;
        width: 20px;
        stroke: ${({ theme, checked }) => (checked ? theme.switch.onHandleColor : theme.switch.offHandleColor)};
    }
`;

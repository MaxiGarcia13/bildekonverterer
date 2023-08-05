import styled from 'styled-components';

interface props {
    secondary?: boolean | undefined;
    width?: string;
}

const getButtonColor = (
    isPrimary: boolean | undefined,
    color: 'loader' | 'hover' | 'color' | 'font' | 'disabled',
    theme: any
) => theme.button[isPrimary ? 'primary' : 'secondary'][color];

export const Button = styled.button<props>`
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 2px solid ${({ theme, secondary }) => getButtonColor(!secondary, 'color', theme)};
    background: ${({ theme, secondary }) => getButtonColor(!secondary, 'color', theme)};
    color: ${({ theme, secondary }) => getButtonColor(!secondary, 'font', theme)};
    height: 50px;
    width: ${({ width }) => width || ''};
    min-width: 180px;
    outline-color: ${({ theme }) => theme.backgrounds.accent};
    font-size: ${({ theme }) => theme.font.size.m};
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease 0s;

    &:hover,
    &:active {
        background: ${({ theme, secondary }) => getButtonColor(!secondary, 'hover', theme)};
        font-weight: 600;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    }

    &.loading {
        background: ${({ theme, secondary }) => getButtonColor(!secondary, 'loader', theme)};
        border: 2px solid ${({ theme, secondary }) => getButtonColor(!secondary, 'loader', theme)};

        & svg {
            fill: ${({ theme, secondary }) => getButtonColor(!secondary, 'font', theme)} !important;
        }
    }

    &.loading,
    &:disabled {
        cursor: no-drop;
        font-weight: normal;
        box-shadow: none;
    }

    &:disabled {
        background: ${({ theme, secondary }) => getButtonColor(!secondary, 'disabled', theme)};
        border: 2px solid ${({ theme, secondary }) => getButtonColor(!secondary, 'disabled', theme)};
    }
`;

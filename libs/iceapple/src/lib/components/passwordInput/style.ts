import { Input } from 'antd';
import styled from 'styled-components';

export const PasswordInputContainer = styled.div<{ type: string }>`
    width: ${props => props.type === "block" ? '100%' : 'auto'};
`;

export const PasswordInputLabel = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px !important;
    line-height: 18px;
    color: #4D4D4D;
`;

export const PasswordInputWrapper = styled(Input.Password) <{ height: string }>`
    height: ${props => props.height ? props.height : '48px'}
`;

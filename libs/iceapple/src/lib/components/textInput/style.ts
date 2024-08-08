import { Input } from 'antd';
import styled from 'styled-components';

export const TextInputContainer = styled.div<{ type: string }>`
    width: ${props => props.type === "block" ? '100%' : 'auto'};
`;

export const TextInputLabel = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px !important;
    line-height: 18px;
    color: #4D4D4D;
`;

export const TextInputWrapper = styled(Input)<{height: number}>`
    height: ${props => props.height}px
`;

export const TextInputRequired = styled.span`
  color: #ff4d4f;
  margin-right: 2px;
`;

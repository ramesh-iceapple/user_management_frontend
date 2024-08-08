import { Input, Select } from 'antd';
import styled, { css } from 'styled-components';

export const SelectInputContainer = styled.div<{ type: string }>`
  width: ${(props) => (props.type === 'block' ? '100%' : 'auto')};
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: flex-start;
`;

export const SelectInputLabel = styled.label<{ currentapplication: string | undefined }>`
 ${props =>
    props.currentapplication === "mitra-gaming-platform" ? css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600 !important;
    font-size: 12px !important;
    line-height: 10px;
    color: #4d4d4d;
    text-align: left !important;
    margin-bottom: 6px;
    margin-left: 4px;
    letter-spacing: 0.5px;
    ` :
      css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px !important;
    line-height: 18px;
    color: #4d4d4d;
    ` }
`;

export const SelectInputWrapper = styled(Select) <{ currentapplication: string | undefined }>`
${props =>
    props.currentapplication === "mitra-gaming-platform" ? css`min-height: 33px !important;
    width: inherit;
    max-width: 75%;
    text-align: left;
    .ant-select-selector {
    min-height: 33px !important;`
      :
    css`min-height: 48px !important;
    width: inherit;
    text-align: left;
   .ant-select-selector {
    min-height: 48px !important;`
  }
`;

export const SelectInputRequired = styled.span`
  color: #ff4d4f;
  margin-right: 2px;
`;

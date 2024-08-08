import { Input } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

export const TextInputRequired = styled.span`
  color: #ff4d4f;
  margin-right: 2px;
`;

export const TextInputLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px !important;
  line-height: 18px;
  color: #4d4d4d;
`;

export const TextInputWrapper = styled(TextArea)`
  // color: #ffffff;
`;

export const RightTextInputLabel = styled(TextInputLabel)`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-right: 20px;
`;

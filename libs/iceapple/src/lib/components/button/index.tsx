import { Button } from 'antd';
import styled from 'styled-components';
import { theme } from '../../theme';

export const DefaultButton = styled(Button)`
  box-sizing: border-box;
  min-width: 113px;
  min-height: 48px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  transition: 0.5s;
`;

export const PrimaryButton = styled(DefaultButton)`
  border: 1px solid ${theme.primary.main};
  background-color: ${theme.primary.main};
  color: ${theme.neutral.L95};

  .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    background-color: ${theme.primary.mainfocus} !important;
    border: 1px solid ${theme.primary.mainfocus} !important;
    color: ${theme.neutral.L95} !important;
  }

  :hover {
    background-color: ${theme.primary.mainfocus} !important;
    border: 1px solid ${theme.primary.mainfocus} !important;
    color: ${theme.neutral.L95} !important;
  }

  :focus {
    background-color: ${theme.primary.mainfocus} !important;
    border: 1px solid ${theme.primary.mainfocus} !important;
    color: ${theme.neutral.L95} !important;
  }

  :disabled,
  :disabled:hover {
    opacity: 0.4 !important;
    border: 1px solid ${theme.primary.main} !important;
    background-color: ${theme.primary.main} !important;
    color: ${theme.neutral.L95} !important;
    text-shadow: none;
    box-shadow: none;
  }
`;

export const SecondaryButton = styled(DefaultButton)`
  border: 1px solid ${theme.primary.S15};
  background-color: ${theme.primary.S15};
  color: ${theme.neutral.L95};

  :hover {
    background-color: ${theme.primary.S15Focus} !important;
    border: 1px solid ${theme.primary.S15Focus} !important;
    color: ${theme.neutral.L95} !important;
  }

  :focus {
    background-color: ${theme.primary.S15Focus} !important;
    border: 1px solid ${theme.primary.S15Focus} !important;
    color: ${theme.neutral.L95};
  }

  :disabled,
  :disabled:hover {
    opacity: 0.4 !important;
    border: 1px solid ${theme.primary.S15} !important;
    background-color: ${theme.primary.S15} !important;
    color: ${theme.neutral.L95} !important;
    text-shadow: none;
    box-shadow: none;
  }
`;

export const PrimaryLinkButton = styled(Button)`
  padding-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #1eb858 !important;
  :hover {
    color: #1eb858 !important;
  }
`;

export const SecondaryLinkButton = styled(Button)`
  padding-right: 0px;
  padding-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #2d89da;
  :hover {
    color: #2278c3 !important;
  }
`;

export const PrimaryOutlinedButton = styled(DefaultButton)`
  padding-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #1eb858 !important;
  :hover {
    color: #1eb858 !important;
    border: 1px solid ${theme.primary.main} !important;
  }
  :focus {
    color: #1eb858 !important;
    border: 1px solid ${theme.primary.main} !important;
  }
  border: 1px solid ${theme.primary.main};
  background-color: ${theme.neutral.L95};
`;

export const SecondaryOutlinedButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #3da1fa !important;
  :disabled {
    color: rgba(0, 0, 0, 0.25) !important;
  }
  :hover {
    color: #3da1fa !important;
    border: 1px solid #3da1fa !important;
    background-color: transparent !important;
  }
  :focus {
    color: #3da1fa !important;
    border: 1px solid #3da1fa !important;
    background-color: transparent !important;
  }
  border: 1px solid #3da1fa;
  background-color: transparent;
  svg {
    margin-right: 5px;
  }
`;

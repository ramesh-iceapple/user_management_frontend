import { Steps } from 'antd';
import styled from 'styled-components';
import { devices } from '../../../utils';

export const StepperCard = styled.div`
  padding-left: 55px;
  padding-top: 50px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  background: #1eb858;
  @media ${devices.laptop} {
    padding-top: 66px;
    padding-bottom: 66px;
   }
   @media ${devices.laptopL} {
    padding-top: 66px;
    padding-bottom: 66px;
   }
   @media ${devices.desktop} {
    padding-top: 66px;
    padding-bottom: 66px;
   }
`;

export const StepsWrapper = styled(Steps)`
  .ant-steps-item-title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px !important;
    letter-spacing: 0.25px;
    color: #FFFFFF !important;
  }

  .ant-steps-item-description {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.25px;
    color: #FFFFFF !important;
  }

  .ant-steps-item {
    margin-bottom: 35px;
  }

  .ant-steps-item-tail::after {
    width: 0px !important;
  }

  .ant-steps-item-finish .ant-steps-icon-dot {
    display: inline-block;
    transform: rotate(45deg);
    height: 12px !important;
    width: 8px !important;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    background: transparent !important;
    left: -4px !important;
    border-radius: 0px !important;
    top: -7px !important;
  }

  .ant-steps-item-process .ant-steps-item-icon {
    border: 8px solid #FFFFFF;
    padding: 5px;
    margin-top: 0px;
  }

  .ant-steps-item-finish .ant-steps-item-icon,
  .ant-steps-item-wait .ant-steps-item-icon {
    width: 25px !important;
    height: 25px !important;
    border: 3px solid white !important;
  }

  .ant-steps-item-process .ant-steps-item-title {
    font-weight: 600;
    font-size: 17px;
  }

  .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {
    background-color: transparent;
  }

  .ant-steps-item-tail {
    top: 29.5px !important;
    margin-left: 11px !important;
    padding: 0px !important;
    background-color: #FFFFFF;
  }

  .ant-steps-item-process .ant-steps-icon-dot {
    display: none;
  }

  .ant-steps-icon-dot {
    background: white !important;
    left: -4px !important;
    width: 7px !important;
    height: 7px !important;
    top: -3px;
    left: -3.5px !important;
  }

  .ant-steps-item-icon {
    margin-top: 0px !important;
    padding: 10px;
  }
}
`;
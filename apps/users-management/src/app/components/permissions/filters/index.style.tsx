import styled from 'styled-components';
import { devices } from '../../../utils';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  @media ${devices.laptop} {
    justify-content: end;
  }
  @media ${devices.laptopL} {
    justify-content: end;
  }
  @media ${devices.desktop} {
    justify-content: end;
  }
  @media ${devices.tablet} {
    justify-content: end;
  }
`;

export const FilterListContainer = styled.ul`
  margin-bottom: 0;
  padding: 0;
  display: flex;
  list-style: none;
  border-right: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0px;
   @media ${devices.laptop} {
    display: flex;
  }
  @media ${devices.laptopL} {
    display: flex;
  }
  @media ${devices.desktop} {
    display: flex;
  }
`;

export const StyledButton = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 7px 12px;
  cursor: pointer;
  border: 1px solid transparent;
  border-right: 1px solid ${(props) => props.theme.neutral.main};
  background-color: ${(props) => props.theme.neutral.L95}
    ${(props) =>
      props?.active && {
        border: `1px solid #3da1fa`,
        color: '#3da1fa',
        borderRadius: '2px',
      }};
`;

export const ResetButton = styled.div`
  svg {
    width: 20px;
    height: 20px;
  }
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 7px 12px;
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid ${(props) => props.theme.neutral.main};
`;

export const FilterByText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

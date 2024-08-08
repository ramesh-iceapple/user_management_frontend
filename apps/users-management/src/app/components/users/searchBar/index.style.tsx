import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 250px;
  background: ${(props) => props.theme.neutral.L95};
  border: 1px solid ${(props) => props.theme.neutral.main};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  & > span {
    position: sticky;
    display: flex;
    align-items: center;
    margin-right: 9.5px;
  }

  & .ant-divider {
    height: 28px;
    margin: 4px 25px 4px 0;
  }
`;

export const SearchBox = styled.input`
  width: 272px;
  height: 36px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px !important;
  line-height: 17px !important;
  border: none;
  ::placeholder {
    color: #B2B2B2;
    opacity: 0.5;
  }
  :focus {
    outline: none;
  }
`;

import { Dropdown } from "antd";
import React from "react";
import {
  FilterByText,
  FilterContainer,
  FilterListContainer,
  ResetButton,
  StyledButton,
} from "./index.style";

import { useAppSelector, useAppDispatch } from "../../../store";
import {
  getUsersInfoSelector,
  getUsersSelectedFiltersSelector,
} from "../../../redux-modules/selectors/user";
import {
  setSelectedFilters,
  resetTableFilters,
  setCurrentPage,
} from "../../../redux-modules/slices/user";
import { FunnelIcon, ArrowDown, ResetIcon } from "@users-platform/iceapple";
import { getRoles } from "../../../redux-modules/selectors/role";
import { FormattedMessage } from "react-intl";

const overlayStyle: React.CSSProperties = {
  maxHeight: "300px",
  overflowY: "auto",
};

const Filters = () => {
  const selectedFilters = useAppSelector(getUsersSelectedFiltersSelector);
  const dispatch = useAppDispatch();

  const roles = useAppSelector(getRoles);

  const handleDropdownSelecteKeys = (
    selectedKeys: string[],
    type: "statuses" | "roles"
  ) => {
    const tempSelectedFilters = {
      ...selectedFilters,
      [type]: [...selectedKeys],
    };
    dispatch(setSelectedFilters(tempSelectedFilters));
    dispatch(setCurrentPage(1));
  };

  const resetAllFilters = () => {
    dispatch(resetTableFilters());
  };

  const statusList = [
    {
      key: 0,
      label: <FormattedMessage id="um.users.filtersBy.statusFilter.option1"/>,
      id: "activeStatus",
      value: 1
    },
    {
      key: 1,
      label: <FormattedMessage id="um.users.filtersBy.statusFilter.option2"/>,
      id: "deleteStatus",
      value: 0
    }
  ]

  return (
    <FilterContainer>
      <FilterByText>
        <FunnelIcon />
        <FormattedMessage id = "um.filtersBy.text" />
      </FilterByText>
      <FilterListContainer>
        <li>
          <Dropdown
            menu={{
              items: roles.map((x) => ({ key: x.id || 0, label: x.name,id: x.id})),
              onSelect: ({ selectedKeys }) =>
                handleDropdownSelecteKeys(selectedKeys, "roles"),
              onDeselect: ({ selectedKeys }) =>
                handleDropdownSelecteKeys(selectedKeys, "roles"),
              selectable: true,
              multiple: true,
              selectedKeys: selectedFilters.roles,
            }}
            trigger={["click"]}
            placement="bottomRight"
            overlayStyle={overlayStyle}
          >
            <StyledButton
              active={selectedFilters.roles?.length > 0}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span id="rolesFilters"><FormattedMessage id="um.users.filtersBy.role"/></span>
              <ArrowDown />
            </StyledButton>
          </Dropdown>
        </li>
      </FilterListContainer>
      <ResetButton onClick={resetAllFilters}>
        <ResetIcon />
        <span id="resetFilters"><FormattedMessage id="um.users.resetFilters"/></span>
      </ResetButton>
    </FilterContainer>
  );
};

export default Filters;

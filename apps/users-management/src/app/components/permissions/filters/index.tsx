import { Dropdown } from "antd";
import React from "react";
import {
  FilterByText,
  FilterContainer,
  FilterListContainer,
  ResetButton,
  StyledButton,
} from "./index.style";

import { useAppSelector } from "../../../store";
import { getUserApps } from "../../../redux-modules/selectors/user";
import { FunnelIcon, ArrowDown, ResetIcon } from "@users-platform/iceapple";
import { getRoleAllPermissions } from "../../../redux-modules/selectors/role";
import { FormattedMessage } from "react-intl";

const overlayStyle: React.CSSProperties = {
  maxHeight: "300px",
  overflowY: "auto",
  textTransform: "capitalize",
};

interface IFilterProps {
  selectedFilters: {
    searchText: string;
    permissions: string[];
    apps: string[];
  };
  setSelectedFilters: any;
}

const Filters = (props: IFilterProps) => {
  const { selectedFilters, setSelectedFilters } = props;
  const permissions = useAppSelector(getRoleAllPermissions);

  const apps = useAppSelector(getUserApps);

  const handleDropdownSelecteKeys = (
    selectedKeys: string[],
    type: "permissions" | "apps"
  ) => {
    const tempSelectedFilters = {
      ...selectedFilters,
      [type]: [...selectedKeys],
    };
    setSelectedFilters(tempSelectedFilters);
  };

  const resetAllFilters = () => {
    setSelectedFilters({
      searchText: "",
      permissions: [],
      apps: [],
    });
  };

  return (
    <FilterContainer>
      <FilterByText>
        <FunnelIcon />
        <FormattedMessage id="um.filtersBy.text" />
      </FilterByText>
      <FilterListContainer>
        <li>
          <Dropdown
            menu={{
              items: apps.map((x) => ({
                key: x.id || 0,
                label: x.name,
                id: x.id,
              })),
              onSelect: ({ selectedKeys }) =>
                handleDropdownSelecteKeys(selectedKeys, "apps"),
              onDeselect: ({ selectedKeys }) =>
                handleDropdownSelecteKeys(selectedKeys, "apps"),
              selectable: true,
              multiple: true,
              selectedKeys: selectedFilters.apps,
            }}
            trigger={["click"]}
            placement="bottomRight"
            overlayStyle={overlayStyle}
          >
            <StyledButton
              active={selectedFilters.apps?.length > 0}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span id="appsFilters">
                <FormattedMessage id="um.permission.apps" />
              </span>
              <ArrowDown />
            </StyledButton>
          </Dropdown>
        </li>
        {permissions && (
          <li>
            <Dropdown
              menu={{
                items: Object.keys(permissions).map((x) => ({
                  key: x,
                  label: x,
                  id: x,
                })),
                onSelect: ({ selectedKeys }) =>
                  handleDropdownSelecteKeys(selectedKeys, "permissions"),
                onDeselect: ({ selectedKeys }) =>
                  handleDropdownSelecteKeys(selectedKeys, "permissions"),
                selectable: true,
                multiple: true,
                selectedKeys: selectedFilters.permissions,
              }}
              trigger={["click"]}
              placement="bottomRight"
              overlayStyle={overlayStyle}
            >
              <StyledButton
                active={selectedFilters.permissions?.length > 0}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span id="permissionsFilters">
                  <FormattedMessage id="um.permission.resource" />
                </span>
                <ArrowDown />
              </StyledButton>
            </Dropdown>
          </li>
        )}
      </FilterListContainer>
      <ResetButton onClick={resetAllFilters}>
        <ResetIcon />
        <span id="resetFilters">
          <FormattedMessage id="um.users.resetFilters" />
        </span>
      </ResetButton>
    </FilterContainer>
  );
};

export default Filters;

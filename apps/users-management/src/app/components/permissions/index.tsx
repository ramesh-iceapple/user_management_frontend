import {
  AllPermissions,
  PermisisonCard,
  PermissionActions,
  PermissionsModal,
  SearchFilterContainer,
} from "./index.style";
import { useCallback, useEffect, useState } from "react";
import {
  fetchRoleAllPermissions,
  fetchRolePermissions,
  saveRolePermissions,
} from "../../redux-modules/thunks/role";
import { useAppDispatch, useAppSelector } from "../../store";
import { FormattedMessage, useIntl } from "react-intl";
import { Switch } from "antd";
import {
  getRoleAllPermissions,
  getRolePermissions,
} from "../../redux-modules/selectors/role";
import PermissionsList from "./permissionsList";
import { IPermission, IRole } from "../../interfaces";
import {
  PrimaryButton,
  PrimaryOutlinedButton,
  toastError,
  toastSuccess,
} from "@users-platform/iceapple";
import { fetchUserApps } from "../../redux-modules/thunks/user";
import Filters from "./filters";
import SearchBar from "./searchBar";

interface IPermissionsProps {
  role: IRole;
  open: boolean;
  onClose: any;
}

export function Permissions(props: IPermissionsProps) {
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const [selectedPermissions, setSelectedPermissions] = useState<Array<number>>(
    []
  );

  const [selectedFilters, setSelectedFilters] = useState<{
    searchText: string;
    permissions: string[];
    apps: string[];
  }>({
    searchText: "",
    permissions: [],
    apps: [],
  });

  const [filteredPermissions, setFilteredPermissions] =
    useState<Record<string, IPermission[]>>();

  const permisions = useAppSelector(getRoleAllPermissions);

  const rolePermisions = useAppSelector(getRolePermissions);

  useEffect(() => {
    if (permisions) {
      setFilteredPermissions(permisions);
    }
  }, [permisions]);

  useEffect(() => {
    const permissonfiltered: Record<string, IPermission[]> = {};
    if (selectedFilters.apps.length > 0 && permisions) {
      Object.keys(permisions).forEach((permision) => {
        permisions[permision].forEach((x) => {
          if (selectedFilters.apps.includes(x.appId.toString())) {
            permissonfiltered[permision] = permisions[permision];
            return;
          }
        });
      });
      setFilteredPermissions(permissonfiltered);
    }
    if (selectedFilters.permissions.length > 0 && permisions) {
      Object.keys(permisions).forEach((permision) => {
        if (selectedFilters.permissions.includes(permision)) {
          permissonfiltered[permision] = permisions[permision];
        }
      });
      setFilteredPermissions(permissonfiltered);
    } else if (
      !permissonfiltered ||
      Object.keys(permissonfiltered).length === 0
    ) {
      setFilteredPermissions(permisions);
    }
  }, [selectedFilters, permisions]);

  useEffect(() => {
    if (rolePermisions && rolePermisions.length > 0) {
      setSelectedPermissions(rolePermisions.map((x) => x.permissionId));
    } else {
      setSelectedPermissions([]);
    }
  }, [rolePermisions]);

  useEffect(() => {
    window.parent.postMessage(
      {
        type: "modal",
        message: props.open,
      },
      "*"
    );
    if (props.open) {
      setSelectedFilters({
        searchText: "",
        permissions: [],
        apps: [],
      });
      dispatch(fetchRoleAllPermissions());
      dispatch(fetchRolePermissions(props.role.id || 0));
      dispatch(fetchUserApps());
    }
  }, [props.open]);

  const handleSelect = (selected: boolean, permissionIds: number[]) => {
    if (!selected) {
      setSelectedPermissions((previous) =>
        previous.filter((x) => !permissionIds.includes(x))
      );
      return;
    }
    setSelectedPermissions([...selectedPermissions, ...permissionIds]);
  };

  const handleAllSelect = (selected: boolean, permissions: IPermission[]) => {
    const permissionIds = permissions.map((x) => x.permissionId);
    if (!selected) {
      setSelectedPermissions((previous) =>
        previous.filter((x) => !permissionIds.includes(x))
      );
      return;
    }
    const temp = [...selectedPermissions];
    permissionIds.forEach((x) => {
      if (!temp.includes(x)) temp.push(x);
    });
    setSelectedPermissions(temp);
  };

  const savePermissions = async () => {
    const result = await dispatch(
      saveRolePermissions({
        roleId: props.role.id || 0,
        permissionIds: selectedPermissions,
      })
    );
    if (saveRolePermissions.fulfilled.match(result)) {
      toastSuccess({
        content: intl.formatMessage(
          { id: "um.permissions.update.successMessage" },
          { name: props.role.name }
        ),
      });
      props.onClose();
      return;
    }
    if (saveRolePermissions.rejected.match(result)) {
      toastError({
        content: intl.formatMessage({ id: result.payload?.message }),
      });
    }
  };

  const isAllChecked = useCallback(
    (permissions: IPermission[]) => {
      let allChecked = true;
      permissions.forEach((permision) => {
        if (!selectedPermissions.find((id) => id === permision.permissionId)) {
          allChecked = false;
          return;
        }
      });
      return allChecked;
    },
    [selectedPermissions]
  );

  const hasPermissionChanges = useCallback(() => {
    const initialPermissionIds = rolePermisions.map(permission => permission.permissionId);
    if (selectedPermissions.length !== initialPermissionIds.length){
      return true;
    }
    const sortedSelected = [...selectedPermissions].sort();
    const sortedInitial = [...initialPermissionIds].sort();
    return !sortedSelected.every(
      (value, index) => value === sortedInitial[index]
    );
  }, [selectedPermissions, rolePermisions]);

  return (
    <PermissionsModal
      open={props.open}
      onCancel={props.onClose}
      footer={
        <PermissionActions align={"middle"} gutter={[16, 16]} justify={"end"}>
          <PrimaryOutlinedButton id="closePermission" onClick={props.onClose}>
            <FormattedMessage id="closeButton.text"/>
          </PrimaryOutlinedButton>
          <PrimaryButton id="savePermission" onClick={savePermissions} disabled={!hasPermissionChanges()}>
            <FormattedMessage id="saveButton.text"/>
          </PrimaryButton>
        </PermissionActions>
      }
      title={<FormattedMessage id="um.users.permissions.title" />}
    >
      <SearchFilterContainer>
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </SearchFilterContainer>
      {filteredPermissions && (
        <AllPermissions>
          {Object.keys(filteredPermissions)
            .sort()
            .map((permission, index) => (
              <PermisisonCard
                title={
                  <div
                    onClick={() => {
                      handleAllSelect(
                        !isAllChecked(filteredPermissions[permission]),
                        filteredPermissions[permission]
                      );
                    }}
                  >
                    {permission}
                  </div>
                }
                id={permission}
                hoverable
                extra={
                  <Switch
                    id={`selectAll${permission}`}
                    size="small"
                    checked={isAllChecked(filteredPermissions[permission])}
                    onClick={(value, event) => {
                      event.stopPropagation();
                      handleAllSelect(value, filteredPermissions[permission]);
                    }}
                  />
                }
              >
                <PermissionsList
                  permissions={filteredPermissions[permission]}
                  selectedPermissions={selectedPermissions}
                  onSelect={handleSelect}
                />
              </PermisisonCard>
            ))}
        </AllPermissions>
      )}
    </PermissionsModal>
  );
}

export default Permissions;

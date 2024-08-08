import { useCallback, useState } from "react";
import { IPermission } from "../../../interfaces";
import Permission from "../permission";

interface IPermissionProps {
  permissions: IPermission[];
  selectedPermissions: Array<number>;
  onSelect: any;
}

export function PermissionsList(props: IPermissionProps) {
  const { permissions, selectedPermissions, onSelect } = props;

  const handleSelect = (selected: boolean, permissionId: number) => {
    const permission = permissions.find((x) => x.permissionId === permissionId);
    if (permission) {
      const permissionText = permission.name.split(":");
      if (permissionText[1] !== "view" && selected) {
        const viewPermisison = permissions.find((x) => x.name.includes("view"));
        if (viewPermisison) {
          if (
            !selectedPermissions.find((x) => x === viewPermisison.permissionId)
          ) {
            onSelect(selected, [permissionId, viewPermisison.permissionId]);
            return;
          }
        }
      }
    }
    onSelect(selected, [permissionId]);
  };

  const isDisabled = useCallback(() => {
    if (permissions.length > 0 && selectedPermissions.length > 0) {
      const viewPermisison = permissions.find((x) => x.name.includes("view"));
      const permissionIds = permissions
        .filter((x) => x.permissionId !== viewPermisison?.permissionId)
        .map((x) => x.permissionId);
      return (
        !!selectedPermissions.some((x) => permissionIds.includes(x)) &&
        !!selectedPermissions.find((x) => x === viewPermisison?.permissionId)
      );
    }
    return false;
  }, [selectedPermissions, permissions]);

  return (
    <>
      {permissions.map((permission) => (
        <Permission
          permission={permission}
          selected={selectedPermissions.includes(permission.permissionId)}
          onSelect={handleSelect}
          disable={isDisabled()}
        />
      ))}
    </>
  );
}

export default PermissionsList;

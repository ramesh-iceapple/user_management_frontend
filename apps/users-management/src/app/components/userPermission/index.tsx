import { ReactNode } from "react";
import { useAppSelector } from "../../store";
import { PERMISSION_TYPE } from "../../enums";
import { getUsersPermissions } from "../../redux-modules/selectors/user";

interface userPermissionProps {
  permissions: PERMISSION_TYPE[];
  children: ReactNode;
}

const HasPermission = ({ permissions, children }: userPermissionProps) => {
  const userPermissions = useAppSelector(getUsersPermissions);

  const userIsAuthorized = (
    permissionsList: PERMISSION_TYPE[],
    permission: PERMISSION_TYPE
  ): boolean => {
    return permissionsList.includes(permission);
  };

  return (
    <>
      {userPermissions &&
      userPermissions.length > 0 &&
      userPermissions.findIndex((x: PERMISSION_TYPE) =>
        userIsAuthorized(permissions, x)
      ) > -1
        ? children
        : null}
    </>
  );
};

export default HasPermission;

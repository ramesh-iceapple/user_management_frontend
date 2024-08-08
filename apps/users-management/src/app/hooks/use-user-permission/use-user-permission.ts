import { PERMISSION_TYPE } from "../../enums";
import { getUsersPermissions } from "../../redux-modules/selectors/user";
import { useAppSelector } from "../../store";

export function useUserPermission() {
  const userPermissions = useAppSelector(getUsersPermissions);

  const userIsAuthorized = (
    permissions: PERMISSION_TYPE[],
    permission: PERMISSION_TYPE
  ): boolean => {
    return permissions.includes(permission);
  };

  const authorize = (permissions: PERMISSION_TYPE[]): boolean => {
    if (
      userPermissions &&
      userPermissions.length > 0 &&
      userPermissions.findIndex((x: PERMISSION_TYPE) =>
        userIsAuthorized(permissions, x)
      ) > -1
    ) {
      return true;
    }

    return false;
  };
  return { authorize };
}

export default useUserPermission;

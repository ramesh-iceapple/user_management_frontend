import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AppBaseLayout from "./layouts/appBaseLayout";
import Users from "./components/users";
import ProtectedRoute from "./utils/protected-route";
import { useEffect } from "react";
import { getCanRedirectToSignIn } from "./redux-modules/selectors/auth";
import { setCanRedirectToSignIn } from "./redux-modules/slices/auth";
import { useAppDispatch, useAppSelector } from "./store";
import Roles from "./components/roles";
import Departments from "./components/departments";
import { LocalStorageUtil } from "./utils/localstorage";
import { fetchUser, fetchUserPermissions } from "./redux-modules/thunks/user";
import HasPermission from "./components/userPermission";
import { PERMISSION_TYPE } from "./enums";
import Signin from "./components/signin";
import SignUpDetails from "./components/signup-details";
import { resetUserInfo } from "./redux-modules/slices/user";
import PublicRoute from "./utils/public-route";

export function App() {
  const canRedirectToSignIn = useAppSelector(getCanRedirectToSignIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = LocalStorageUtil.getUserFromLocalStorage();
    const tokens = LocalStorageUtil.getTokensLocalStorage();
    if (userInfo?.email && tokens.authToken)
      dispatch(fetchUser(tokens.authToken));
  }, []);

  useEffect(() => {
    const userInfo = LocalStorageUtil.getUserFromLocalStorage();
    if (userInfo.email) {
      dispatch(fetchUserPermissions());
    }
  }, []);

  useEffect(() => {
    if (canRedirectToSignIn) {
      dispatch(setCanRedirectToSignIn(false));
      dispatch(resetUserInfo());
      LocalStorageUtil.clear();
      navigate("/signin");
    }
  }, [canRedirectToSignIn]);

  return (
    <Routes>
      <Route
        path="signin"
        element={
          <PublicRoute>
            <Signin />
          </PublicRoute>
        }
      />
      <Route path="signup" element={<SignUpDetails />} />
      <Route path="/" element={<AppBaseLayout />}>
        <Route
          path="users"
          element={
            <ProtectedRoute>
              <HasPermission permissions={[PERMISSION_TYPE.USER_VIEW]}>
                <Users />
              </HasPermission>
            </ProtectedRoute>
          }
        />
        <Route
          path="roles"
          element={
            <ProtectedRoute>
              <HasPermission permissions={[PERMISSION_TYPE.ROLE_VIEW]}>
                <Roles />
              </HasPermission>
            </ProtectedRoute>
          }
        />
        <Route
          path="departments"
          element={
            <ProtectedRoute>
              <HasPermission permissions={[PERMISSION_TYPE.DEPARTMENT_VIEW]}>
                <Departments />
              </HasPermission>
            </ProtectedRoute>
          }
        />
        <Route index element={<Navigate to="users" />} />
      </Route>
    </Routes>
  );
}

export default App;

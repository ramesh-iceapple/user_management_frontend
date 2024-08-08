import { useState, useEffect, ReactNode } from "react";
import { LocalStorageUtil } from "../localstorage";
import Unauthorized from "../../components/unauthorized";
import { useAppSelector } from "../../store";
import { getUserInfoLoading } from "../../redux-modules/selectors/user";
import { useNavigate } from "react-router-dom";

interface IProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = (props: IProtectedRouteProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loading = useAppSelector(getUserInfoLoading);
  const userInfo = LocalStorageUtil.getUserFromLocalStorage();

  const checkUserInfo = () => {
    if (!userInfo.email) {
      setIsLoggedIn(false);
      return navigate("/signin");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  if (userInfo.email) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{props.children}</>;
  }
  if(loading) {
    return null;
  }
  return <Unauthorized />;
};
export default ProtectedRoute;

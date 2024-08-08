import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorageUtil } from "../localstorage";

interface IPublicRouteProps {
  children: ReactNode;
}

const PublicRoute = (props: IPublicRouteProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserInfo = () => {
    const userInfo = LocalStorageUtil.getUserFromLocalStorage();
    if (userInfo.email) {
      setIsLoggedIn(true);
      return navigate("/");
    }
    setIsLoggedIn(false);
  };

  useEffect(() => {
    checkUserInfo();
  }, [isLoggedIn]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{!isLoggedIn ? props.children : null}</>;
};
export default PublicRoute;

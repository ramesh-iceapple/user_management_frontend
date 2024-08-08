import { Button, Col, Dropdown, MenuProps, Row } from "antd";
import {
  HeaderWrapper,
  Seperator,
  HeaderRowWrapper,
  MenuCol,
  UserAvatarContainer,
  UserCol,
  UserNameContainer,
} from "./index.style";
import {
  DropDownIcon,
  MenuIcon,
  UserAvatarIcon,
} from "@users-platform/iceapple";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { LocalStorageUtil } from "../../utils/localstorage";
import { resetUserInfo } from "../../redux-modules/slices/user";
import { logOut } from "../../redux-modules/thunks/auth";

type MenuItem = Required<MenuProps>['items'][number];

export interface IHeaderProps {
  onOpen: any;
}

const Header = ({ onOpen }: IHeaderProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const localStorageUserInfo = LocalStorageUtil.getUserFromLocalStorage();
  const fullName =
    userInfo && userInfo.firstName
      ? `${userInfo?.firstName} ${userInfo?.lastName}`
      : localStorageUserInfo.firstName
      ? `${localStorageUserInfo.firstName} ${localStorageUserInfo?.lastName}`
      : "";

  const onClick: MenuProps["onClick"] = async ({ key }) => {
    switch (key) {
      case "0":
        try {
          await dispatch(logOut()).unwrap();
        } catch (error) {
          console.error("Logout failed", error);
        }

        LocalStorageUtil.clear();
        dispatch(resetUserInfo());
        navigate("/signin");
        return;
      case "1":
        return;
      case "2":
        return;
    }
  };

  const items: MenuItem[] = [
    {title: "Logout",label: "Logout", key: "0" },
    {title:"Reset Password", label: "Reset Password", key: "1" },
  ];
  
  return (
    <HeaderWrapper>
      <HeaderRowWrapper align="middle">
        <MenuCol span={4}>
          <Button type="text" icon={<MenuIcon />} onClick={onOpen} />
        </MenuCol>
        <UserCol flex={"auto"}>
          <Row wrap={false} align={"middle"}>
            <Col flex={"auto"} id="profileContainer">
              <Dropdown menu={{ items: items, onClick }} trigger={["click"]}>
                <UserAvatarContainer>
                  <UserAvatarIcon />
                  <UserNameContainer>
                    <div id="profileContainer">
                      Hi, {fullName ? fullName : "Guest"}
                    </div>
                  </UserNameContainer>
                  <DropDownIcon />
                </UserAvatarContainer>
              </Dropdown>
            </Col>
          </Row>
        </UserCol>
      </HeaderRowWrapper>
      <Seperator />
    </HeaderWrapper>
  );
};

export default Header;

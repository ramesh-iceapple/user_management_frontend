import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import {
  Container,
  ContentWrapper,
  Divider,
  LogoCol,
  MultiTenantSider,
  QLogoCol,
  QLogoRow,
  MultiTenantDrawer,
  ReferFriendIcon,
  InviteTeamIcon,
  LogoContainer,
  SitesIcon,
  DepartmentsIcon,
} from "./index.style";
import { Button, Image, Layout, Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { MenuIcon } from "@users-platform/iceapple";
import { IMAGES } from "../../constants/common";
import { FormattedMessage } from "react-intl";
import useUserPermission from "../../hooks/use-user-permission/use-user-permission";
import { PERMISSION_TYPE } from "../../enums";
import { isEmpty } from "lodash";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const AppBaseLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [selected, setSelected] = useState<Array<string>>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuItemsList, setMenuItemsList] = useState<MenuItem[]>([]);
  const onClose = () => {
    setToggled(false);
  };
  const { authorize } = useUserPermission();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  useEffect(() => {
    window.parent.postMessage(
      {
        type: "toggle",
        message: isToggled,
      },
      "*"
    );
  }, [isToggled]);

  useEffect(() => {
    window.parent.postMessage(
      {
        type: "collapse",
        message: collapsed,
      },
      "*"
    );
  }, [collapsed]);

  useEffect(() => {
    if (!isEmpty(selected)) {
      return;
    }
    const items: MenuItem[] = [];

    if (authorize([PERMISSION_TYPE.USER_VIEW])) {
      items.push(
        getItem(
          <span id="usersMenuTab">
            <FormattedMessage id="common.users" />
          </span>,
          "users",
          <ReferFriendIcon />
        )
      );
    }

    if (authorize([PERMISSION_TYPE.ROLE_VIEW])) {
      items.push(
        getItem(
          <span id="rolesMenuTab">
            <FormattedMessage id="common.roles" />
          </span>,
          "roles",
          <InviteTeamIcon />
        )
      );
    }

    if (authorize([PERMISSION_TYPE.DEPARTMENT_VIEW])) {
      items.push(
        getItem(
          <span id="departments">
            <FormattedMessage id="common.departments" />
          </span>,
          "departments",
          <DepartmentsIcon />
        )
      );
    }
      setMenuItemsList(items);
  }, [authorize]);
  
  useEffect(() => {
    if (menuItemsList.length > 0) {
      let value: any = menuItemsList[0]?.key;
      setSelected([value]);
      navigate(`/${value}`);
    }
  }, [menuItemsList]);

  useEffect(() => {
    menuItemsList.forEach((x: any) => {
      if (x && x.children && x.children.length > 0) {
        x.children.forEach((y: any) => {
          if (y && y.key && location.pathname.indexOf(y.key) > -1) {
            setSelected([y.key]);
          }
        });
      } else if (x && x.key && location.pathname.indexOf(x.key) > -1) {
        setSelected([x.key]);
      }
      console.log(x);
    });
  }, [location,items]);

  console.log("ITEMS CONSOLE",items);
  return (
    <Container>
      <MultiTenantDrawer
        placement="left"
        onClose={onClose}
        closable={false}
        open={isToggled}
        className="hideOnDesktop"
        width={200}
      >
        <QLogoRow wrap={false} align={"middle"} collapsed={false}>
          <LogoCol collapsed={false}>
            <Button
              type="text"
              icon={<MenuIcon />}
              onClick={() => {
                onClose();
              }}
            />
          </LogoCol>
          <QLogoCol>
            <LogoContainer>
              <Image preview={false} src={IMAGES.LOGO} />
            </LogoContainer>
          </QLogoCol>
        </QLogoRow>
        <Divider />
        <Menu
          defaultSelectedKeys={["home"]}
          mode="inline"
          items={menuItemsList}
          onClick={onClick}
          selectedKeys={selected}
        />
      </MultiTenantDrawer>
      <MultiTenantSider
        collapsible
        collapsed={collapsed}
        trigger={null}
        collapsedWidth={70}
      >
        <QLogoRow wrap={false} align={"middle"} collapsed={collapsed}>
          <LogoCol collapsed={collapsed}>
            <Button
              type="text"
              icon={<MenuIcon />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </LogoCol>
          {!collapsed && (
            <>
              <QLogoCol>
                <LogoContainer>
                  <Image preview={false} src={IMAGES.LOGO} />
                </LogoContainer>
              </QLogoCol>
            </>
          )}
        </QLogoRow>
        <Divider />
        <Menu
          defaultSelectedKeys={["home"]}
          mode="inline"
          items={menuItemsList}
          selectedKeys={selected}
          onClick={onClick}
        />
      </MultiTenantSider>
      <Layout>
        <Header onOpen={() => setToggled(!isToggled)} />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Layout>
    </Container>
  );
};

export default AppBaseLayout;

import { useContext, useState } from "react";

import {
  Avatar,
  Button,
  Dropdown,
  Grid,
  Menu,
  MenuProps,
  Space,
  theme,
} from "antd";
import {
  GlobalOutlined,
  SettingOutlined,
  RollbackOutlined,
} from "@ant-design/icons";

import { MenuOutlined, UserOutlined } from "@ant-design/icons";

import Logo from "../../assets/logo";
import { useNavigate } from "react-router-dom";
import { NavBarContext } from "../../provider/NavBarProvider";

const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function NavBar() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const { lang, setLang } = useContext(NavBarContext);

  const navigate = useNavigate();

  const [current, setCurrent] = useState("");

  const onClick = (e: any) => {
    navigate("/rating");
    setCurrent(e.key);
  };

  const styles = {
    container: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      maxWidth: token.screenXL,
      padding: screens.md
        ? `0px ${token.paddingLG}px`
        : `0px ${token.padding}px`,
    },
    header: {
      backgroundColor: token.colorBgContainer,
      borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      position: "relative",
    },
    logo: {
      display: "block",
      height: token.sizeLG,
      left: "50%",
      position: screens.md ? "static" : "absolute",
      top: "50%",
      transform: screens.md ? " " : "translate(-50%, -50%)",
    },
    menu: {
      backgroundColor: "transparent",
      borderBottom: "none",
      lineHeight: screens.sm ? "4rem" : "3.5rem",
      marginLeft: screens.md ? "0px" : `-${token.size}px`,
      width: screens.md ? "inherit" : token.sizeXXL,
    },
    menuContainer: {
      alignItems: "center",
      display: "flex",
      gap: token.size,
      width: "100%",
    },
  };

  const items: MenuProps["items"] = [
    {
      key: "ENG",
      label: <>English</>,
    },
    {
      key: "TJK",
      label: <>Tajik</>,
    },
  ];

  const menuItems: MenuProps["items"] = [
    {
      disabled: !localStorage.getItem("user"),
      label: "Check Rating",
      key: "rating",
    },
  ];

  return (
    <nav style={{ ...styles.header, position: "relative" }}>
      <div style={styles.container}>
        <div style={styles.menuContainer}>
          <a
            style={{
              ...styles.logo,
              position: screens.md ? "static" : "absolute",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
              setCurrent("");
            }}
          >
            <Logo showText={true} />
          </a>
          <Menu
            style={styles.menu}
            mode="horizontal"
            items={menuItems}
            onClick={onClick}
            selectedKeys={screens.md ? [current] : undefined}
            overflowedIndicator={
              <Button type="text" icon={<MenuOutlined />}></Button>
            }
          />
        </div>
        <Space>
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: [lang],
              onClick: (elem) => {
                setLang(elem.key as "ENG" | "TJK");
              },
            }}
            placement="bottomRight"
          >
            <Button type="text" icon={<GlobalOutlined />}></Button>
          </Dropdown>
          {!localStorage.getItem("token") ? (
            <>
              {screens.md ? (
                <Button type="text" onClick={() => navigate("/sign-in")}>
                  Log in
                </Button>
              ) : (
                ""
              )}
              <Button onClick={() => navigate("/sign-up")} type="primary">
                Sign up
              </Button>
            </>
          ) : (
            <Dropdown
              menu={{
                items: [
                  {
                    key: "user",
                    label: <>Change User Settings</>,
                    icon: <SettingOutlined />,
                  },
                  {
                    key: "out",
                    label: <>Log out</>,
                    icon: <RollbackOutlined />,
                  },
                ],
                onClick: (elem) => {
                  if (elem.key === "out") {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    navigate("/");
                  }
                  if (elem.key === "user") {
                  }
                },
              }}
              placement="bottomRight"
            >
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          )}
        </Space>
      </div>
    </nav>
  );
}

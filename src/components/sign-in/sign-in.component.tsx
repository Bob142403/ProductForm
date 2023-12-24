import { Button, Dropdown, Form, Input, Typography } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/auth";
import { Grid, theme } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { NavBarContext } from "../../provider/NavBarProvider";
import { GlobalOutlined } from "@ant-design/icons";
import { language } from "../../lang/lang";
import { ToolsContext } from "../../provider/ToolsProvider";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export const SignIn = () => {
  const { messageApi } = useContext(ToolsContext);
  const [loading, setLoading] = useState<boolean>(false);
  const { lang, setLang } = useContext(NavBarContext);
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = async (value: {
    username: string;
    password: string;
    remember: string;
  }) => {
    setLoading(true);
    try {
      const token = await authApi.login({
        username: value.username,
        password: value.password,
      });
      const res = await token.json();
      if (token.status >= 400) {
        messageApi?.open({ type: "error", content: res });
      }
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user.rows[0]));
      navigate("/");
    } catch (err) {
      if (messageApi) messageApi.open({ type: "error", content: `${err}` });
    }
    setLoading(false);
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  const navigate = useNavigate();

  return (
    <section style={{ ...styles.section, position: "relative" }}>
      <div style={{ position: "absolute", right: "10px", top: "10px" }}>
        <Dropdown
          menu={{
            items: [
              {
                key: "ENG",
                label: <>English</>,
              },
              {
                key: "TJK",
                label: <>Tajik</>,
              },
              {
                key: "UZB",
                label: <>Uzbek</>,
              },
            ],
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
      </div>
      <div style={styles.container}>
        <div style={{ ...styles.header, textAlign: "center" }}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
            <path
              d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
              fill="white"
            />
            <path
              d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
              fill="white"
            />
            <path
              d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
              fill="white"
            />
          </svg>

          <Title style={styles.title}>{language["signIn"][lang]}</Title>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder={language["password"][lang]}
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a style={{ float: "right" }} href="">
              Forgot password?
            </a>
          </Form.Item> */}
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button
              block={true}
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              {/* Log in */}
              {language["signIn"][lang]}
            </Button>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: token.marginLG,
              }}
            >
              <Text style={styles.text}>{language["dont"][lang]}</Text>{" "}
              <Link
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                {/* Sign up now */}
                {language["signUp"][lang]}
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

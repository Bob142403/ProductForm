import { Button, Form, Input, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./sign-in.style.module.css";
import { authApi } from "../../api/auth";

const { Title } = Typography;

export const SignIn = ({ qwer }: { qwer: () => void }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const navigate = useNavigate();

  const onFinish = async () => {
    try {
      const token = await authApi.login({ username, password });
      localStorage.setItem("token", token.token);
      // navigate("/");
    } catch (err) {}
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title level={3}>Sign In</Title>
        <Form
          name="normal_login"
          style={{ width: "400px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button type="primary" htmlType="submit">
              Sign in{" "}
            </Button>{" "}
            Or{" "}
            <a
              href=""
              onClick={() => {
                // navigate("/sign-up")

                qwer();
              }}
            >
              register now!
            </a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

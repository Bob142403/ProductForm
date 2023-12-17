import { Button, DatePicker, Form, Input, Select, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
// import styles from "./sign-up.style.module.css";
import data from "../../../BoboshkaNutrishion.json";
import { authApi } from "../../api/auth";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Grid, theme } from "antd";

dayjs.extend(customParseFormat);

const { Option } = Select;

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export const SignUp = () => {
  const { token } = useToken();
  const screens = useBreakpoint();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [jamoat, setJamoat] = useState<string>("");
  const [village, setVillage] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [fio, setFio] = useState<string>("");

  async function onSubmit() {
    await authApi.signUp({
      username,
      email,
      password,
      district,
      village,
      telephone,
      birthday,
      gender,
      fio,
      jamoat,
    });
  }

  const navigate = useNavigate();

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.paddingXL}px ${token.padding}px`,
      width: "380px",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center",
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  const onFinish = () => {
    onSubmit();
  };

  return (
    // <div className={styles.wrapper}>
    //   <div className={styles.container}>
    //     <Title level={3}>Sign Up</Title>
    //     <Form
    //       labelCol={{ span: 4 }}
    //       wrapperCol={{ span: 14 }}
    //       layout="horizontal"
    //       style={{ maxWidth: 900, width: "100%" }}
    //     >
    //       <Form.Item
    //         name="username"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your User name!",
    //           },
    //         ]}
    //         label="User Name"
    //       >
    //         <Input
    //           value={username}
    //           onChange={(event) => setUsername(event.target.value)}
    //         />
    //       </Form.Item>
    //       <Form.Item
    //         name="email"
    //         label="E-mail"
    //         rules={[
    //           {
    //             type: "email",
    //             message: "The input is not valid E-mail!",
    //           },
    //         ]}
    //       >
    //         <Input
    //           value={email}
    //           onChange={(event) => setEmail(event.target.value)}
    //         />
    //       </Form.Item>
    //       <Form.Item
    //         name="password"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your Password",
    //           },
    //         ]}
    //         label="Password"
    //       >
    //         <Input
    //           type="password"
    //           value={password}
    //           onChange={(event) => setPassword(event.target.value)}
    //         />
    //       </Form.Item>
    //       <Form.Item
    //         name="fio"
    //         label="F.I.O"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your first and last name!",
    //           },
    //         ]}
    //       >
    //         <Input
    //           type="text"
    //           value={fio}
    //           onChange={(event) => setFio(event.target.value)}
    //         />
    //       </Form.Item>
    //       <Form.Item
    //         name="district"
    //         label="District"
    //         rules={[{ required: true, message: "Please select district!" }]}
    //       >
    //         <Select
    //           placeholder="select your district"
    //           value={district}
    //           onChange={(event) => {
    //             setDistrict(event);
    //             setJamoat("");
    //             setVillage("");
    //           }}
    //         >
    //           {data["district"].map((elem) => (
    //             <Option key={elem.name}>{elem["label::English"]}</Option>
    //           ))}
    //         </Select>
    //       </Form.Item>
    //       <Form.Item
    //         name="jamoat"
    //         label="Jamoat"
    //         rules={[{ required: true, message: "Please select jamoat!" }]}
    //       >
    //         <Select
    //           placeholder="select your jamoat"
    //           value={jamoat}
    //           onChange={(event) => {
    //             setJamoat(event);
    //             setVillage("");
    //           }}
    //         >
    //           {data["jamoat"]
    //             .filter((elem) => elem.district === district)
    //             .map((elem) => (
    //               <Option key={elem.name}>{elem["label::English"]}</Option>
    //             ))}
    //         </Select>
    //       </Form.Item>
    //       <Form.Item
    //         name="village"
    //         label="Village"
    //         rules={[{ required: true, message: "Please select village!" }]}
    //       >
    //         <Select
    //           value={village}
    //           onChange={(event) => setVillage(event)}
    //           placeholder="select your village"
    //         >
    //           {data["village"]
    //             .filter((elem) => elem.jamoat === jamoat)
    //             .map((elem) => (
    //               <Option key={elem.name}>{elem["label::English"]}</Option>
    //             ))}
    //         </Select>
    //       </Form.Item>
    //       <Form.Item
    //         label="Birthday"
    //         name="birthDay"
    //         rules={[
    //           { required: true, message: "Please select your birthday!" },
    //         ]}
    //       >
    //         <DatePicker
    //           onChange={(event) => {
    //             if (event) setBirthday(event?.toISOString());
    //           }}
    //         />
    //       </Form.Item>
    //       <Form.Item
    //         label="Telephone"
    //         name="telephone"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your telephone number!",
    //           },
    //         ]}
    //       >
    //         <Input
    //           type="text"
    //           value={telephone}
    //           onChange={(event) => setTelephone(event.target.value)}
    //         />
    //       </Form.Item>
    //       <Form.Item
    //         name="gender"
    //         label="Gender"
    //         rules={[{ required: true, message: "Please select gender!" }]}
    //       >
    //         <Select
    //           placeholder="select your gender"
    //           value={gender}
    //           onChange={(event) => setGender(event)}
    //         >
    //           <Option value="male">Male</Option>
    //           <Option value="female">Female</Option>
    //           <Option value="other">Other</Option>
    //         </Select>
    //       </Form.Item>

    //       <Form.Item style={{}}>
    //         <Button type="primary" htmlType="submit" onClick={onSubmit}>
    //           Sign Up{" "}
    //         </Button>{" "}
    //         Or{" "}
    //         <a href="" onClick={() => navigate("/sign-in")}>
    //           Already have an account
    //         </a>
    //       </Form.Item>
    //     </Form>
    //   </div>
    // </div>
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={{ ...styles.header, textAlign: "center" }}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.125" width="32" height="32" rx="6.4" fill="#1890FF" />
            <path
              d="M19.3251 4.80005H27.3251V12.8H19.3251V4.80005Z"
              fill="white"
            />
            <path d="M12.925 12.8H19.3251V19.2H12.925V12.8Z" fill="white" />
            <path d="M4.92505 17.6H14.525V27.2001H4.92505V17.6Z" fill="white" />
          </svg>

          <Title style={styles.title}>Sign up</Title>
          <Text style={styles.text}>
            Join us! Create an account to get started.
          </Text>
        </div>
        <Form
          name="normal_signup"
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="UserName"
            />
          </Form.Item>
          <Form.Item name="email">
            <Input
              prefix={<MailOutlined />}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            // extra="Password needs to be at least 8 characters."
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
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="fio"
            rules={[
              {
                required: true,
                message: "Please input your first and last name!",
              },
            ]}
          >
            <Input
              placeholder="FIO"
              prefix={<UserOutlined />}
              value={fio}
              onChange={(event) => setFio(event.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="district"
            rules={[{ required: true, message: "Please select district!" }]}
          >
            <Select
              placeholder="Select your District!"
              value={district}
              onChange={(event) => {
                setDistrict(event);
                setJamoat("");
                setVillage("");
              }}
            >
              {data["district"].map((elem) => (
                <Option key={elem.name}>{elem["label::English"]}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="jamoat"
            rules={[{ required: true, message: "Please select jamoat!" }]}
          >
            <Select
              placeholder="Select your Jamoat!"
              value={jamoat}
              onChange={(event) => {
                setJamoat(event);
                setVillage("");
              }}
            >
              {data["jamoat"]
                .filter((elem) => elem.district === district)
                .map((elem) => (
                  <Option key={elem.name}>{elem["label::English"]}</Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="village"
            rules={[{ required: true, message: "Please select village!" }]}
          >
            <Select
              value={village}
              onChange={(event) => setVillage(event)}
              placeholder="Select your Village!"
            >
              {data["village"]
                .filter((elem) => elem.jamoat === jamoat)
                .map((elem) => (
                  <Option key={elem.name}>{elem["label::English"]}</Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="birthDay"
            rules={[
              { required: true, message: "Please select your birthday!" },
            ]}
          >
            <DatePicker
              placeholder="Select Birthday"
              style={{ width: "100%" }}
              onChange={(_, dateString) => {
                setBirthday(dateString);
              }}
            />
          </Form.Item>
          <Form.Item
            name="telephone"
            rules={[
              {
                required: true,
                message: "Please input your telephone number!",
              },
            ]}
          >
            <Input
              placeholder="Telephone Number"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select
              placeholder="Select your gender!"
              value={gender}
              onChange={(event) => setGender(event)}
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type="primary" htmlType="submit">
              Sign up
            </Button>
            <div style={{ ...styles.signup, textAlign: "center" }}>
              <Text style={styles.text}>Already have an account?</Text>{" "}
              <Link href="" onClick={() => navigate("/sign-in")}>
                Sign in
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

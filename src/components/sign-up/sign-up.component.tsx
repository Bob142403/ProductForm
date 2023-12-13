import { Button, DatePicker, Form, Input, Select, Typography } from "antd";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import styles from "./sign-up.style.module.css";
import data from "../../../BoboshkaNutrishion.json";
import { authApi } from "../../api/auth";

dayjs.extend(customParseFormat);

const { Title } = Typography;
const { Option } = Select;

export const SignUp = ({ qwer }: { qwer: () => void }) => {
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

  // const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title level={3}>Sign Up</Title>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 900, width: "100%" }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your User name!",
              },
            ]}
            label="User Name"
          >
            <Input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                message: "Please input your E-mail!",
                required: true,
              },
            ]}
          >
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password",
              },
            ]}
            label="Password"
          >
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="fio"
            label="F.I.O"
            rules={[
              {
                required: true,
                message: "Please input your first and last name!",
              },
            ]}
          >
            <Input
              type="text"
              value={fio}
              onChange={(event) => setFio(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="district"
            label="District"
            rules={[{ required: true, message: "Please select district!" }]}
          >
            <Select
              placeholder="select your district"
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
            label="Jamoat"
            rules={[{ required: true, message: "Please select jamoat!" }]}
          >
            <Select
              placeholder="select your jamoat"
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
            label="Village"
            rules={[{ required: true, message: "Please select village!" }]}
          >
            <Select
              value={village}
              onChange={(event) => setVillage(event)}
              placeholder="select your village"
            >
              {data["village"]
                .filter((elem) => elem.jamoat === jamoat)
                .map((elem) => (
                  <Option key={elem.name}>{elem["label::English"]}</Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Birthday"
            name="birthDay"
            rules={[
              { required: true, message: "Please select your birthday!" },
            ]}
          >
            <DatePicker
              onChange={(event) => {
                if (event) setBirthday(event?.toISOString());
              }}
            />
          </Form.Item>
          <Form.Item
            label="Telephone"
            name="telephone"
            rules={[
              {
                required: true,
                message: "Please input your telephone number!",
              },
            ]}
          >
            <Input
              type="text"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select
              placeholder="select your gender"
              value={gender}
              onChange={(event) => setGender(event)}
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item style={{}}>
            <Button type="primary" htmlType="submit" onClick={onSubmit}>
              Sign Up{" "}
            </Button>{" "}
            Or{" "}
            <a href="" onClick={() => qwer()}>
              Already have an account
            </a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

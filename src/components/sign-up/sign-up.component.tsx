import {
  Button,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
} from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
// import styles from "./sign-up.style.module.css";
import data from "../../../BoboshkaNutrishion.json";
import { authApi } from "../../api/auth";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Grid, theme } from "antd";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";

dayjs.extend(customParseFormat);

const { Option } = Select;

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export const SignUp = () => {
  const { lang, setLang } = useContext(NavBarContext);
  const { token } = useToken();
  const screens = useBreakpoint();
  const [username, setUsername] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [districtOtherVisible, setDistrictOtherVisible] =
    useState<boolean>(false);
  // const [jamoatOtherVisible, setJamoatOtherVisible] = useState<boolean>(false);
  // const [villageOtherVisible, setVillageOtherVisible] =
  //   useState<boolean>(false);
  const [jamoat, setJamoat] = useState<string>("");
  const [village, setVillage] = useState<string>("");
  const [birthday, setBirthday] = useState<number>(2000);
  const [telephone, setTelephone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [fio, setFio] = useState<string>("");
  const [fromWho, setFromWho] = useState<string>("");

  async function onSubmit(value: any) {
    const data = {
      username,
      email: "",
      password,
      district,
      village,
      telephone,
      birthday,
      gender,
      fio,
      jamoat,
      fromWho,
    };
    if (districtOtherVisible) data.district = value["other_district"];
    // if (jamoatOtherVisible) data.jamoat = value["other_jamoat"];
    // if (villageOtherVisible) data.village = value["other_village"];
    await authApi.signUp(data);
    navigate("/sign-in");
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

          <Title style={styles.title}>{language["signUp"][lang]}</Title>
          {/* <Text style={styles.text}>
            Join us! Create an account to get started.
          </Text> */}
        </div>
        <Form
          name="normal_signup"
          onFinish={onSubmit}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: language["reqn"][lang],
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder={language["usr"][lang]}
            />
          </Form.Item>
          {/* <Form.Item name="email">
            <Input
              prefix={<MailOutlined />}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </Form.Item> */}
          <Form.Item
            name="password"
            // extra="Password needs to be at least 8 characters."
            rules={[
              {
                required: true,
                message: language["reqp"][lang],
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder={language["pass"][lang]}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="fio"
            rules={[
              {
                required: true,
                message: language["reqf"][lang],
              },
            ]}
          >
            <Input
              placeholder={language["fio"][lang]}
              value={fio}
              onChange={(event) => setFio(event.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="district"
            rules={[{ required: true, message: language["reqd"][lang] }]}
          >
            <Select
              placeholder={language["slcD"][lang]}
              value={district}
              onChange={(event) => {
                if (event === "other") setDistrictOtherVisible(true);
                else setDistrictOtherVisible(false);
                setDistrict(event);
                setJamoat("");
                setVillage("");
              }}
            >
              {data["district"].map((elem) => (
                <Option key={elem.name}>
                  {elem[`label::${lang === "ENG" ? "English" : "Tajik"}`]}
                </Option>
              ))}
              <Option key="other">{language["other"][lang]}</Option>
            </Select>
          </Form.Item>

          {districtOtherVisible && (
            <Form.Item
              name="other_district"
              rules={[
                {
                  required: true,
                  message: language["reqid"][lang],
                },
              ]}
            >
              <Input placeholder={language["od"][lang]} />
            </Form.Item>
          )}

          {/* <Form.Item
            hidden={districtOtherVisible}
            name="jamoat"
            // rules={[{ required: true, message: "Please select jamoat!" }]}
          >
            <Select
              placeholder={language["slcJ"][lang]}
              value={jamoat}
              onChange={(event) => {
                if (event === "other") setJamoatOtherVisible(true);
                else setJamoatOtherVisible(false);
                setJamoat(event);
                setVillage("");
              }}
            >
              {data["jamoat"]
                .filter((elem) => elem.district === district)
                .map((elem) => (
                  <Option key={elem.name}>
                    {elem[`label::${lang === "ENG" ? "English" : "Tajik"}`]}
                  </Option>
                ))}
              {data["jamoat"].filter((elem) => elem.district === district)
                .length > 0 && (
                <Option key="other">{language["other"][lang]}</Option>
              )}
            </Select>
          </Form.Item>

          {jamoatOtherVisible && (
            <Form.Item
              name="other_jamoat"
              rules={[
                {
                  required: true,
                  message: "Please input your jamoat!",
                },
              ]}
            >
              <Input placeholder="Other Jamoat" />
            </Form.Item>
          )}

          <Form.Item
            hidden={districtOtherVisible || jamoatOtherVisible}
            name="village"
            // rules={[{ required: true, message: "Please select village!" }]}
          >
            <Select
              value={village}
              onChange={(event) => {
                if (event === "other") setVillageOtherVisible(true);
                else setVillageOtherVisible(false);
                setVillage(event);
              }}
              placeholder={language["slcV"][lang]}
            >
              {data["village"]
                .filter((elem) => elem.jamoat === jamoat)
                .map((elem) => (
                  <Option key={elem.name}>
                    {elem[`label::${lang === "ENG" ? "English" : "Tajik"}`]}
                  </Option>
                ))}
              {data["village"].filter((elem) => elem.jamoat === jamoat).length >
                0 && <Option key="other">{language["other"][lang]}</Option>}
            </Select>
          </Form.Item>

          {villageOtherVisible && (
            <Form.Item
              name="other_village"
              rules={[
                {
                  required: true,
                  message: "Please input your village!",
                },
              ]}
            >
              <Input placeholder="Other Village" />
            </Form.Item>
          )} */}

          <Form.Item
            name="birthDay"
            rules={[{ required: true, message: language["reqb"][lang] }]}
          >
            {/* <DatePicker
              placeholder={language["slcB"][lang]}
              style={{ width: "100%" }}
              onChange={(_, dateString) => {
                setBirthday(dateString);
              }}
            /> */}

            <InputNumber
              placeholder={language["userBr"][lang]}
              type="number"
              value={birthday}
              onChange={(elem) => {
                if (elem && elem >= 1900 && elem <= 2023) setBirthday(elem);
              }}
              min={1900}
              max={2023}
            />
          </Form.Item>
          <Form.Item
            name="telephone"
            rules={[
              {
                required: true,
                message: language["reqt"][lang],
              },
            ]}
          >
            <Input
              placeholder={language["tlp"][lang]}
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            rules={[{ required: true, message: language["reqg"][lang] }]}
          >
            <Select
              placeholder={language["slcG"][lang]}
              value={gender}
              onChange={(event) => setGender(event)}
            >
              <Option value="male">{language["male"][lang]}</Option>
              <Option value="female">{language["female"][lang]}</Option>
            </Select>
          </Form.Item>
          <Form.Item name="fromWho">
            <Input
              value={fromWho}
              onChange={(event) => setFromWho(event.target.value)}
              placeholder={language["lastField"][lang]}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type="primary" htmlType="submit">
              {language["signUp"][lang]}
            </Button>
            <div style={{ ...styles.signup, textAlign: "center" }}>
              <Text style={styles.text}>{language["lass"][lang]}</Text>{" "}
              <Link href="" onClick={() => navigate("/sign-in")}>
                {language["signIn"][lang]}
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

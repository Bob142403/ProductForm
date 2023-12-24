import { List, Typography } from "antd";
import data from "../../../xlsx_Nutrition.json";
import { useContext } from "react";
import { NavBarContext } from "../../provider/NavBarProvider";

const { Title } = Typography;
export const CategoryPage = () => {
  const { lang } = useContext(NavBarContext);
  const nameGroup =
    lang === "ENG"
      ? "Name_of_group"
      : lang === "TJK"
      ? "Name_of_10_group_tj"
      : "Name_of_10_group_uz";
  const nameProduct =
    lang === "ENG"
      ? "Products"
      : lang === "TJK"
      ? "Products_tj"
      : "Products_uz";

  return (
    <div
      style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}
    >
      {data.map((elem) => (
        <List
          header={
            <Title level={5} style={{ marginTop: "0" }}>
              {elem[nameGroup]}
            </Title>
          }
          bordered
          dataSource={[elem]}
          renderItem={(item) => <List.Item>{item[nameProduct]}</List.Item>}
        />
      ))}
      {/* <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item[nameGroup]}</List.Item>}
      /> */}
    </div>
  );
};

import { useContext } from "react";
import { List, Typography } from "antd";

import data from "../../../xlsx_Nutrition.json";
import { NavBarContext } from "../../provider/NavBarProvider";
import styles from "./category-page.style.module.css";

const { Title } = Typography;
export const CategoryPage = () => {
  const { lang } = useContext(NavBarContext);

  const groupName =
    lang === "ENG"
      ? "Name_of_group"
      : lang === "TJK"
      ? "Name_of_10_group_tj"
      : "Name_of_10_group_uz";
  const productName =
    lang === "ENG"
      ? "Products"
      : lang === "TJK"
      ? "Products_tj"
      : "Products_uz";

  return (
    <div className={styles.wrapper}>
      {data.map((elem) => (
        <List
          key={elem.id_group}
          header={
            <Title level={5} style={{ marginTop: "0" }}>
              {elem[groupName]}
            </Title>
          }
          bordered
          dataSource={[elem]}
          renderItem={(item) => <List.Item>{item[productName]}</List.Item>}
        />
      ))}
    </div>
  );
};

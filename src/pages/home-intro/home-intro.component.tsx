import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./home-intro.style.module.css";
import { language } from "../../lang/lang";
import { useContext } from "react";
import { NavBarContext } from "../../provider/NavBarProvider";

const { Title } = Typography;

export const HomeIntro = ({}: {}) => {
  const navigate = useNavigate();
  const { lang } = useContext(NavBarContext);
  return (
    <div className={styles.container}>
      <div className={styles.backgroudImage}></div>

      <Title level={3} >{language["homeIntroAlert"][lang]}</Title>
      <Button
        onClick={() => navigate("/breakfast")}
        size="large"
        type="primary"
        disabled={!localStorage.getItem("user")}
        // style={{ backgroundColor: "transparent" }}
      >
        {language["startBtn"][lang]}
      </Button>
    </div>
  );
};

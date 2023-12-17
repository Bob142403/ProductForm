import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./home-intro.style.module.css";

const { Title } = Typography;

export const HomeIntro = ({}: {}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.backgroudImage}></div>

      <Title level={1}>You can only vote once a day, Please be careful!</Title>
      <Button
        onClick={() => navigate("/breakfast")}
        size="large"
        type="primary"
        disabled={!localStorage.getItem("user")}
        // style={{ backgroundColor: "transparent" }}
      >
        Start Nutrition Form List
      </Button>
    </div>
  );
};

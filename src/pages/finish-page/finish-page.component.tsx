import { Button, Divider, List } from "antd";
import { useContext, useEffect, useMemo, useState } from "react";
import { CategoryContext } from "../../provider/CategoryProvider";
import { helpMessage } from "../../utils/helpmessage";
import { categoryApi } from "../../api/category";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";
import { feedbackApi } from "../../api/feedback";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const FinishPage = ({}: {}) => {
  const { category } = useContext(CategoryContext);
  const { lang } = useContext(NavBarContext);
  const [allCategory, setAllCategory] = useState<any[]>([]);
  const [feedback, setFeedback] = useState<string>("");
  const navigate = useNavigate();

  let index = 1;
  const resultCategory = [];
  for (let value of Object.values(category)) {
    resultCategory.push(
      lang === "ENG"
        ? `Result group ${index} is: ${value}`
        : lang === "TJK"
        ? `Натиҷаи ${index} гуруҳ :  ${value}`
        : `${index} гуруҳ натиҷаси:  ${value}`
    );
    index++;
  }

  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
    const user = JSON.parse(localStorage.getItem("user") || "");

    const data = (await categoryApi.getCategory(user.id)).rows;

    setAllCategory(data);
  }

  const data = useMemo(
    () => ({
      labels: allCategory.map((elem: any) =>
        new Date(+elem.date).toLocaleDateString()
      ),
      datasets: [
        {
          label: "Dataset 1",
          data: allCategory.map(
            (elem: any) =>
              +!!elem.group1 +
              +!!elem.group2 +
              +!!elem.group3 +
              +!!elem.group4 +
              +!!elem.group5 +
              +!!elem.group6 +
              +!!elem.group7 +
              +!!elem.group8 +
              +!!elem.group9 +
              +!!elem.group10
            //  +
            // +!!elem.group11 +
            // +!!elem.group12 +
            // +!!elem.group13
          ),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    }),
    [allCategory]
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const { label } = context;
            const hoveredDay: any = allCategory.find(
              (elem: any) => new Date(+elem.date).toLocaleDateString() === label
            );
            return [
              `Group 1:  ${hoveredDay.group1}`,
              `Group 2:  ${hoveredDay.group2}`,
              `Group 3:  ${hoveredDay.group3}`,
              `Group 4:  ${hoveredDay.group4}`,
              `Group 5:  ${hoveredDay.group5}`,
              `Group 6:  ${hoveredDay.group6}`,
              `Group 7:  ${hoveredDay.group7}`,
              `Group 8:  ${hoveredDay.group8}`,
              `Group 9:  ${hoveredDay.group9}`,
              `Group 10:  ${hoveredDay.group10}`,
              // `Group 11:  ${hoveredDay.group11}`,
              // `Group 12:  ${hoveredDay.group12}`,
              // `Group 13:  ${hoveredDay.group13}`,
            ];
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 13,
        min: 0,
      },
    },
  };

  return (
    <>
      <List
        // header={<div>{language["categoryResult"][lang]}</div>}
        bordered
        dataSource={resultCategory}
        renderItem={(item) => <List.Item> {item}</List.Item>}
      />

      <Divider
        orientation="left"
        style={{ wordBreak: "normal", whiteSpace: "normal" }}
      >
        {language["howTodoAllCategory"][lang]}
      </Divider>

      <List
        bordered
        dataSource={helpMessage(category, lang).filter((elem) => elem)}
        renderItem={(item) => <List.Item> {item}</List.Item>}
      />

      <Line options={options} data={data} />

      <Divider orientation="left">{language["feedback"][lang]}</Divider>
      <div style={{ marginInline: "20px" }}>
        <TextArea
          rows={4}
          placeholder={language["feedback"][lang]}
          value={feedback}
          style={{ resize: "none" }}
          onChange={(event) => setFeedback(event.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBlock: "20px",
        }}
      >
        <Button
          type="primary"
          onClick={async () => {
            feedbackApi.insert({
              formId: allCategory[allCategory.length - 1].id,
              feedback,
            });
            navigate("/");
          }}
        >
          {language["finish"][lang]}
        </Button>
      </div>
    </>
  );
};
/**
 * Прогресс дар истеъмоли гуногинии гизо
 */

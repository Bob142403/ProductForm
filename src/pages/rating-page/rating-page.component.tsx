import { useEffect, useMemo, useState } from "react";
import { categoryApi } from "../../api/category";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const RatingPage = () => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
    const user = JSON.parse(localStorage.getItem("user") || "");
    console.log("user: ", user);
    const data = (await categoryApi.getCategory(user.id)).rows;

    setAllCategory(data);
  }

  console.log("allCategory: ", allCategory);
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
              elem.group1 +
              elem.group2 +
              elem.group3 +
              elem.group4 +
              elem.group5 +
              elem.group6 +
              elem.group7 +
              elem.group8 +
              elem.group9 +
              elem.group10 +
              elem.group11 +
              elem.group12 +
              elem.group13
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
            return JSON.stringify(
              allCategory.find(
                (elem: any) =>
                  new Date(+elem.date).toLocaleDateString() === label
              )
            );
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Line options={options} data={data} />
    </div>
  );
};
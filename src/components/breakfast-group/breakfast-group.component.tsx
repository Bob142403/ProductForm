import { Button, Checkbox, Typography } from "antd";
import data from "../../../BoboshkaNutrishion.json";
import styles from "./breakfast-group.style.module.css";
import { useMemo, useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useNavigate } from "react-router-dom";
import { breakfastcategory } from "../../utils/breakfastcategory";

interface Type {
  name: string;
  "label::English": string;
}

const Step = ({
  title,
  selected,
  setSelected,
  list,
}: {
  title: string;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  list: Type[];
}) => {
  return (
    <div className={styles.firstQuestion}>
      <Title level={5}>{title}</Title>
      <div className={styles.checkboxList}>
        {list.map((select, index) => (
          <Checkbox
            key={index}
            checked={selected.includes(select["name"])}
            onChange={(e: CheckboxChangeEvent) => {
              console.log(e.target.checked);
              if (e.target.checked)
                setSelected((prev) => [...prev, select["name"]]);
              else
                setSelected(selected.filter((elem) => elem !== select["name"]));
            }}
          >
            {select["label::English"]}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

const { Title } = Typography;
export const BreakfastGroup = () => {
  const question = data["survey"].find((elem) => elem.name === "group_xg79k42");
  const navigate = useNavigate();

  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);
  const [selectedFood, setSelectedFood] = useState<string[]>([]);
  const [seletedProduct, setSelectedProduct] = useState<string[]>([]);

  const breakfastGroup = data["choices"].filter(
    (elem) => elem.list_name === "BreakfastGroup"
  );
  const foods = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "Food")
        .filter((elem) => selectedGroup.includes(elem["BreakfastGroup"])),
    [selectedGroup]
  );
  const products = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "Product")
        .filter((elem) => selectedFood.includes(elem["Food"])),
    [selectedFood]
  );

  if (!question) return <></>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {step === "group" && (
          <Step
            title={question["label::English"] || ""}
            list={breakfastGroup}
            selected={selectedGroup}
            setSelected={setSelectedGroup}
          />
        )}
        {step === "food" && (
          <Step
            title="Food"
            list={foods}
            selected={selectedFood}
            setSelected={setSelectedFood}
          />
        )}
        {step === "product" && (
          <Step
            title="Product"
            list={products}
            selected={seletedProduct}
            setSelected={setSelectedProduct}
          />
        )}
        <div className={styles.btnWrapper}>
          <div>
            {step !== "group" && (
              <Button
                hidden
                type="primary"
                onClick={() => {
                  if (step === "food") setStep("group");
                  if (step === "product") {
                    setStep("food");
                  }
                }}
              >
                Previos
              </Button>
            )}
          </div>
          <Button
            type="primary"
            onClick={() => {
              if (step === "group") setStep("food");
              if (step === "food") setStep("product");
              if (step === "product") {
                console.log(
                  "breakfastcategory: ",
                  breakfastcategory(seletedProduct)
                );
                navigate("/lunch");
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

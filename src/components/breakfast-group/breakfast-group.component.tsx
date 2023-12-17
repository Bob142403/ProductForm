import { Button, Checkbox, Divider, Typography } from "antd";
import data from "../../../BoboshkaNutrishion.json";
import styles from "./breakfast-group.style.module.css";
import { useContext, useMemo, useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useNavigate } from "react-router-dom";
import { breakfastcategory } from "../../utils/breakfastcategory";
import { CategoryContext } from "../../provider/CategoryProvider";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";

export interface Type {
  name: string;
  "label::English": string;
  "label::Tajik": string;
  "label::Uzbek": string;
}

export const Step = ({
  title,
  selected,
  setSelected,
  list,
  lang,
}: {
  title: string;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  list: Type[];
  lang: string;
}) => {
  return (
    <div className={styles.firstQuestion}>
      <Title level={5} style={{ marginTop: "0" }}>
        {title}
      </Title>
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
            {
              select[
                `label::${
                  lang === "ENG"
                    ? "English"
                    : lang === "TJK"
                    ? "Tajik"
                    : "Uzbek"
                }`
              ]
            }
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

const { Title } = Typography;
export const BreakfastGroup = () => {
  const { setCategory } = useContext(CategoryContext);
  const { lang } = useContext(NavBarContext);

  const question = data["survey"].find((elem) => elem.name === "group_xg79k42");
  const questionforGroup = data["survey"].find(
    (elem) => elem.type === "select_multiple BreakfastGroup"
  ) as Type;
  const questionforFood = data["survey"].find(
    (elem) => elem.type === "select_multiple Food"
  ) as Type;
  const questionforProduct = data["survey"].find(
    (elem) => elem.type === "select_multiple Product"
  ) as Type;
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
        <Divider orientation="left">
          {question[
            `label::${
              lang === "ENG" ? "English" : lang === "TJK" ? "Tajik" : "Uzbek"
            }`
          ] || ""}
        </Divider>
        {step === "group" && (
          <Step
            title={
              questionforGroup[
                `label::${
                  lang === "ENG"
                    ? "English"
                    : lang === "TJK"
                    ? "Tajik"
                    : "Uzbek"
                }`
              ]
            }
            lang={lang}
            list={breakfastGroup}
            selected={selectedGroup}
            setSelected={setSelectedGroup}
          />
        )}
        {step === "food" && (
          <Step
            title={
              questionforFood[
                `label::${
                  lang === "ENG"
                    ? "English"
                    : lang === "TJK"
                    ? "Tajik"
                    : "Uzbek"
                }`
              ]
            }
            lang={lang}
            list={foods}
            selected={selectedFood}
            setSelected={setSelectedFood}
          />
        )}
        {step === "product" && (
          <Step
            lang={lang}
            title={
              questionforProduct[
                `label::${
                  lang === "ENG"
                    ? "English"
                    : lang === "TJK"
                    ? "Tajik"
                    : "Uzbek"
                }`
              ]
            }
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
                {language["previos"][lang]}
              </Button>
            )}
          </div>
          <Button
            type="primary"
            onClick={() => {
              if (step === "group") setStep("food");
              if (step === "food") setStep("product");
              if (step === "product") {
                setCategory(breakfastcategory(seletedProduct));
                navigate("/lunch");
              }
            }}
          >
            {language["next"][lang]}
          </Button>
        </div>
      </div>
    </div>
  );
};

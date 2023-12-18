import { Button, Divider } from "antd";
import data from "../../../BoboshkaNutrishion.json";
import styles from "./lunch-group.style.module.css";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { lunchCategory } from "../../utils/lunchcategory";
import { CategoryContext } from "../../provider/CategoryProvider";
import { Step, Type } from "../breakfast-group/breakfast-group.component";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";

export const LunchGroup = () => {
  const { setCategory } = useContext(CategoryContext);
  const { lang } = useContext(NavBarContext);

  const question = data["survey"].find((elem) => elem.name === "group_ou0gs78");
  const questionforGroup = data["survey"].find(
    (elem) => elem.type === "select_multiple LunchGroup"
  ) as Type;
  const questionforFood = data["survey"].find(
    (elem) => elem.type === "select_multiple LunchFood"
  ) as Type;
  const questionforProduct = data["survey"].find(
    (elem) => elem.type === "select_multiple LunchProduct"
  ) as Type;
  const navigate = useNavigate();

  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);
  const [selectedFood, setSelectedFood] = useState<string[]>([]);
  const [seletedProduct, setSelectedProduct] = useState<string[]>([]);

  const group = data["choices"].filter(
    (elem) => elem.list_name === "LunchGroup"
  );
  const foods = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "LunchFood")
        .filter((elem) => selectedGroup.includes(elem["LunchGroup"])),
    [selectedGroup]
  );
  const products = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "LunchProduct")
        .filter((elem) => selectedFood.includes(elem["LunchFood"])),
    [selectedFood]
  );

  if (!question) return <></>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Divider
          orientation="left"
          style={{ wordBreak: "normal", whiteSpace: "normal" }}
        >
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
            list={group}
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
                setCategory(lunchCategory(seletedProduct));
                navigate("/dinner");
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

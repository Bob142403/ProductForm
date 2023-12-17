import { Button, Divider, Typography } from "antd";
import data from "../../../BoboshkaNutrishion.json";
import styles from "./dinner-group.style.module.css";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dinnercategory } from "../../utils/dinnercategory";
import {
  CategoryContext,
  concatCategory,
} from "../../provider/CategoryProvider";
import { categoryApi } from "../../api/category";
import { Step, Type } from "../breakfast-group/breakfast-group.component";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";

export const DinnerGroup = () => {
  const { setCategory, category } = useContext(CategoryContext);
  const { lang } = useContext(NavBarContext);

  const question = data["survey"].find((elem) => elem.name === "group_ub6cg02");
  const questionforGroup = data["survey"].find(
    (elem) => elem.type === "select_multiple DinnerGroup"
  ) as Type;
  const questionforFood = data["survey"].find(
    (elem) => elem.type === "select_multiple DinnerFood"
  ) as Type;
  const questionforProduct = data["survey"].find(
    (elem) => elem.type === "select_multiple DinnerProduct"
  ) as Type;
  const navigate = useNavigate();

  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);
  const [selectedFood, setSelectedFood] = useState<string[]>([]);
  const [seletedProduct, setSelectedProduct] = useState<string[]>([]);

  const group = data["choices"].filter(
    (elem) => elem.list_name === "DinnerGroup"
  );
  const foods = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerFood")
        .filter((elem) => selectedGroup.includes(elem["DinnerGroup"])),
    [selectedGroup]
  );
  const products = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerProduct")
        .filter((elem) => selectedFood.includes(elem["DinnerFood"])),
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
            lang={lang}
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
            list={group}
            selected={selectedGroup}
            setSelected={setSelectedGroup}
          />
        )}
        {step === "food" && (
          <Step
            lang={lang}
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
            onClick={async () => {
              const user = JSON.parse(localStorage.getItem("user") || "");
              if (step === "group") setStep("food");
              if (step === "food") setStep("product");
              if (step === "product") {
                setCategory(dinnercategory(seletedProduct));
                await categoryApi.insert({
                  ...concatCategory(category, dinnercategory(seletedProduct)),
                  userId: user.id,
                  date: Date.now(),
                });
                navigate("/finish");
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

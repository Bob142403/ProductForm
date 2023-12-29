import { Button, Divider } from "antd";
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
import {
  LastStep,
  NewStep,
  Step,
  Type,
} from "../breakfast-group/breakfast-group.component";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";

export const DinnerGroup = () => {
  const { setCategory, category } = useContext(CategoryContext);
  const { lang } = useContext(NavBarContext);

  const question = data["survey"].find((elem) => elem.name === "group_ub6cg02");
  const questionforGroup = data["survey"].find(
    (elem) => elem.type === "select_multiple DinnerGroup"
  ) as Type;
  const question_b = data["survey"].find((elem) => elem.name === "group_ub6cg02b");
  const questionforFood = data["survey"].find(
    (elem) => elem.type === "select_multiple DinnerFood"
  ) as Type;
  const question_c = data["survey"].find((elem) => elem.name === "group_ub6cg02c");
  // const questionforProduct = data["survey"].find(
  //   (elem) => elem.type === "select_multiple DinnerProduct"
  // ) as Type;
  const navigate = useNavigate();

  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);
  const [selectedFood, setSelectedFood] = useState<string[]>([]);
  const [seletedProduct, setSelectedProduct] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const group = data["choices"].filter(
    (elem) => elem.list_name === "DinnerGroup"
  );
  const foods = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerFood")
        .filter(
          (elem) =>
            selectedGroup.includes(elem["DinnerGroup"]) &&
            data["choices"]
              .filter((elem2) => elem2.list_name === "DinnerProduct")
              .filter((elem1) => elem["name"] === elem1["DinnerFood"]).length >
              1
        ),
    [selectedGroup]
  );
  const hiddenFoods = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerFood")
        .filter(
          (elem) =>
            selectedGroup.includes(elem["DinnerGroup"]) &&
            data["choices"]
              .filter((elem2) => elem2.list_name === "DinnerProduct")
              .filter((elem1) => elem["name"] === elem1["DinnerFood"]).length <=
              1
        ),
    [selectedGroup]
  );
  const products = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerProduct")
        .filter((elem) => selectedFood.includes(elem["DinnerFood"])),
    [selectedFood]
  );

  const hiddenProducts = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerProduct")
        .filter((elem) =>
          hiddenFoods.map((elem1) => elem1.name).includes(elem["DinnerFood"])
        ),
    [hiddenFoods]
  );

  const hiddenGroups = useMemo(
    () =>
      Array.from(new Set(hiddenFoods.map((elem) => elem["DinnerGroup"]))).map(
        (elem) => group.find((elem1) => elem1["name"] === elem)
      ),
    [hiddenFoods]
  );
  if (!question || !question_b || !question_c) return <></>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Divider
          orientation="left"
          style={{ wordBreak: "normal", whiteSpace: "normal" }}
        >
          {step === 'group' ? 
          (question[
            `label::${
              lang === "ENG" ? "English" : lang === "TJK" ? "Tajik" : "Uzbek"
            }`
          ] || "") : step === "food" ?   (question_b[
            `label::${
              lang === "ENG" ? "English" : lang === "TJK" ? "Tajik" : "Uzbek"
            }`
          ] || "") :   (question_c[
            `label::${
              lang === "ENG" ? "English" : lang === "TJK" ? "Tajik" : "Uzbek"
            }`
          ] || "")
        }
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
          <NewStep
            allprevData={group}
            prevData={selectedGroup}
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
          <LastStep
            hiddenGroups={hiddenGroups}
            hiddenFoods={hiddenFoods}
            hiddenProducts={hiddenProducts}
            allprevData={foods}
            lang={lang}
            prevData={selectedFood}
            // title={
            //   questionforProduct[
            //     `label::${
            //       lang === "ENG"
            //         ? "English"
            //         : lang === "TJK"
            //         ? "Tajik"
            //         : "Uzbek"
            //     }`
            //   ]
            // }
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
            loading={loading}
            disabled={loading}
            onClick={async () => {
              const user = JSON.parse(localStorage.getItem("user") || "");
              if (step === "group") setStep("food");
              if (step === "food") setStep("product");
              if (step === "product") {
                setCategory(dinnercategory(seletedProduct));
                setLoading(true);
                await categoryApi
                  .insert({
                    ...concatCategory(category, dinnercategory(seletedProduct)),
                    userId: user.id,
                    date: Date.now(),
                  })
                  .then(() => {
                    setLoading(false);
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

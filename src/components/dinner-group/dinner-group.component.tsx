import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider } from "antd";

import { dinnercategory } from "../../utils/dinnercategory";
import {
  CategoryContext,
  concatCategory,
  defaultCategory,
} from "../../provider/CategoryProvider";
import { categoryApi } from "../../api/category";
import { Type } from "../breakfast-group/breakfast-group.component";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";
import { GroupStep } from "../steps/group-step/group-step.component";
import { FoodStep } from "../steps/food-step/food-step.component";
import { ProductStep } from "../steps/product-step/product-step.component";

import data from "../../../BoboshkaNutrishion.json";
import styles from "./dinner-group.style.module.css";

export const DinnerGroup = () => {
  // ---------------------------------------------------------------------------
  // Variables
  // ---------------------------------------------------------------------------

  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);
  const [selectedFood, setSelectedFood] = useState<string[]>([]);
  const [seletedProduct, setSelectedProduct] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { setCategory, category } = useContext(CategoryContext);
  const { lang } = useContext(NavBarContext);
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  // Questions
  // ---------------------------------------------------------------------------

  const questionForGroup = data["survey"].find(
    (elem) => elem.name === "group_ub6cg02"
  );
  const questionForFood = data["survey"].find(
    (elem) => elem.name === "group_ub6cg02b"
  );
  const questionForProduct = data["survey"].find(
    (elem) => elem.name === "group_ub6cg02c"
  );

  // ---------------------------------------------------------------------------
  // Titles
  // ---------------------------------------------------------------------------

  const groupTitle = data["survey"].find(
    (elem) => elem.type === "select_multiple DinnerGroup"
  ) as Type;
  const foodTitle = data["survey"].find(
    (elem) => elem.type === "select_multiple DinnerFood"
  ) as Type;

  // ---------------------------------------------------------------------------
  // Group, Food, Product list
  // ---------------------------------------------------------------------------

  const dinnerGroupList = data["choices"].filter(
    (elem) => elem.list_name === "DinnerGroup"
  );
  const dinnerFoodList = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerFood")
        .filter(
          (food) =>
            selectedGroup.includes(food["DinnerGroup"]) &&
            data["choices"]
              .filter((elem) => elem.list_name === "DinnerProduct")
              .filter((product) => food["name"] === product["DinnerFood"])
              .length > 1
        ),
    [selectedGroup]
  );
  const dinnerProductList = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerProduct")
        .filter((product) => selectedFood.includes(product["DinnerFood"])),
    [selectedFood]
  );

  // ---------------------------------------------------------------------------
  // Hidden Food, Group, Product
  // ---------------------------------------------------------------------------

  const hiddenFoods = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerFood")
        .filter(
          (food) =>
            selectedGroup.includes(food["DinnerGroup"]) &&
            data["choices"]
              .filter((elem) => elem.list_name === "DinnerProduct")
              .filter((product) => food["name"] === product["DinnerFood"])
              .length <= 1
        ),
    [selectedGroup]
  );

  const hiddenProducts = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "DinnerProduct")
        .filter((product) =>
          hiddenFoods.map((food) => food.name).includes(product["DinnerFood"])
        ),
    [hiddenFoods]
  );

  const hiddenGroups = useMemo(
    () =>
      Array.from(new Set(hiddenFoods.map((food) => food["DinnerGroup"]))).map(
        (food) => dinnerGroupList.find((group) => group["name"] === food)
      ),
    [hiddenFoods]
  );

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function prevButtonClick() {
    if (step === "food") setStep("group");
    if (step === "product") {
      setStep("food");
    }
  }

  async function nextButtonClick() {
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
      setCategory(defaultCategory);
    }
  }

  if (!questionForGroup || !questionForFood || !questionForProduct)
    return <></>;

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* --------------------------------------------------------------------------- */}
        {/* QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}
        <Divider
          orientation="left"
          style={{ wordBreak: "normal", whiteSpace: "normal" }}
        >
          {step === "group"
            ? questionForGroup[
                `label::${
                  lang === "ENG"
                    ? "English"
                    : lang === "TJK"
                    ? "Tajik"
                    : "Uzbek"
                }`
              ] || ""
            : step === "food"
            ? questionForFood[
                `label::${
                  lang === "ENG"
                    ? "English"
                    : lang === "TJK"
                    ? "Tajik"
                    : "Uzbek"
                }`
              ] || ""
            : questionForProduct[
                `label::${
                  lang === "ENG"
                    ? "English"
                    : lang === "TJK"
                    ? "Tajik"
                    : "Uzbek"
                }`
              ] || ""}
        </Divider>

        {/* --------------------------------------------------------------------------- */}
        {/* GROUP QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}
        {step === "group" && (
          <GroupStep
            lang={lang}
            groupTitle={
              groupTitle[
                `label::${
                  lang === "ENG"
                    ? "English"
                    : lang === "TJK"
                    ? "Tajik"
                    : "Uzbek"
                }`
              ]
            }
            groupList={dinnerGroupList}
            selectedGroups={selectedGroup}
            setSelectedGroups={setSelectedGroup}
          />
        )}

        {/* --------------------------------------------------------------------------- */}
        {/* FOOD QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}

        {step === "food" && (
          <FoodStep
            groupList={dinnerGroupList}
            selectedGroups={selectedGroup}
            lang={lang}
            foodTitle={
              foodTitle[
                `label::${
                  lang === "ENG"
                    ? "English"
                    : lang === "TJK"
                    ? "Tajik"
                    : "Uzbek"
                }`
              ]
            }
            foodList={dinnerFoodList}
            selectedFoods={selectedFood}
            setSelectedFoods={setSelectedFood}
          />
        )}

        {/* --------------------------------------------------------------------------- */}
        {/* PRODUCT QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}

        {step === "product" && (
          <ProductStep
            hiddenGroups={hiddenGroups}
            hiddenFoods={hiddenFoods}
            hiddenProducts={hiddenProducts}
            foodList={dinnerFoodList}
            selectedFoods={selectedFood}
            lang={lang}
            productList={dinnerProductList}
            selectedProducts={seletedProduct}
            setSelectedProducts={setSelectedProduct}
          />
        )}
        {/* --------------------------------------------------------------------------- */}
        {/* ACTIONS  */}
        {/* --------------------------------------------------------------------------- */}

        <div className={styles.btnWrapper}>
          {/* --------------------------------------------------------------------------- */}
          {/* PREVIOS BUTTON */}
          {/* --------------------------------------------------------------------------- */}

          <div>
            {step !== "group" && (
              <Button hidden type="primary" onClick={prevButtonClick}>
                {language["previos"][lang]}
              </Button>
            )}
          </div>

          {/* --------------------------------------------------------------------------- */}
          {/* NEXT BUTTON */}
          {/* --------------------------------------------------------------------------- */}

          <Button
            type="primary"
            loading={loading}
            disabled={loading}
            onClick={nextButtonClick}
          >
            {language["next"][lang]}
          </Button>
        </div>
      </div>
    </div>
  );
};

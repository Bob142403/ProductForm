import { Button, Divider } from "antd";
import data from "../../../BoboshkaNutrishion.json";
import styles from "./breakfast-group.style.module.css";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { breakfastcategory } from "../../utils/breakfastcategory";
import { CategoryContext } from "../../provider/CategoryProvider";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";
import { GroupStep } from "../steps/group-step/group-step.component";
import { FoodStep } from "../steps/food-step/food-step.component";
import { ProductStep } from "../steps/product-step/product-step.component";

export interface Type {
  name: string;
  "label::English": string;
  "label::Tajik": string;
  "label::Uzbek": string;
  BreakfastGroup?: string;
  Food?: string;
  LunchGroup?: string;
  LunchFood?: string;
  DinnerFood?: string;
  DinnerGroup?: string;
}

export const BreakfastGroup = () => {
  // ---------------------------------------------------------------------------
  // Variables
  // ---------------------------------------------------------------------------

  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [seletedProducts, setSelectedProducts] = useState<string[]>([]);

  const navigate = useNavigate();
  const { setCategory } = useContext(CategoryContext);
  const { lang } = useContext(NavBarContext);

  // ---------------------------------------------------------------------------
  // Questions
  // ---------------------------------------------------------------------------

  const questionForGroup = data["survey"].find(
    (elem) => elem.name === "group_xg79k42"
  );
  const questionForFood = data["survey"].find(
    (elem) => elem.name === "group_xg79k42b"
  );
  const questionForProduct = data["survey"].find(
    (elem) => elem.name === "group_xg79k42c"
  );

  // ---------------------------------------------------------------------------
  // Titles
  // ---------------------------------------------------------------------------

  const groupTitle = data["survey"].find(
    (elem) => elem.type === "select_multiple BreakfastGroup"
  ) as Type;
  const foodTitle = data["survey"].find(
    (elem) => elem.type === "select_multiple Food"
  ) as Type;

  // ---------------------------------------------------------------------------
  // Food, Group, Product list
  // ---------------------------------------------------------------------------

  const breakfastGroupList = data["choices"].filter(
    (elem) => elem.list_name === "BreakfastGroup"
  );
  const breakFastFoodList = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "Food")
        .filter(
          (food) =>
            selectedGroups.includes(food["BreakfastGroup"]) &&
            data["choices"]
              .filter((elem) => elem.list_name === "Product")
              .filter((product) => food["name"] === product["Food"]).length > 1
        ),
    [selectedGroups]
  );
  const breakFastProductList = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "Product")
        .filter((product) => selectedFoods.includes(product["Food"])),
    [selectedFoods]
  );

  // ---------------------------------------------------------------------------
  // Hidden Food, Group, Product
  // ---------------------------------------------------------------------------

  const hiddenFoods = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "Food")
        .filter(
          (food) =>
            selectedGroups.includes(food["BreakfastGroup"]) &&
            data["choices"]
              .filter((elem) => elem.list_name === "Product")
              .filter((product) => food["name"] === product["Food"]).length <= 1
        ),
    [selectedGroups]
  );
  const hiddenProducts = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "Product")
        .filter((product) =>
          hiddenFoods.map((food) => food.name).includes(product["Food"])
        ),
    [hiddenFoods]
  );
  const hiddenGroups = useMemo(
    () =>
      Array.from(
        new Set(hiddenFoods.map((food) => food["BreakfastGroup"]))
      ).map((food) =>
        breakfastGroupList.find((group) => group["name"] === food)
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

  function nextButtonClick() {
    if (step === "group") setStep("food");
    if (step === "food") setStep("product");
    if (step === "product") {
      setCategory(breakfastcategory(seletedProducts));
      navigate("/lunch");
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
            lang={lang}
            groupList={breakfastGroupList}
            selectedGroups={selectedGroups}
            setSelectedGroups={setSelectedGroups}
          />
        )}

        {/* --------------------------------------------------------------------------- */}
        {/* FOOD QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}

        {step === "food" && (
          <FoodStep
            groupList={breakfastGroupList}
            selectedGroups={selectedGroups}
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
            lang={lang}
            foodList={breakFastFoodList}
            selectedFoods={selectedFoods}
            setSelectedFoods={setSelectedFoods}
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
            foodList={breakFastFoodList}
            selectedFoods={selectedFoods}
            lang={lang}
            productList={breakFastProductList}
            selectedProducts={seletedProducts}
            setSelectedProducts={setSelectedProducts}
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

          <Button type="primary" onClick={nextButtonClick}>
            {language["next"][lang]}
          </Button>
        </div>
      </div>
    </div>
  );
};

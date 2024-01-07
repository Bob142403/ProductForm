import { Button, Divider } from "antd";
import data from "../../../BoboshkaNutrishion.json";
import styles from "./lunch-group.style.module.css";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { lunchCategory } from "../../utils/lunchcategory";
import { CategoryContext } from "../../provider/CategoryProvider";
import { Type } from "../breakfast-group/breakfast-group.component";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";
import { GroupStep } from "../steps/group-step/group-step.component";
import { FoodStep } from "../steps/food-step/food-step.component";
import { ProductStep } from "../steps/product-step/product-step.component";

export const LunchGroup = () => {
  // ---------------------------------------------------------------------------
  // Variables
  // ---------------------------------------------------------------------------
  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [seletedProducts, setSelectedProduct] = useState<string[]>([]);

  const { setCategory } = useContext(CategoryContext);
  const { lang } = useContext(NavBarContext);
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  // Questions
  // ---------------------------------------------------------------------------

  const questionForGroup = data["survey"].find(
    (elem) => elem.name === "group_ou0gs78"
  );
  const questionForFood = data["survey"].find(
    (elem) => elem.name === "group_ou0gs78b"
  );
  const questionForProduct = data["survey"].find(
    (elem) => elem.name === "group_ou0gs78c"
  );

  // ---------------------------------------------------------------------------
  // Titles
  // ---------------------------------------------------------------------------

  const groupTitle = data["survey"].find(
    (elem) => elem.type === "select_multiple LunchGroup"
  ) as Type;
  const foodTitle = data["survey"].find(
    (elem) => elem.type === "select_multiple LunchFood"
  ) as Type;

  // ---------------------------------------------------------------------------
  // Food, Group, Product list
  // ---------------------------------------------------------------------------

  const lunchGroupList = data["choices"].filter(
    (elem) => elem.list_name === "LunchGroup"
  );
  const lunchFoodList = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "LunchFood")
        .filter(
          (food) =>
            selectedGroups.includes(food["LunchGroup"]) &&
            data["choices"]
              .filter((elem) => elem.list_name === "LunchProduct")
              .filter((product) => food["name"] === product["LunchFood"])
              .length > 1
        ),
    [selectedGroups]
  );
  const lunchProductList = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "LunchProduct")
        .filter((product) => selectedFoods.includes(product["LunchFood"])),
    [selectedFoods]
  );

  // ---------------------------------------------------------------------------
  // Hidden Food, Group, Product
  // ---------------------------------------------------------------------------

  const hiddenFoods = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "LunchFood")
        .filter(
          (food) =>
            selectedGroups.includes(food["LunchGroup"]) &&
            data["choices"]
              .filter((elem) => elem.list_name === "LunchProduct")
              .filter((product) => food["name"] === product["LunchFood"])
              .length <= 1
        ),
    [selectedGroups]
  );
  const hiddenProducts = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "LunchProduct")
        .filter((product) =>
          hiddenFoods.map((food) => food.name).includes(product["LunchFood"])
        ),
    [hiddenFoods]
  );
  const hiddenGroups = useMemo(
    () =>
      Array.from(new Set(hiddenFoods.map((food) => food["LunchGroup"]))).map(
        (food) => lunchGroupList.find((group) => group["name"] === food)
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
      setCategory(lunchCategory(seletedProducts));
      navigate("/dinner");
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
            groupList={lunchGroupList}
            selectedGroups={selectedGroups}
            setSelectedGroups={setSelectedGroups}
          />
        )}

        {/* --------------------------------------------------------------------------- */}
        {/* FOOD QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}

        {step === "food" && (
          <FoodStep
            groupList={lunchGroupList}
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
            foodList={lunchFoodList}
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
            foodList={lunchFoodList}
            selectedFoods={selectedFoods}
            lang={lang}
            productList={lunchProductList}
            selectedProducts={seletedProducts}
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

          <Button type="primary" onClick={nextButtonClick}>
            {language["next"][lang]}
          </Button>
        </div>
      </div>
    </div>
  );
};

import { Button, Checkbox, Divider, List, Typography } from "antd";
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
  BreakfastGroup?: string;
  Food?: string;
  LunchGroup?: string;
  LunchFood?: string;
  DinnerFood?: string;
  DinnerGroup?: string;
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
export const NewStep = ({
  title,
  selected,
  setSelected,
  list,
  lang,
  prevData,
  allprevData,
}: {
  title?: string;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  list: Type[];
  lang: string;
  prevData: string[];
  allprevData: any[];
}) => {
  return (
    <div className={styles.firstQuestion}>
      <Title level={5} style={{ marginTop: "0" }}>
        {title}
      </Title>
      <div className={styles.checkboxList}>
        {prevData.map((elem, index) => (
          <>
            {list.filter(
              (lis) =>
                elem === lis["BreakfastGroup"] ||
                elem === lis["Food"] ||
                elem === lis["LunchGroup"] ||
                elem === lis["LunchFood"] ||
                elem === lis["DinnerGroup"] ||
                elem === lis["DinnerFood"]
            ).length > 0 && (
              <List
                key={index}
                header={
                  <Title style={{ margin: 0 }} level={5}>
                    {
                      allprevData.find((prev) => prev.name === elem)[
                        `label::${
                          lang === "ENG"
                            ? "English"
                            : lang === "TJK"
                            ? "Tajik"
                            : "Uzbek"
                        }`
                      ]
                    }
                  </Title>
                }
                bordered
                dataSource={list.filter(
                  (lis) =>
                    elem === lis["BreakfastGroup"] ||
                    elem === lis["Food"] ||
                    elem === lis["LunchGroup"] ||
                    elem === lis["LunchFood"] ||
                    elem === lis["DinnerGroup"] ||
                    elem === lis["DinnerFood"]
                )}
                renderItem={(select, index) => (
                  <List.Item>
                    <Checkbox
                      style={{ width: "100%" }}
                      key={index}
                      checked={selected.includes(select["name"])}
                      onChange={(e: CheckboxChangeEvent) => {
                        if (e.target.checked)
                          setSelected((prev) => [...prev, select["name"]]);
                        else
                          setSelected(
                            selected.filter((elem) => elem !== select["name"])
                          );
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
                  </List.Item>
                )}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export const LastStep = ({
  title,
  selected,
  setSelected,
  list,
  lang,
  prevData,
  allprevData,
  hiddenFoods,
  hiddenProducts,
  hiddenGroups,
}: {
  title?: string;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  list: Type[];
  lang: string;
  prevData: string[];
  allprevData: any[];
  hiddenFoods: any[];
  hiddenProducts: any[];
  hiddenGroups: any[];
}) => {
  console.log("list: ", list);
  return (
    <div className={styles.firstQuestion}>
      <Title level={5} style={{ marginTop: "0" }}>
        {title}
      </Title>
      <div className={styles.checkboxList}>
        {prevData.map((elem, index) => (
          <List
            key={index}
            header={
              <Title style={{ margin: 0 }} level={5}>
                {
                  allprevData.find((prev) => prev.name === elem)[
                    `label::${
                      lang === "ENG"
                        ? "English"
                        : lang === "TJK"
                        ? "Tajik"
                        : "Uzbek"
                    }`
                  ]
                }
              </Title>
            }
            bordered
            dataSource={list.filter(
              (lis) =>
                elem === lis["BreakfastGroup"] ||
                elem === lis["Food"] ||
                elem === lis["LunchGroup"] ||
                elem === lis["LunchFood"] ||
                elem === lis["DinnerGroup"] ||
                elem === lis["DinnerFood"]
            )}
            renderItem={(select, index) => (
              <List.Item>
                <Checkbox
                  style={{ width: "100%" }}
                  key={index}
                  checked={selected.includes(select["name"])}
                  onChange={(e: CheckboxChangeEvent) => {
                    if (e.target.checked)
                      setSelected((prev) => [...prev, select["name"]]);
                    else
                      setSelected(
                        selected.filter((elem) => elem !== select["name"])
                      );
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
              </List.Item>
            )}
          />
        ))}
        {hiddenGroups.map((group, index) => (
          <List
            key={index}
            header={
              <Title style={{ margin: 0 }} level={5}>
                {
                  group[
                    `label::${
                      lang === "ENG"
                        ? "English"
                        : lang === "TJK"
                        ? "Tajik"
                        : "Uzbek"
                    }`
                  ]
                }
              </Title>
            }
            bordered
            dataSource={[
              ...hiddenProducts.filter((product) =>
                hiddenFoods.find(
                  (food) =>
                    food["name"] ===
                      (product["Food"] ||
                        product["LunchFood"] ||
                        product["DinnerFood"]) &&
                    (food["BreakfastGroup"] ||
                      food["LunchGroup"] ||
                      food["DinnerGroup"]) === group.name
                )
              ),
            ]}
            renderItem={(select, index) => (
              <List.Item>
                <Checkbox
                  style={{ width: "100%" }}
                  key={index}
                  checked={selected.includes(select["name"])}
                  onChange={(e: CheckboxChangeEvent) => {
                    if (e.target.checked)
                      setSelected((prev) => [...prev, select["name"]]);
                    else
                      setSelected(
                        selected.filter((elem) => elem !== select["name"])
                      );
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
              </List.Item>
            )}
          />
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

  const question_b = data["survey"].find((elem) => elem.name === "group_xg79k42b");
  const questionforFood = data["survey"].find(
    (elem) => elem.type === "select_multiple Food"
  ) as Type;
  const question_c = data["survey"].find((elem) => elem.name === "group_xg79k42c");
  // const questionforProduct = data["survey"].find(
  //   (elem) => elem.type === "select_multiple Product"
  // ) as Type;

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
        .filter(
          (elem) =>
            selectedGroup.includes(elem["BreakfastGroup"]) &&
            data["choices"]
              .filter((elem2) => elem2.list_name === "Product")
              .filter((elem1) => elem["name"] === elem1["Food"]).length > 1
        ),
    [selectedGroup]
  );
  const hiddenFoods = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "Food")
        .filter(
          (elem) =>
            selectedGroup.includes(elem["BreakfastGroup"]) &&
            data["choices"]
              .filter((elem2) => elem2.list_name === "Product")
              .filter((elem1) => elem["name"] === elem1["Food"]).length <= 1
        ),
    [selectedGroup]
  );
  const products = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "Product")
        .filter((elem) => selectedFood.includes(elem["Food"])),
    [selectedFood]
  );
  const hiddenProducts = useMemo(
    () =>
      data["choices"]
        .filter((elem) => elem.list_name === "Product")
        .filter((elem) =>
          hiddenFoods.map((elem1) => elem1.name).includes(elem["Food"])
        ),
    [hiddenFoods]
  );
  const hiddenGroups = useMemo(
    () =>
      Array.from(
        new Set(hiddenFoods.map((elem) => elem["BreakfastGroup"]))
      ).map((elem) => breakfastGroup.find((elem1) => elem1["name"] === elem)),
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
          <NewStep
            allprevData={breakfastGroup}
            prevData={selectedGroup}
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
          <LastStep
            hiddenGroups={hiddenGroups}
            hiddenFoods={hiddenFoods}
            hiddenProducts={hiddenProducts}
            allprevData={foods}
            prevData={selectedFood}
            lang={lang}
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

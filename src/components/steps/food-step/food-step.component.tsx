import { Fragment } from "react";
import { Checkbox, List, Typography } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

import { Type } from "../../breakfast-group/breakfast-group.component";

import styles from "./food-step.style.module.css";

const { Title } = Typography;

export const FoodStep = ({
  foodTitle,
  selectedFoods,
  setSelectedFoods,
  foodList,
  lang,
  selectedGroups,
  groupList,
}: {
  foodTitle: string;
  selectedFoods: string[];
  setSelectedFoods: React.Dispatch<React.SetStateAction<string[]>>;
  foodList: Type[];
  lang: string;
  selectedGroups: string[];
  groupList: any[];
}) => {
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.firstQuestion}>
      {/* --------------------------------------------------------------------------- */}
      {/* TITLE */}
      {/* --------------------------------------------------------------------------- */}
      <Title level={5} style={{ marginTop: "0" }}>
        {foodTitle}
      </Title>

      {/* --------------------------------------------------------------------------- */}
      {/* FOOD LIST */}
      {/* --------------------------------------------------------------------------- */}

      <div className={styles.checkboxList}>
        {selectedGroups.map((group, index) => (
          <Fragment key={index}>
            {foodList.filter(
              (food) =>
                group === food["BreakfastGroup"] ||
                group === food["Food"] ||
                group === food["LunchGroup"] ||
                group === food["LunchFood"] ||
                group === food["DinnerGroup"] ||
                group === food["DinnerFood"]
            ).length > 0 && (
              <List
                header={
                  <Title style={{ margin: 0 }} level={5}>
                    {
                      groupList.find((prev) => prev.name === group)[
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
                dataSource={foodList.filter(
                  (food) =>
                    group === food["BreakfastGroup"] ||
                    group === food["Food"] ||
                    group === food["LunchGroup"] ||
                    group === food["LunchFood"] ||
                    group === food["DinnerGroup"] ||
                    group === food["DinnerFood"]
                )}
                renderItem={(select, index) => (
                  <List.Item>
                    {/* --------------------------------------------------------------------------- */}
                    {/* FOOD */}
                    {/* --------------------------------------------------------------------------- */}

                    <Checkbox
                      style={{ width: "100%" }}
                      key={index}
                      checked={selectedFoods.includes(select["name"])}
                      onChange={(e: CheckboxChangeEvent) => {
                        const isFoodChecked = e.target.checked;

                        if (isFoodChecked)
                          setSelectedFoods((prev) => [...prev, select["name"]]);
                        else
                          setSelectedFoods(
                            selectedFoods.filter(
                              (elem) => elem !== select["name"]
                            )
                          );
                      }}
                    >
                      {/* --------------------------------------------------------------------------- */}
                      {/* FOOD NAME */}
                      {/* --------------------------------------------------------------------------- */}

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
          </Fragment>
        ))}
      </div>
    </div>
  );
};

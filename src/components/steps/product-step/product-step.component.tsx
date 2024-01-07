import { Typography, List, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

import { Type } from "../../breakfast-group/breakfast-group.component";
import styles from "./product-step.style.module.css";

const { Title } = Typography;
export const ProductStep = ({
  productTitle,
  selectedProducts,
  setSelectedProducts,
  productList,
  lang,
  selectedFoods,
  foodList,
  hiddenFoods,
  hiddenProducts,
  hiddenGroups,
}: {
  productTitle?: string;
  selectedProducts: string[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<string[]>>;
  productList: Type[];
  lang: string;
  selectedFoods: string[];
  foodList: any[];
  hiddenFoods: any[];
  hiddenProducts: any[];
  hiddenGroups: any[];
}) => {
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.firstQuestion}>
      {/* --------------------------------------------------------------------------- */}
      {/* PRODUCT TITLE */}
      {/* --------------------------------------------------------------------------- */}

      <Title level={5} style={{ marginTop: "0" }}>
        {productTitle}
      </Title>

      {/* --------------------------------------------------------------------------- */}
      {/* PRODUCT LIST */}
      {/* --------------------------------------------------------------------------- */}

      <div className={styles.checkboxList}>
        {/* --------------------------------------------------------------------------- */}
        {/* FOOD PRDUCT THAT HAVE 2 AND MORE PRODUCT  */}
        {/* --------------------------------------------------------------------------- */}

        {selectedFoods.map((food, index) => (
          <List
            key={index}
            header={
              <Title style={{ margin: 0 }} level={5}>
                {
                  foodList.find((prev) => prev.name === food)[
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
            dataSource={productList.filter(
              (product) =>
                food === product["BreakfastGroup"] ||
                food === product["Food"] ||
                food === product["LunchGroup"] ||
                food === product["LunchFood"] ||
                food === product["DinnerGroup"] ||
                food === product["DinnerFood"]
            )}
            renderItem={(product, index) => (
              <List.Item>
                <Checkbox
                  style={{ width: "100%" }}
                  key={index}
                  checked={selectedProducts.includes(product["name"])}
                  onChange={(e: CheckboxChangeEvent) => {
                    const isProductChecked = e.target.checked;

                    if (isProductChecked)
                      setSelectedProducts((prev) => [...prev, product["name"]]);
                    else
                      setSelectedProducts(
                        selectedProducts.filter(
                          (elem) => elem !== product["name"]
                        )
                      );
                  }}
                >
                  {/* --------------------------------------------------------------------------- */}
                  {/* PRODUCT NAME */}
                  {/* --------------------------------------------------------------------------- */}
                  {
                    product[
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

        {/* --------------------------------------------------------------------------- */}
        {/* FOOD PRDUCT THAT HAVE 1 PRODUCT */}
        {/* --------------------------------------------------------------------------- */}

        {hiddenGroups.map((group, index) => (
          <List
            key={index}
            header={
              <Title style={{ margin: 0 }} level={5}>
                {/* --------------------------------------------------------------------------- */}
                {/* GROUP NAME */}
                {/* --------------------------------------------------------------------------- */}
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
            renderItem={(product, index) => (
              <List.Item>
                <Checkbox
                  style={{ width: "100%" }}
                  key={index}
                  checked={selectedProducts.includes(product["name"])}
                  onChange={(e: CheckboxChangeEvent) => {
                    const isProductChecked = e.target.checked;

                    if (isProductChecked)
                      setSelectedProducts((prev) => [...prev, product["name"]]);
                    else
                      setSelectedProducts(
                        selectedProducts.filter(
                          (elem) => elem !== product["name"]
                        )
                      );
                  }}
                >
                  {/* --------------------------------------------------------------------------- */}
                  {/* HIDDEN PRODUCT NAME */}
                  {/* --------------------------------------------------------------------------- */}
                  {
                    product[
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

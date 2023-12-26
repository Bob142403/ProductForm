import { Category } from "../types/Category";
import data from "../../xlsx_Nutrition.json";
import data1 from "../../CategorNutr.json";

export const helpMessage = (category: Category, lang: string) => {
  const nameGroup =
    lang === "ENG"
      ? "Name_of_group"
      : lang === "TJK"
      ? "Name_of_10_group_tj"
      : "Name_of_10_group_uz";
  const productName =
    lang === "ENG"
      ? "Products"
      : lang === "TJK"
      ? "Products_tj"
      : "Products_uz";

  const for1Category =
    category.group1 === 0
      ? `${data[1][nameGroup]}: ${data[0][productName]}`
      : "";
  const for2Category =
    category.group2 === 0 && `${data[1][nameGroup]}: ${data[1][productName]}`;
  const for3Category =
    category.group3 === 0 && `${data[2][nameGroup]}: ${data[2][productName]}`;
  const for4Category =
    category.group4 === 0 && `${data[3][nameGroup]}: ${data[3][productName]}`;
  const for5Category =
    category.group5 === 0 && `${data[4][nameGroup]}: ${data[4][productName]}`;
  const for6Category =
    category.group6 === 0 && `${data[5][nameGroup]}: ${data[5][productName]}`;
  const for7Category =
    category.group7 === 0 && `${data[6][nameGroup]}: ${data[6][productName]}`;
  const for8Category =
    category.group8 === 0 && `${data[7][nameGroup]}: ${data[7][productName]}`;
  const for9Category =
    category.group9 === 0 && `${data[8][nameGroup]}: ${data[8][productName]}`;
  const for10Category =
    category.group10 === 0 && `${data[9][nameGroup]}: ${data[9][productName]}`;
  // const for11Category =
  //   category.group11 === 0 &&
  //   `${data[10][nameGroup]}: ${data[10][productName]}`;
  // const for12Category =
  //   category.group12 === 0 &&
  //   `${data[11][nameGroup]}: ${data[11][productName]}`;
  // const for13Category =
  //   category.group13 === 0 &&
  //   `${data[12][nameGroup]}: ${data[12][productName]}`;
  return [
    for1Category,
    for2Category,
    for3Category,
    for4Category,
    for5Category,
    for6Category,
    for7Category,
    for8Category,
    for9Category,
    for10Category,
    // for11Category,
    // for12Category,
    // for13Category,
  ];
};

export const helpMessage2 = (category: Category, lang: string) => {
  const nameGroup =
    lang === "ENG" ? "en_profit" : lang === "TJK" ? "tj_profit" : "uz_profit";
  // const productName =
  //   lang === "ENG"
  //     ? "Products"
  //     : lang === "TJK"
  //     ? "Products_tj"
  //     : "Products_uz";
  const for1Category = category.group1 === 0 ? `1: ${data1[1][nameGroup]}` : "";
  const for2Category = category.group2 === 0 && `2: ${data1[2][nameGroup]}`;
  const for3Category = category.group3 === 0 && `3: ${data1[3][nameGroup]}`;
  const for4Category = category.group4 === 0 && `4: ${data1[4][nameGroup]}`;
  const for5Category = category.group5 === 0 && `5: ${data1[5][nameGroup]}`;
  const for6Category = category.group6 === 0 && `6: ${data1[6][nameGroup]}`;
  const for7Category = category.group7 === 0 && `7: ${data1[7][nameGroup]}`;
  const for8Category = category.group8 === 0 && `8: ${data1[8][nameGroup]}`;
  const for9Category = category.group9 === 0 && `9: ${data1[9][nameGroup]}`;
  const for10Category = category.group10 === 0 && `10: ${data1[10][nameGroup]}`;
  // const for11Category =
  //   category.group11 === 0 &&
  //   `${data[10][nameGroup]}: ${data[10][productName]}`;
  // const for12Category =
  //   category.group12 === 0 &&
  //   `${data[11][nameGroup]}: ${data[11][productName]}`;
  // const for13Category =
  //   category.group13 === 0 &&
  //   `${data[12][nameGroup]}: ${data[12][productName]}`;
  return [
    for1Category,
    for2Category,
    for3Category,
    for4Category,
    for5Category,
    for6Category,
    for7Category,
    for8Category,
    for9Category,
    for10Category,
    // for11Category,
    // for12Category,
    // for13Category,
  ];
};

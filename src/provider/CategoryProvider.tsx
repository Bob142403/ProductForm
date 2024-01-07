import React, { createContext, useState } from "react";
import { Category } from "../types/Category";

export const defaultCategory = {
  group1: 0,
  group2: 0,
  group3: 0,
  group4: 0,
  group5: 0,
  group6: 0,
  group7: 0,
  group8: 0,
  group9: 0,
  group10: 0,
  group11: 0,
  group12: 0,
  group13: 0,
};

export const concatCategory = (
  category: Category,
  newCategory: Category
): Category => {
  const news = newCategory;
  news.group1 += category.group1;
  news.group2 += category.group2;
  news.group3 += category.group3;
  news.group4 += category.group4;
  news.group5 += category.group5;
  news.group6 += category.group6;
  news.group7 += category.group7;
  news.group8 += category.group8;
  news.group9 += category.group9;
  news.group10 += category.group10;
  news.group11 += category.group11;
  news.group12 += category.group12;
  news.group13 += category.group13;
  return news;
};

export const CategoryContext = createContext<{
  category: Category;
  setCategory: (newCategory: Category) => void;
}>({
  category: defaultCategory,
  setCategory() {},
});

export const CategoryProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [category, setCategory] = useState<Category>(defaultCategory);

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory: (newCategory: Category) => {
          setCategory(concatCategory(category, newCategory));
        },
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

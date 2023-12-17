import { request } from "./fetch/request";

const baseURL = "http://localhost:5001/category";

export const categoryApi = {
  insert: async (category: any) =>
    await request(baseURL + "/insert", {
      method: "POST",
      body: JSON.stringify(category),
    }),

  getCategory: async (userId: string) =>
    await request(baseURL + `/get/${userId}`).then((res) => res.json()),
};

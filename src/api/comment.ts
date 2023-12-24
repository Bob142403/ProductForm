import { request } from "./fetch/request";

const baseURL = "https://dait-f.onrender.com/comment";

export const commentApi = {
  insert: async (category: any) =>
    await request(baseURL + "/insert", {
      method: "POST",
      body: JSON.stringify(category),
    }),

  getComments: async () =>
    await request(baseURL + `/getAll`).then((res) => res.json()),
};

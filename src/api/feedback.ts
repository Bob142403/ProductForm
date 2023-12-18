import { request } from "./fetch/request";

const baseURL = "https://dait-f.onrender.com/feedback";

export const feedbackApi = {
  insert: async (feedback: any) =>
    await request(baseURL + "/insert", {
      method: "POST",
      body: JSON.stringify(feedback),
    }),
};

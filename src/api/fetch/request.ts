export const request = (url: string, options?: RequestInit) =>
  fetch(url, {
    ...options,
    headers: {
      Authorization: localStorage.getItem("token") || "",
      "Content-type": "application/json",
    },
  });

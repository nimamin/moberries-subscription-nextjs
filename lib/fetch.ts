import { subscriptionDTO } from "./types";

export const fetchPrices = async () => {
    const res = await fetch(
        "https://cloud-storage-prices-moberries.herokuapp.com/prices"
    );

    const data = await res.json();

    return data;
}

export const postData = async (data: subscriptionDTO) => {
  const rawResponse = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const content = await rawResponse.json();

  console.log({ content });
};
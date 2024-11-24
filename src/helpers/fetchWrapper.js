import axios from "axios";
import { Loading } from "quasar";

export const fetch = async (url) => {
  Loading.show({
    spinnerSize: 50,
  });

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from the API.");
  } finally {
    Loading.hide();
  }
};

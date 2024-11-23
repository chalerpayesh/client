import axios from "axios";

export const fetchData = async (url, limit = 10) => {
  try {
    const response = await axios.get(url);
    return response.data.slice(0, limit);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from the API.");
  }
};

import axios from "axios";
import config from "../config/config";

const listBooks = async (payload) => {
  try {
    const result = await axios.get(
      `${config.domain}?q=${payload}&maxResults=15`
    );
    return result.data;
  } catch (error) {
    return error.message;
  }
};
export default {
  listBooks,
};

import axios from "axios";
import { urls } from "../../config/urls";

import { Patron } from "../../types";

export const getPatrons = async (): Promise<Patron[]> => {
  const { data } = await axios.get(urls.api.getPatrons);
  return data;
};

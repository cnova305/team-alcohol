import axios from "axios";
import { urls } from "../../config/urls";

import { Patron } from "../../types";

export const getPatrons = async (): Promise<Patron[]> => {
  const { data } = await axios.get(urls.api.getPatrons);
  return data;
};

export const getPatron = async (id: string): Promise<Patron> => {
  const { data } = await axios.get(`${urls.api.getPatronById}${id}`);
  return data[0];
};

export const deletePatron = async (id: string) => {
  await axios.delete(`${urls.api.deletePatronById}${id}`);
  return;
};

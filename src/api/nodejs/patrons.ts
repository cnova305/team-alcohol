import axios from "axios";
import { urls } from "../../config/urls";
import { v4 as uuidv4 } from "uuid";

import { Patron } from "../../types";

const generateUID = () => {
  return uuidv4();
};

export const getPatrons = async (): Promise<Patron[]> => {
  const { data } = await axios.get(urls.api.getPatrons);
  return data;
};

export const getPatron = async (id: string): Promise<Patron> => {
  const { data } = await axios.get(`${urls.api.getPatronById}${id}`);
  return data[0];
};

export const postPatron = async (values: object) => {
  const uid = generateUID();
  await axios.post(`${urls.api.addPatron}`, { ...values, id: uid });
  return;
};

export const deletePatron = async (id: string) => {
  await axios.delete(`${urls.api.deletePatronById}${id}`);
  return;
};

import { get } from "../utils/request";

export const getUsers = async () => {
  const result = await get(`users`);
  return result;
};

export const checkLogin = async (email, password) => {
  const result = await get(`users?email=${email}&password=${password}`);
  return result;
};

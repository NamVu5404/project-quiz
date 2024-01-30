import { get, post } from "../utils/request"

export const registerAccount = async (option) => {
  const result = await post(`users`, option);
  return result;
}

export const checkRegister = async (key, value) => {
  const result = await get(`users?${key}=${value}`);
  return result;
}
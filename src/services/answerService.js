import { get } from "../utils/request"

export const getAnswers = async () => {
  const result = await get(`answers`);
  return result;
}
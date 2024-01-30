import { get, patch, post } from "../utils/request"

export const getTopics = async () => {
  const result = await get(`topics`);
  return result;
}

export const getQuestionsTopic = async () => {
  const result = await get(`questions`);
  return result;
}

export const getAnswers = async () => {
  const result = await get(`answers`);
  return result;
}

export const postAnswers = async (option) => {
  const result = await post(`answers`, option);
  return result;
}

export const patchAnswers = async (id, option) => {
  const result = await patch(`answers/${id}`, option);
  return result;
}
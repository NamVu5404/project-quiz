export const isLogin = (status) => {
  return {
    type: "LOGIN",
    status: status,
  }
}

export const createAnswser = (questionId, answer) => {
  return {
    type: "CREATE_ANSWER",
    questionId: questionId,
    answer: answer,
  }
}

export const updateAnswser = (questionId, answer) => {
  return {
    type: "EDIT_ANSWER",
    questionId: questionId,
    answer: answer,
  }
}

export const resetAnswser = () => {
  return {
    type: "RESET_ANSWER",
  }
}

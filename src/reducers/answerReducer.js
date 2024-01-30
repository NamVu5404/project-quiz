const answerReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_ANSWER":
      return [
        ...state, 
        {
          questionId: action.questionId,
          answer: action.answer,
        }
      ]
    case "EDIT_ANSWER":
      return (
        state.map(item => {
          if (item.questionId === action.questionId) {
            return {
              ...item,
              answer: action.answer,
            }
          } else {
            return item;
          }
        })
      )
    case "RESET_ANSWER":
      return [];
    default:
      return state;
  }
}

export default answerReducer;
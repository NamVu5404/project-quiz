export const getResults = (questions, item) => {
  let result = [];
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].correctAnswer === item.answer[i].answer) {
      result.push({
        status: true,
        correctAnswer: questions[i].correctAnswer,
      });
    } else {
      result.push({
        status: false,
        correctAnswer: questions[i].correctAnswer,
        wrongAnswer: item.answer[i].answer,
      });
    }
  }

  return result;
}
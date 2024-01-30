import "./TabResult.scss"
import React, { useEffect, useState } from "react";
import { getAnswers, getQuestionsTopic, getTopics } from "../../../services/topicDetailsService";
import { getResults } from "../../../services/resultService";
import { getCookie } from "../../../utils/request";

function ResultItem(props) {
  const { topicId } = props;
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  const [answers, setAnswers] = useState([]);
  const userId = +getCookie("userId");

  useEffect(() => {
    const fetchApi = async () => {
      const result1 = await getQuestionsTopic();
      setQuestions(result1.filter(item => item.topicId === topicId));

      const result2 = await getTopics();
      setTopics(result2);

      const result3 = await getAnswers();
      setAnswers(result3);
    }
    fetchApi();
  }, [topicId])

  let result, totalCorrectAnswer;
  const index = answers.findIndex(item => (item.userId === userId && item.topicId === topicId));
  if (index !== -1) {
    result = getResults(questions, answers[index]);
    totalCorrectAnswer = result.filter(item => item.status).length;
  }

  const checkResultItem = (index) => {
    if (result) {
      return result[index].status;
    }
  }

  const checkAnswer = (index, indexAnswer) => {
    if (result) {
      if (result[index].status) {
        if (result[index].correctAnswer === indexAnswer) {
          return "result__answer result__answer-correct";
        } else {
          return "result__answer";
        }
      } else {
        if (result[index].correctAnswer === indexAnswer) {
          return "result__answer result__answer-correct";
        } else if (result[index].wrongAnswer === indexAnswer) {
          return "result__answer result__answer-wrong";
        } else {
          return "result__answer";
        }
      }
    }
  }

  return (
    <>
      <h2>Kết quả chủ đề: {topics.find(item => item.id === topicId) && topics.find(item => item.id === topicId).name}</h2>
      <div style={{marginBottom: "20px"}}>
        Đúng: <strong>{totalCorrectAnswer} </strong>
        | Sai: <strong>{questions.length - totalCorrectAnswer} </strong>
        | Tổng số câu: <strong>{questions.length} </strong>
        | Tỷ lệ đúng: <strong>{(totalCorrectAnswer/questions.length*100).toFixed(0)}%</strong>
      </div>

      <div className="result">
        {questions.map((item, index) => (
          <React.Fragment key={index}>
            <h4>
              Câu {index + 1}: {item.question}
              {checkResultItem(index) ? (
                <span className="result__check result__check-correct">
                  Đúng
                </span>
                ) : (
                <span className="result__check result__check-wrong">
                  Sai
                </span>
              )}
            </h4>

            <ul>
              {item.answers.map((answer, indexAnswer) => (
                <li key={indexAnswer}>
                  <span className={checkAnswer(index, indexAnswer)}>{answer}</span>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default ResultItem;
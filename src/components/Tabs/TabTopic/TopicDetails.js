import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAnswers,
  getQuestionsTopic,
  patchAnswers,
  postAnswers,
} from "../../../services/topicDetailsService";
import GoBack from "../../../components/GoBack";
import TopicItem from "./TopicItem";
import { Link, useParams } from "react-router-dom";
import { getCookie } from "../../../utils/request";

function TopicDetails() {
  const params = useParams();
  const topicId = +params.id;
  const stateAnswer = useSelector((state) => state.answerReducer);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const userId = +getCookie("userId");
  const [answerId, setAnswerId] = useState();
  const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const result1 = await getQuestionsTopic();
      setQuestions(result1.filter((item) => item.topicId === topicId));

      const result2 = await getAnswers();
      setAnswers(result2);
    };
    fetchApi();
  }, [topicId]);

  useEffect(() => {
    let item = answers.find(
      (item) => item.userId === userId && item.topicId === topicId
    );
    if (item) {
      setCompleted(true);
      setAnswerId(item.id);
    }
  }, [answers, userId, topicId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (questions.length === stateAnswer.length) {
      setClick(true);
      alert("Nộp bài thành công!");
      if (completed) {
        patchAnswers(answerId, {
          userId: userId,
          topicId: topicId,
          answer: stateAnswer,
        });
      } else {
        postAnswers({
          userId: userId,
          topicId: topicId,
          answer: stateAnswer,
        });
      }
    } else {
      alert("Hoàn thành trước khi nộp bài!");
    }
  };

  return (
    <>
      <GoBack step={-1} name="Trở lại" />

      <form onSubmit={handleSubmit} name="quiz">
        <TopicItem questions={questions} />

        <div style={{ margin: "30px 0" }}>
          <button style={{ marginRight: "20px" }} className="btn">
            Nộp bài
          </button>
          {click && (
            <Link to="/result" className="btn" state={topicId}>
              Xem kết quả
            </Link>
          )}
        </div>
      </form>
    </>
  );
}

export default TopicDetails;

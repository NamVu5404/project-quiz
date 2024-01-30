import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAnswser, updateAnswser } from "../../../actions";

function TopicItem(props) {
  const { questions } = props;
  const state = useSelector(state => state.answerReducer);
  const dispatch = useDispatch();

  const handleChangeAnswer = (questionId, answer) => {
    if (state.find(item => item.questionId === questionId)) {
      dispatch(updateAnswser(questionId, answer));
    } else {
      dispatch(createAnswser(questionId, answer));
    }
  }

  return (
    <>
      {questions.map((item, index) => (
        <React.Fragment key={index}>
          <h4>Câu {index + 1}: {item.question}</h4>

          {item.answers.map((answer, index) => (
            <React.Fragment key={index}>
              <input
                onChange={() => handleChangeAnswer(item.id, index)}
                type="radio"
                id={"" + item.id + index}
                name={item.id}
                value={index}
              />
              <label htmlFor={"" + item.id + index}>
                {answer}
              </label>
              <br />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </>
  )
}

export default TopicItem;
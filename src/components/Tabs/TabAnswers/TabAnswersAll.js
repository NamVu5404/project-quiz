import { useEffect, useState } from "react";
import { getAnswers } from "../../../services/answerService";
import { Link } from "react-router-dom";
import { getTopics } from "../../../services/topicDetailsService";
import { getCookie } from "../../../utils/request";

function TabAnswersAll() {
  const userId = +getCookie("userId");
  const [answers, setAnswers] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result1 = await getAnswers();
      setAnswers(result1.filter((item) => item.userId === userId));

      const result2 = await getTopics();
      setTopics(result2);
    };
    fetchApi();
  }, [userId]);

  return (
    <>
      <h2>Danh sách bài đã luyện tập</h2>

      <table className="topic">
        <thead>
          <tr>
            <th className="topic__id">Id</th>
            <th className="topic__name">Tên chủ đề</th>
            <th className="topic__btn">Bài đã làm</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((item) => (
            <tr key={item.id}>
              <td className="topic__id">{item.id}</td>
              <td className="topic__name">
                {topics.find((itemTopic) => itemTopic.id === item.topicId) &&
                  topics.find((itemTopic) => itemTopic.id === item.topicId)
                    .name}
              </td>
              <td>
                <Link
                  className="btn topic__btn"
                  to={`/answers/` + item.id}
                  state={item.topicId}
                >
                  Xem chi tiết
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TabAnswersAll;

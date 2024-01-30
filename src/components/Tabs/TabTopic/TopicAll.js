import { useEffect, useState } from "react";
import { get } from "../../../utils/request";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAnswser } from "../../../actions/index";

function TopicAll() {
  const [topics, setTopics] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await get(`topics`);
      setTopics(result);
    };
    fetchApi();
  }, []);

  const handleClick = () => {
    dispatch(resetAnswser());
  };

  return (
    <>
      <h2>Danh sách chủ đề ôn luyện</h2>

      <table className="topic">
        <thead>
          <tr>
            <th className="topic__id">Id</th>
            <th className="topic__name">Tên chủ đề</th>
            <th className="topic__btn">Luyện tập</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((item) => (
            <tr key={item.id}>
              <td className="topic__id">{item.id}</td>
              <td className="topic__name">{item.name}</td>
              <td>
                <Link
                  onClick={handleClick}
                  className="btn topic__btn"
                  to={`/topic/` + item.id}
                >
                  Làm bài
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TopicAll;

import { NavLink } from "react-router-dom";
import "./TabHome.scss"

function TabHome() {
  return (
    <>
      <p>Chúc mừng bạn đã đăng nhập thành công!</p>

      <NavLink to="/topic" className="btn btn__home">Danh sách chủ đề ôn luyện</NavLink>
      <NavLink to="/answers" className="btn btn__home">Danh sách bài đã luyện tập</NavLink>
      <hr />
    </>
  )
}

export default TabHome;
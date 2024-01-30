import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Home() {
  const state = useSelector(state => state.loginReducer);

  return (
    <>
      {state && <Outlet />}
      <div>
        Website trắc nghiệm online lập trình Frontend là một nền tảng trực tuyến cho phép các lập trình viên Frontend thực hiện các bài kiểm tra, trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lâp trình Frontend.
      </div>
      <br />
      <div>
        Đối với các lập trình viên Frontend, website trắc nghiệm online cung cấp các bài kiểm tra để giúp họ nâng cao kiến thức và kỹ năng cảu mình trong các công nghệ và công cụ lập trình như HTML, CSS, Javascript, jQuery, Bootstrap, Angular, React, Vue...
      </div>
    </>
  )
}

export default Home;
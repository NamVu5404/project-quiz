import { checkLogin } from "../../services/loginService";
import "./Login.scss";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { isLogin } from "../../actions";
import { useNavigate } from "react-router-dom";
import { randomToken, setCookie } from "../../utils/request";

function Login() {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    const response = await checkLogin(email, password);

    if (response.length) {
      dispatch(isLogin(true));
      setCookie("email", response[0].email, 2)
      setCookie("userId", response[0].id, 2);
      setCookie("token", randomToken(), 2);
      navigate("/");
    } else {
      alert("Đăng nhập thất bại do sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <>
      {/* <form className="login" action="https://www.w3schools.com/action_page.php" target="_blank" method="post"> */}
      <form className="login" onSubmit={handleSubmit}>
        <p className="login__title">Login Quiz</p>
        <div className="login__form">
          <input
            ref={inputEmail}
            className="login__email login__input"
            name="email"
            type="email"
            placeholder="Email..."
            required
          />
          <input
            ref={inputPassword}
            className="login__password login__input"
            name="password"
            type="password"
            placeholder="Password..."
            required
          />
        </div>
        <button className="login__btn">Login</button>
      </form>
    </>
  );
}

export default Login;

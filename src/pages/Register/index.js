import { useRef } from "react";
import { checkRegister, registerAccount } from "../../services/registerService";
import { randomToken } from "../../utils/request";

function Register() {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    const token = randomToken();

    if (password.length < 8) {
      alert("Mật khẩu phải có 8 kí tự trở lên")
    } else {
      const respsonse = await checkRegister("email", email);
      if (respsonse.length === 0) {
        registerAccount({
          "fullName": name,
          "email": email,
          "password": password,
          "token": token
        });
        alert("Đăng kí thành công");
      } else {
        alert("Đăng kí thất bại do email đã tồn tại");
      }
    }
  }

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <p className="login__title">Register Account</p>
        <div className="login__form">
          <input
            ref={inputName}
            className="login__name login__input"
            name="fullName"
            type="text"
            placeholder="Full Name..."
            required
          />
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
        <button className="login__btn">Register</button>
      </form>
    </>
  )
}

export default Register;
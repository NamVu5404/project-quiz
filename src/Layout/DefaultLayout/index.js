import { Outlet } from "react-router-dom";
import "./DefaultLayout.scss";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../actions";
import LoggedInRoutes from "../LoggedInRoutes";
import LoggedOutRoutes from "../LoggedOutRoutes";
import { deleteCookie } from "../../utils/request";

function DefaultLayout() {
  const state = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const navLinkActive = (e) => {
    return e.isActive ? "header__link header__menu-active" : "header__link";
  };

  const handleLogout = () => {
    dispatch(isLogin(false));
    deleteCookie("email");
    deleteCookie("userId");
    deleteCookie("token");
  };

  return (
    <>
      {state ? (
        <LoggedInRoutes
          navLinkActive={navLinkActive}
          handleLogout={handleLogout}
        />
      ) : (
        <LoggedOutRoutes navLinkActive={navLinkActive} />
      )}

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">Copyright 2024 by VNN</footer>
    </>
  );
}

export default DefaultLayout;

import { NavLink } from "react-router-dom";

function LoggedOutRoutes(props) {
  const { navLinkActive } = props;

  return (
    <>
      <header className="header">
        <NavLink className="header__logo" to="/">
          Quiz
        </NavLink>

        <div className="header__menu">
          <NavLink className={navLinkActive} to="/login">
            Login
          </NavLink>
          <NavLink className={navLinkActive} to="/register">
            Register
          </NavLink>
        </div>
      </header>
    </>
  )
}

export default LoggedOutRoutes;
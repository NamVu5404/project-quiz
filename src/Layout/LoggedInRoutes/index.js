import { NavLink } from "react-router-dom";

function LoggedInRoutes(props) {
  const { navLinkActive, handleLogout } = props;

  return (
    <>
      <header className="header">
        <NavLink className="header__logo" to="/">
          Quiz
        </NavLink>

        <div className="header__tab">
          <NavLink className={navLinkActive} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkActive} to="/topic">
            Topic
          </NavLink>
          <NavLink className={navLinkActive} to="/answers">
            Answers
          </NavLink>
        </div>

        <div className="header__menu">
          <NavLink onClick={handleLogout} className={navLinkActive} to="/">
            Logout
          </NavLink>
        </div>
      </header>
    </>
  )
}

export default LoggedInRoutes;
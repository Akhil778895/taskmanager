import { NavLink } from "react-router-dom";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Task Manager</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                    <NavLink to ="/task"> Tasks</NavLink>
                </li>
              <li>
                <NavLink to="/register"> Register </NavLink>
              </li>
              <li>
                <NavLink to="/login"> Login </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
import React from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Link1"} className="nav-link">
                  Link1
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to={"/dropdown"} className="nav-link">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="Register">
              <Link to={"/Register"} className="nav-link">
                <button
                  className="btn btn-outline-success bg-black"
                  type="submit"
                >
                  Register
                </button>
              </Link>
            </form>
            <form className="d-flex" role="LogIn">
              <Link to={"/LogIn"} className="nav-link">
                <button
                  className="btn btn-outline-success bg-black"
                  type="submit"
                >
                  LogIn
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 max auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink activeClassName="menu_active" className="navbar-brand" to="">
                 Aman kumar
                </NavLink>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"
                        className="nav-link "
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" className="nav-link" to="/service">
                        Services
                      </NavLink>
                    </li><li className="nav-item">
                      <NavLink
                        className="nav-link "
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" className="nav-link" to="/contact">
                       Contact
                      </NavLink>
                    </li>
                    </ul>
                    {/* <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink activeClassName=""activeClassNameclassName="dropdown-item" to="#">
                            Action
                          </NavLink>
                        </li>
                        <li>
                          <NavLink activeClassName=""activeClassNameclassName="dropdown-item" to="#">
                            Another action
                          </NavLink>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <NavLink activeClassName=""activeClassNameclassName="dropdown-item" to="#">
                            Something else here
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName=""activeClassNameclassName="nav-link disabled" aria-disabled="true">
                        Disabled
                      </NavLink>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

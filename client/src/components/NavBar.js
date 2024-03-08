import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//STYLE
import "../style/general.css";
import "../style/navbar.css";

const NavBar = (props) => {
  const { user, userInfo, companyInfo } = useSelector((state) => {
    return state;
  });

  return (
    <div className="container main-nav">
      <div className="img-box">
        <img
          className="job-logo"
          src="https://t4.ftcdn.net/jpg/04/97/27/63/360_F_497276360_QX4l0vmAnKOS327Wlg2uTisk9Bptu0Wx.jpg"
          alt="job logo"
        />
      </div>
      <nav>
        {Object.keys(user).length > 0 ? (
          <ul className="sub-nav">
            {user.role === "Jobseeker" ? (
              <>
                {Object.keys(userInfo).length > 0 ? (
                  <>
                    <li>
                      <Link className="hero-link" to="/jobs">
                        Job offers
                      </Link>
                    </li>
                    <li>
                      <Link className="hero-link" to="/applies">
                        applies
                      </Link>
                    </li>
                    <li>
                      <Link className="hero-link" to="/user-profile">
                        profile
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="hero-link" to="/userinfo">
                        userInfo
                      </Link>
                    </li>
                  </>
                )}
              </>
            ) : (
              <>
                {Object.keys(companyInfo).length > 0 ? (
                  <>
                    <li>
                      <Link className="hero-link" to="/jobDash">
                        Job Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="hero-link" to="/application">
                        applies
                      </Link>
                    </li>
                    <li>
                      <Link className="hero-link" to="/company-profile">
                        profile
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="hero-link" to="/company">
                        companyInfo
                      </Link>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        ) : (
          <ul className="sub-nav">
            <li>
              <Link className="hero-link" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="hero-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="hero-link" to="/">
                Explore
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavBar;

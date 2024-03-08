import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import isStrongPassword from "validator/lib/isStrongPassword";

import { asyncSetUserLogin } from "../../actions/userAction";

//STYLE
import "../../style/login.css";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "required";
            } else if (!isStrongPassword(values.password)) {
              errors.password = "password must be mixed combination";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const formData = {
              email: values.email,
              password: values.password,
            };
            dispatch(asyncSetUserLogin(formData, navigate));
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <div>
              <div>
                <h2 className="heading-two">Login</h2>
                <p className="welcome-note">Welcome back</p>
              </div>
              <div className="sub-form">
                <form className="login-form" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email:</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="email..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <span className="error-show">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="password">password:</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="password..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <span className="error-show">
                      {errors.password && touched.password && errors.password}
                    </span>
                  </div>
                  <button
                    className="submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                  <p className="form-navigate">
                    Don't have an account?
                    <Link to="/register">Join job-portal</Link>
                  </p>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

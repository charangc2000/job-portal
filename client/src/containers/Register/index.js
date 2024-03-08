import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import isStrongPassword from "validator/lib/isStrongPassword";

//STYLE
import "../../style/register.css";
import { asyncSetUserRegister } from "../../actions/userAction";

const Register = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Formik
          initialValues={{ Username: "", email: "", password: "", role: "" }}
          validate={(values) => {
            const errors = {};

            if (!values.Username) {
              errors.Username = "required";
            }

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

            if (!values.role) {
              errors.role = "required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const formData = {
              username: values.Username,
              email: values.email,
              password: values.password,
              role: values.role,
            };

            dispatch(asyncSetUserRegister(formData, navigate));
            console.log(formData);
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
                <h2 className="heading-two">Register</h2>
                <p className="welcome-note">Join us with Job-portal</p>
              </div>
              <div className="sub-form">
                <form className="register-form" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username:</label>
                    <input
                      id="username"
                      type="text"
                      name="Username"
                      placeholder="username..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Username}
                    />
                    <span className="error-show">
                      {errors.Username && touched.Username && errors.Username}
                    </span>
                  </div>
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
                  <div>
                    <label htmlFor="role">you looking for:</label>
                    <select
                      id="role"
                      name="role"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.role}
                    >
                      <option value="">select</option>
                      <option value="Jobseeker">Job</option>
                      <option value="Recruiter">Hire</option>
                    </select>
                    <span className="error-show">
                      {errors.role && touched.role && errors.role}
                    </span>
                  </div>
                  <button
                    className="submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Register
                  </button>
                  <p className="form-navigate">
                    Already have an account?<Link to="/login">SignIn</Link>
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

export default Register;

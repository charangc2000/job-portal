import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

//STYLE
import "../../style/userinfo.css";
import "../../style/general.css";
import { asyncSetUserDetail } from "../../actions/userDetailAction";

const UserInfo = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            contact: "",
            currentLocation: "",
            workExperience: "",
            education: "",
            skills: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.firstName) {
              errors.firstName = "required";
            }

            if (!values.lastName) {
              errors.lastName = "required";
            }

            if (!values.contact) {
              errors.contact = "required";
            }

            if (!values.currentLocation) {
              errors.currentLocation = "required";
            }

            if (!values.workExperience) {
              errors.workExperience = "required";
            }

            if (!values.education) {
              errors.education = "required";
            }

            if (!values.skills) {
              errors.skills = "required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const formData = {
              firstName: values.firstName,
              lastName: values.lastName,
              contact: values.contact,
              currentLocation: values.currentLocation,
              workExperience: values.workExperience,
              education: values.education,
              skills: values.skills,
            };
            formData.skills = values.skills.split(",");
            dispatch(asyncSetUserDetail(formData, navigate));
            // console.log(formData);
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
            <div className="container">
              <div>
                <h2 className="heading-two">Create your profile</h2>
                <p className="welcome-note">Join us with Job-portal</p>
              </div>
              <div>
                <form className="company-form " onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="firstName">First-name:</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="firstName..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    <span className="error-show">
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="lastName">Last-name:</label>
                    <input
                      id="lastName"
                      type="lastName"
                      name="lastName"
                      placeholder="lastName..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    <span className="error-show">
                      {errors.lastName && touched.lastName && errors.lastName}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="contact">Contact-number:</label>
                    <input
                      id="contact"
                      type="contact"
                      name="contact"
                      placeholder="contact..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contact}
                    />
                    <span className="error-show">
                      {errors.contact && touched.contact && errors.contact}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="currentLocation">Current-location:</label>
                    <input
                      id="currentLocation"
                      type="currentLocation"
                      name="currentLocation"
                      placeholder="currentLocation..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.currentLocation}
                    />
                    <span className="error-show">
                      {errors.currentLocation &&
                        touched.currentLocation &&
                        errors.currentLocation}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="workExperience">Work-experience:</label>
                    <input
                      id="workExperience"
                      type="workExperience"
                      name="workExperience"
                      placeholder="workExperience..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.workExperience}
                    />
                    <span className="error-show">
                      {errors.workExperience &&
                        touched.workExperience &&
                        errors.workExperience}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="education">Educational-level:</label>
                    <input
                      id="education"
                      type="education"
                      name="education"
                      placeholder="education..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.education}
                    />
                    <span className="error-show">
                      {errors.education &&
                        touched.education &&
                        errors.education}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="skills">
                      Skills(enter with comma saparated):
                    </label>
                    <input
                      id="skills"
                      type="skills"
                      name="skills"
                      placeholder="skills..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.skills}
                    />
                    <span className="error-show">
                      {errors.skills && touched.skills && errors.skills}
                    </span>
                  </div>
                  <button
                    className="register-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserInfo;

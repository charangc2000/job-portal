import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

//STYLE
import "../../style/company.css";
import "../../style/general.css";
import { asyncSetCompany } from "../../actions/companyInfoAction";

const Company = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            companyname: "",
            industry: "",
            companysize: "",
            companytype: "",
            foundedyear: "",
            headQuarters: "",
            contactEmail: "",
            contactNumber: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.companyname) {
              errors.companyname = "required";
            }

            if (!values.industry) {
              errors.industry = "required";
            }

            if (!values.companysize) {
              errors.companysize = "required";
            }

            if (!values.companytype) {
              errors.companytype = "required";
            }

            if (!values.foundedyear) {
              errors.foundedyear = "required";
            }

            if (!values.headQuarters) {
              errors.headQuarters = "required";
            }

            if (!values.contactEmail) {
              errors.contactEmail = "required";
            }

            if (!values.contactNumber) {
              errors.contactNumber = "required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const formData = {
              companyName: values.companyname,
              industry: values.industry,
              companySize: values.companysize,
              companyType: values.companytype,
              foundedYear: values.foundedyear,
              headQuarters: values.headQuarters,
              contactEmail: values.contactEmail,
              contactNumber: values.contactNumber,
            };
            dispatch(asyncSetCompany(formData, navigate));
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
                <h2 className="heading-two">Register</h2>
                <p className="welcome-note">Join us with Job-portal</p>
              </div>
              <div>
                <form className="company-form " onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="companyname">company-name:</label>
                    <input
                      id="companyname"
                      type="text"
                      name="companyname"
                      placeholder="companyname..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companyname}
                    />
                    <span className="error-show">
                      {errors.companyname &&
                        touched.companyname &&
                        errors.companyname}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="industry">industry:</label>
                    <input
                      id="industry"
                      type="industry"
                      name="industry"
                      placeholder="industry..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.industry}
                    />
                    <span className="error-show">
                      {errors.industry && touched.industry && errors.industry}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="companysize">company-size:</label>
                    <input
                      id="companysize"
                      type="companysize"
                      name="companysize"
                      placeholder="companysize..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companysize}
                    />
                    <span className="error-show">
                      {errors.companysize &&
                        touched.companysize &&
                        errors.companysize}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="companytype">company-type:</label>
                    <input
                      id="companytype"
                      type="companytype"
                      name="companytype"
                      placeholder="companytype..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companytype}
                    />
                    <span className="error-show">
                      {errors.companytype &&
                        touched.companytype &&
                        errors.companytype}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="foundedyear">founded-year:</label>
                    <input
                      id="foundedyear"
                      type="foundedyear"
                      name="foundedyear"
                      placeholder="foundedyear..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.foundedyear}
                    />
                    <span className="error-show">
                      {errors.foundedyear &&
                        touched.foundedyear &&
                        errors.foundedyear}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="headQuarters">headQuarters:</label>
                    <input
                      id="headQuarters"
                      type="headQuarters"
                      name="headQuarters"
                      placeholder="headQuarters..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.headQuarters}
                    />
                    <span className="error-show">
                      {errors.headQuarters &&
                        touched.headQuarters &&
                        errors.headQuarters}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="contactEmail">contactEmail:</label>
                    <input
                      id="contactEmail"
                      type="email"
                      name="contactEmail"
                      placeholder="contactEmail..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contactEmail}
                    />
                    <span className="error-show">
                      {errors.contactEmail &&
                        touched.contactEmail &&
                        errors.contactEmail}
                    </span>
                  </div>
                  <div>
                    <label htmlFor="contactNumber">contactNumber:</label>
                    <input
                      id="contactNumber"
                      type="contactNumber"
                      name="contactNumber"
                      placeholder="contactNumber..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contactNumber}
                    />
                    <span className="error-show">
                      {errors.contactNumber &&
                        touched.contactNumber &&
                        errors.contactNumber}
                    </span>
                  </div>
                  <button
                    className="register-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    company register
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

export default Company;

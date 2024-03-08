import axios from "axios";
import { asyncGetCompany } from "./companyInfoAction";
import { asyncGetUserDetail } from "./userDetailAction";

export const asyncSetUserRegister = (formData, navigate) => {
  return () => {
    axios
      .post("http://localhost:3999/api/user/register", formData)
      .then((respopnse) => {
        const result = respopnse.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

export const asyncGetUserInfo = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3999/api/user/account", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(userAccount(result));
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

export const asyncSetUserLogin = (formData, navigate) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3999/api/user/login", formData)
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          localStorage.setItem("token", result.token);
          localStorage.setItem("role", result.role);
          dispatch(asyncGetUserInfo());
          if (result.role === "Jobseeker") {
            axios
              .get("http://localhost:3999/api/user-detail", {
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              })
              .then((response) => {
                const result = response.data;
                if (result === null) {
                  navigate("/userinfo");
                } else {
                  navigate("/jobs");
                  dispatch(asyncGetUserDetail());
                }
              })
              .catch((err) => {
                alert(err);
              });
          }

          if (result.role === "Recruiter") {
            axios
              .get("http://localhost:3999/api/company/account", {
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              })
              .then((response) => {
                const result = response.data;
                if (result === null) {
                  navigate("/company");
                } else {
                  navigate("/jobDash");
                  dispatch(asyncGetCompany());
                }
              })
              .catch((err) => {
                alert(err);
              });
          }
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const userAccount = (data) => {
  return {
    type: "GET_USER-INFO",
    payload: data,
  };
};

export const removeAccount = () => {
  return {
    type: "REMOVE_ACCOUNT",
  };
};

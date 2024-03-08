import axios from "axios";

export const asyncSetCompany = (formData, navigate) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3999/api/company/register", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(setCompany(result));
          navigate("/jobDash");
        }
      });
  };
};

const setCompany = (data) => {
  return {
    type: "SET_COMPANY",
    payload: data,
  };
};

export const asyncGetCompany = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3999/api/company/account", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(getCompany(result));
        }
      });
  };
};

const getCompany = (data) => {
  return {
    type: "GET_COMPANY",
    payload: data,
  };
};

export const asyncUpdateCompany = (id, formData) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3999/api/company/account/${id}`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(updateCompany(result));
        }
      });
  };
};

const updateCompany = (data) => {
  return {
    type: "UPDATE_COMPANY",
    payload: data,
  };
};

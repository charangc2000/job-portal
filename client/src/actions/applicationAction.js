import axios from "axios";

export const asyncSetUserApplication = (formData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3999/api/application-upload", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(setUserApplication(result));
        }
      });
  };
};

const setUserApplication = (data) => {
  return {
    type: "SET_APPLICATION",
    payload: data,
  };
};

export const asyncGetUserApplication = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3999/api/application-upload", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(getUserApplication(result));
        }
      });
  };
};

const getUserApplication = (data) => {
  return {
    type: "GET_APPLICATION",
    payload: data,
  };
};

export const asyncGetAllApplication = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3999/api/application", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(getAllApplication(result));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const getAllApplication = (data) => {
  return {
    type: "GET_ALL_APPLICATION",
    payload: data,
  };
};

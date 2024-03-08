import axios from "axios";

export const asyncSetAppStatus = (formData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3999/api/app-status", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(setStatus(result));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const setStatus = (data) => {
  return {
    type: "SET_STATUS",
    payload: data,
  };
};

export const asyncGetAppStatus = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3999/api/app-status", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(getStatus(result));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const getStatus = (data) => {
  return {
    type: "GET_STATUS",
    payload: data,
  };
};

export const asyncUpdateAppStatus = (formData, id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3999/api/app-status/${id}`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(updateStatus(result));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const updateStatus = (data) => {
  return {
    type: "UPDATE_STATUS",
    payload: data,
  };
};

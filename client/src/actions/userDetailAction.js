import axios from "axios";

export const asyncSetUserDetail = (formData, navigate) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3999/api/user-detail", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(setUserDetail(result));
          navigate("/jobs");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const setUserDetail = (data) => {
  return {
    type: "SET_USER_DETAIL",
    payload: data,
  };
};

export const asyncGetUserDetail = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3999/api/user-detail", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(getUserDetail(result));
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const getUserDetail = (data) => {
  return {
    type: "GET_USER_DETAIL",
    payload: data,
  };
};

export const asyncUpdateUserDetail = (id, formData) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3999/api/user-detail/${id}`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(updateUserDetail(result));
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const updateUserDetail = (data) => {
  return {
    type: "UPDATE_USER_DETAIL",
    payload: data,
  };
};

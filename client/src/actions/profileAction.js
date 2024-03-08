import axios from "axios";

export const asyncGetProfile = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3999/api/upload-image", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result === null) {
          const result = {};
          dispatch(getProfile(result));
        } else {
          dispatch(getProfile(result));
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const getProfile = (data) => {
  return {
    type: "GET_PROFILE",
    payload: data,
  };
};

export const asyncSetProfile = (formData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3999/api/upload-image", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(setProfile(result));
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const setProfile = (data) => {
  return {
    type: "SET_PROFILE",
    payload: data,
  };
};

export const asyncProfileUpdate = (id, formData) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3999/api/upload-image/${id}`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(updateProfile(result));
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const updateProfile = (data) => {
  return {
    type: "UPDATE_PROFILE",
    payload: data,
  };
};

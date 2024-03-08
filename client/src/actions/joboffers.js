import axios from "axios";

export const asyncGetjobs = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3999/api/job-posting", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
        } else {
          dispatch(getJobOffers(result));
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const getJobOffers = (data) => {
  return {
    type: "GET_JOBS",
    payload: data,
  };
};

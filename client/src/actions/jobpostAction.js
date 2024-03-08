import axios from "axios";

export const asyncJobPosting = (formData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3999/api/job-posting", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(setJobs(result));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const setJobs = (data) => {
  return {
    type: "SET_JOBS",
    payload: data,
  };
};

export const asyncUpdateJobPosting = (id, formData) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3999/api/job-posting/${id}`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(updateJob(result));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const updateJob = (data) => {
  return {
    type: "UPDATE_JOB",
    payload: data,
  };
};

export const asyncDeleteJobPosting = (id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3999/api/job-posting/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(deleteJob(result));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

const deleteJob = (data) => {
  return {
    type: "DELETE_JOB",
    payload: data,
  };
};

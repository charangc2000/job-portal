import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { message } from "antd";

//STYLE
import "../../style/jobs.css";
import "../../style/general.css";

import { asyncGetjobs } from "../../actions/joboffers";
import {
  asyncGetUserApplication,
  asyncSetUserApplication,
} from "../../actions/applicationAction";
import { asyncGetAppStatus } from "../../actions/appstatusAction";

const Jobs = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Hello,you already applied!!!");
  };

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [file, setFile] = useState("");
  const [helper, setHelper] = useState({});
  const [notify, setNotify] = useState(false);

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const { jobpost, application } = useSelector((state) => {
    return state;
  });

  const handleApplyClick = (jobs) => {
    setHelper(jobs);
    dispatch(asyncGetAppStatus());
    const result = application.some((app) => {
      return app.jobId._id === jobs._id;
    });
    setNotify(result);
  };

  const handleOk = () => {
    const formData = new FormData();
    formData.append("jobId", helper._id);
    formData.append("companyId", helper.companyId);
    formData.append("applicantName", name);
    formData.append("applicantNumber", contact);
    formData.append("applicantEmail", email);
    formData.append("file", file);

    const numberOfEntries = Array.from(formData.values());

    if (!numberOfEntries.includes("")) {
      dispatch(asyncSetUserApplication(formData));
      setIsModalOpen(!isModalOpen);
      setName("");
      setEmail("");
      setContact("");
      setFile("");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleapplyChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "contact") {
      setContact(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "file") {
      setFile(e.target.files[0]);
    }
  };

  const filterData = () => {
    return jobpost.filter((element) => {
      return element.jobDesignation
        .toLowerCase()
        .includes(search.toLocaleLowerCase());
    });
  };

  useEffect(() => {
    dispatch(asyncGetjobs());
    dispatch(asyncGetUserApplication());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="jobs-top-head">
        <h3>Recommended jobs for you</h3>
        <input
          className="search-type"
          type="search"
          value={search}
          onChange={handleSearchChange}
        ></input>
      </div>
      <ul className="grid-container">
        {jobpost.length > 0 ? (
          filterData().map((jobs) => {
            return (
              <li key={jobs._id}>
                <div className="job-item">
                  <p className="job-item-text">{jobs.companyName}</p>
                  <p>{jobs.jobDesignation}</p>
                  <p>
                    posted By<span>({jobs.companyName})</span>
                  </p>
                  <p className="flex-container">
                    <ion-icon name="location-outline"></ion-icon>
                    <span className="span-text">location</span> &rarr;
                    <span> {jobs.jobLocation}</span>
                  </p>
                  <p className="flex-container">
                    <ion-icon name="wallet-outline"></ion-icon>
                    <span className="span-text">CTC</span> &rarr;
                    <span>
                      {jobs.salary.from}-{jobs.salary.To} LPA
                    </span>
                  </p>
                  <p className="flex-container">
                    <ion-icon name="briefcase-outline"></ion-icon>
                    <span className="span-text">Exp</span> &rarr;
                    <span>
                      {jobs.workExperience.from}-{jobs.workExperience.To} yrs
                    </span>
                  </p>
                  <div className="flex-container">
                    <ion-icon name="document-text-outline"></ion-icon>
                    (skills)&rarr;
                    <ul className="skills-list">
                      {jobs.skills.map((skill, i) => {
                        return (
                          <li key={i}>
                            <span className="skills-span">{skill},</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      handleApplyClick(jobs);
                      setIsModalOpen(!isModalOpen);
                    }}
                    className="apply-button"
                  >
                    Apply
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <p>No jobs yet here</p>
        )}
      </ul>
      {notify ? (
        <>
          {contextHolder}
          {info()}
        </>
      ) : (
        <>
          <Modal
            title="Submitting your credentials here"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <form>
              <label>applicant-Name:</label>
              <input
                type="text"
                value={name}
                name="name"
                onChange={handleapplyChange}
              ></input>
              <label>applicant-Contact:</label>
              <input
                type="text"
                value={contact}
                name="contact"
                onChange={handleapplyChange}
              ></input>
              <label>applicant-Email:</label>
              <input
                type="text"
                value={email}
                name="email"
                onChange={handleapplyChange}
              ></input>
              <label>applicant-Resume:</label>
              <input
                type="file"
                accept="application/pdf"
                name="file"
                onChange={handleapplyChange}
              ></input>
            </form>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Jobs;

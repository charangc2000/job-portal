import React, { useEffect, useState } from "react";
import { message, Modal, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetjobs } from "../../actions/joboffers";

//STYLE
import "../../style/general.css";
import "../../style/jobdash.css";
import {
  asyncJobPosting,
  asyncUpdateJobPosting,
} from "../../actions/jobpostAction";

const JobDash = () => {
  const { companyInfo, jobpost } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetjobs());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobData = () => {
    const data = jobpost.filter((job) => {
      return job.companyId === companyInfo._id;
    });
    return data;
  };

  const confirm = (id) => {
    console.log(id);
    message.success(
      "after the deleting this job,all application under this jobs also deleted,,soo you need to take care here"
    );
  };

  const cancel = (e) => {
    message.error("No jobs are deleted");
  };

  const [id, setId] = useState("");
  const [jobDes, setJobDes] = useState("");
  const [jobLoc, setJobLoc] = useState("");
  const [skills, setSkills] = useState("");
  const [workFrom, setWorkFrom] = useState("");
  const [workTo, setWorkTo] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [jobType, setJobType] = useState("");

  const handleJobsChange = (e) => {
    const handleName = e.target.name;
    if (handleName === "job-designation") {
      setJobDes(e.target.value);
    } else if (handleName === "job-location") {
      setJobLoc(e.target.value);
    } else if (handleName === "skills") {
      setSkills(e.target.value);
    } else if (handleName === "work-from") {
      setWorkFrom(e.target.value);
    } else if (handleName === "work-to") {
      setWorkTo(e.target.value);
    } else if (handleName === "salary-from") {
      setSalaryFrom(e.target.value);
    } else if (handleName === "salary-to") {
      setSalaryTo(e.target.value);
    } else if (handleName === "job-nature") {
      setJobType(e.target.value);
    }
  };

  const handleEditJobs = (jobs, id) => {
    setIsModalOpen(true);
    setId(id);
    setJobDes(jobs.jobDesignation);
    setJobLoc(jobs.jobLocation);
    setSkills(jobs.skills.join(","));
    setWorkFrom(jobs.workExperience.from);
    setWorkTo(jobs.workExperience.To);
    setSalaryFrom(jobs.salary.from);
    setSalaryTo(jobs.salary.To);
    setJobType(jobs.jobType);
  };

  const handleOk = (e) => {
    e.preventDefault();
    const formData = {
      companyId: companyInfo._id,
      companyName: companyInfo.companyName,
      jobDesignation: jobDes,
      jobLocation: jobLoc,
      skills: skills,
      workExperience: { from: workFrom, To: workTo },
      salary: { from: salaryFrom, To: salaryTo },
      jobType: jobType,
    };
    formData.skills = skills.split(",");

    if (id === "") {
      dispatch(asyncJobPosting(formData));
    } else {
      dispatch(asyncUpdateJobPosting(id, formData));
    }
    setJobDes("");
    setJobLoc("");
    setSkills("");
    setWorkFrom("");
    setWorkTo("");
    setSalaryFrom("");
    setSalaryTo("");
    setJobType("");
    setId("");

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container">
      <div className="btn-flex">
        <div className="create-btn">
          <button
            onClick={() => {
              setJobDes("");
              setJobLoc("");
              setSkills("");
              setWorkFrom("");
              setWorkTo("");
              setSalaryFrom("");
              setSalaryTo("");
              setJobType("");
              setIsModalOpen(true);
            }}
            className="create-jobs-btn"
          >
            create jobs
          </button>
        </div>
      </div>
      <div>
        <ul className="grid-container">
          {jobData().length > 0 ? (
            jobData().map((jobs) => {
              return (
                <li key={jobs._id}>
                  <div className="job-item">
                    <p className="job-item-text">{jobs.companyName}</p>
                    <p>{jobs.jobDesignation}</p>
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
                    <p className="flex-container">
                      <ion-icon name="laptop-outline"></ion-icon>
                      <span className="span-text">job-type</span> &rarr;
                      <span>{jobs.jobType}</span>
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
                    <div className="jobs-btn-edit-dlt">
                      <ion-icon
                        className="jobs-edit-btn"
                        name="create-Sharp"
                        size="large"
                        onClick={() => {
                          handleEditJobs(jobs, jobs._id);
                        }}
                      ></ion-icon>
                      <Popconfirm
                        title="Delete the Job"
                        description="Are you sure to delete this job?"
                        onConfirm={() => {
                          confirm(jobs._id);
                        }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <ion-icon
                          className="jobs-dlt-btn"
                          name="trash-Sharp"
                          size="large"
                        ></ion-icon>
                      </Popconfirm>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p> No jobs yet here </p>
          )}
        </ul>
      </div>
      <Modal
        className="jobs-modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Create your jobs here</h3>
        <form className="create-jobs-form">
          <div>
            <label>job-designation:</label>
            <input
              onChange={handleJobsChange}
              name="job-designation"
              type="text"
              value={jobDes}
            />
          </div>
          <div>
            <label>job-location:</label>
            <input
              onChange={handleJobsChange}
              name="job-location"
              type="text"
              value={jobLoc}
            />
          </div>
          <div>
            <label>skills(enter with saparated):</label>
            <input
              onChange={handleJobsChange}
              name="skills"
              type="text"
              value={skills}
            />
          </div>
          <div>
            <label>work-experience(in years):</label>
            <div className="create-jobs-sub-label">
              <div>
                <label className="jobs-label">from:</label>
                <input
                  onChange={handleJobsChange}
                  name="work-from"
                  className="jobs-input"
                  type="text"
                  value={workFrom}
                />
              </div>
              <div>
                <label className="jobs-label">To:</label>
                <input
                  onChange={handleJobsChange}
                  name="work-to"
                  className="jobs-input"
                  type="text"
                  value={workTo}
                />
              </div>
            </div>
          </div>
          <div>
            <label>salary(in LPA):</label>
            <div className="create-jobs-sub-label">
              <div>
                <label className="jobs-label">from:</label>
                <input
                  onChange={handleJobsChange}
                  name="salary-from"
                  className="jobs-input"
                  type="text"
                  value={salaryFrom}
                />
              </div>
              <div>
                <label className="jobs-label">To:</label>
                <input
                  onChange={handleJobsChange}
                  name="salary-to"
                  className="jobs-input"
                  type="text"
                  value={salaryTo}
                />
              </div>
            </div>
          </div>
          <div>
            <label>job-nature:</label>
            <select
              value={jobType}
              onChange={handleJobsChange}
              name="job-nature"
            >
              <option value="">select</option>
              <option value="hybrid">hybrid</option>
              <option value="remote">remote</option>
            </select>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default JobDash;

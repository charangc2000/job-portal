import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUserApplication } from "../../actions/applicationAction";
import { Drawer } from "antd";
import { Progress } from "antd";

//STYLE
import "../../style/general.css";
import "../../style/application.css";
import {
  asyncGetAppStatus,
  asyncSetAppStatus,
} from "../../actions/appstatusAction";

const Application = (props) => {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState({});
  const [status, setStatus] = useState({});

  const dispatch = useDispatch();

  const { application, appstatus } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(asyncGetUserApplication());
    dispatch(asyncGetAppStatus());
  }, [dispatch]);

  const showDrawer = (jobsData, id) => {
    setCompany(jobsData);
    dispatch(asyncGetUserApplication());
    dispatch(asyncGetAppStatus());
    const formData = {
      jobId: jobsData._id,
      companyId: jobsData.companyId,
      applicationId: id,
      submitted: true,
      underReview: false,
      accepted: false,
      rejected: false,
    };
    setOpen(true);

    const result = appstatus.find((status) => {
      return status.applicationId === id;
    });
    setStatus(result);

    if (result === undefined) {
      dispatch(asyncSetAppStatus(formData));
    } else {
      const result = appstatus.find((status) => {
        return status.applicationId === id;
      });
      setStatus(result);
    }
  };
  const onClose = () => {
    setOpen(false);
  };

  const renderContent = () => {
    if (status.accepted === true) {
      return (
        <div className="progress-flex">
          <Progress type="circle" percent={100} size={80} />
          <p>selected</p>
        </div>
      );
    } else if (status.rejected === true) {
      return (
        <div className="progress-flex">
          <Progress type="circle" percent={100} size={80} status="exception" />
          <p>rejected</p>
        </div>
      );
    } else {
      return (
        <div className="progress-flex">
          <Progress type="circle" percent={0} size={80} />
          <p>waiting for recruiter actions</p>
        </div>
      );
    }
  };

  const statementRender = () => {
    if (status.accepted === true) {
      return (
        <p>
          You got shortlisted and HR will soonly contact you through your
          official email
        </p>
      );
    } else if (status.rejected === true) {
      return <p>Sorry,better luck next time</p>;
    }
  };

  return (
    <div className="container">
      <p className="app-heading">Total Applies &rarr; {application.length}</p>
      {application.length > 0 ? (
        <ul className="application-grid">
          {application.map((application) => {
            return (
              <li key={application._id} className="application-flex">
                <p className="app-text">{application.jobId.companyName}</p>
                <p className="app-info">{application.jobId.jobDesignation}</p>
                <p className="app-info app-info-flex-container">
                  <ion-icon name="location-outline"></ion-icon>
                  <span>{application.jobId.jobLocation}</span>
                </p>
                <p className="app-info app-info-flex-container application-flex-last-child">
                  <ion-icon name="laptop-outline"></ion-icon>
                  <span>{application.jobId.jobType}</span>
                </p>
                <p
                  className="app-track-status"
                  onClick={() => {
                    showDrawer(application.jobId, application._id);
                  }}
                >
                  To view your application status
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>not applies yet here</p>
      )}
      <Drawer
        title="your application tracking here"
        onClose={onClose}
        open={open}
      >
        <div className="progress-detail-flex">
          {Object.keys(company).length > 0 && (
            <p className="company-heading">{company.companyName}</p>
          )}
          {Object.keys(company).length > 0 && (
            <p className="company-designation">{company.jobDesignation}</p>
          )}
        </div>
        <div className="progress-item">
          {status === null ||
            (status === undefined && (
              <>
                <div className="progress-flex">
                  <Progress type="circle" percent={100} size={80} />
                  <p>submitted</p>
                  <span>&darr;</span>
                </div>
                <div className="progress-flex">
                  <Progress type="circle" percent={0} size={80} />
                  <p>under review</p>
                  <span>&darr;</span>
                </div>
                <div className="progress-flex">
                  <Progress type="circle" percent={0} size={80} />
                  <p>waiting for recruiter actions</p>
                </div>
              </>
            ))}
          {!status ||
            (Object.keys(status).length > 0 && (
              <>
                {status.submitted === true && (
                  <>
                    <div className="progress-flex">
                      <Progress type="circle" percent={100} size={80} />
                      <p>submitted</p>
                      <span>&darr;</span>
                    </div>
                  </>
                )}
                {status.underReview === true ? (
                  <>
                    <div className="progress-flex">
                      <Progress type="circle" percent={100} size={80} />
                      <p>under review</p>
                      <span>&darr;</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="progress-flex">
                      <Progress type="circle" percent={0} size={80} />
                      <p>under review</p>
                      <span>&darr;</span>
                    </div>
                  </>
                )}
                {status !== undefined && renderContent()}
              </>
            ))}
          {status !== undefined && statementRender()}
        </div>
      </Drawer>
    </div>
  );
};

export default Application;

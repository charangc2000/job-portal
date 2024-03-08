import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer } from "antd";
import { message, Popconfirm } from "antd";

//STYLE
import "../../style/general.css";
import "../../style/applies.css";
import { asyncGetAllApplication } from "../../actions/applicationAction";
import {
  asyncGetAppStatus,
  asyncUpdateAppStatus,
} from "../../actions/appstatusAction";

const Applies = () => {
  const [open, setOpen] = useState(false);
  const [helper, setHelper] = useState({});
  const [data, setData] = useState({});
  const [status, setStatus] = useState({});

  const { companyInfo, application, appstatus } = useSelector((state) => {
    return state;
  });

  const showDrawer = (application) => {
    setHelper(application);
    setOpen(true);
    const result = appstatus.find((status) => {
      return status.applicationId === application._id;
    });

    setStatus(result);

    const formData = {
      companyId: result.companyId,
      jobId: result.jobId,
      applicationId: result.applicationId,
      userId: result.userId,
      submitted: true,
      underReview: true,
      accepted: false,
      rejected: false,
    };
    setData(formData);
    if (result.underReview === false) {
      dispatch(asyncUpdateAppStatus(formData, result._id));
    }
  };
  const onClose = () => {
    setOpen(false);
  };

  const showpdf = (pdf) => {
    window.open(
      `http://localhost:3999/api/application-upload/${pdf}`,
      "_blank",
      "noreferrer"
    );
  };
  const dispatch = useDispatch();

  const handleSelect = () => {
    if (data.accepted === false) {
      const result = appstatus.find((status) => {
        return status.applicationId === data.applicationId;
      });

      const formData = {
        userId: data.userId,
        companyId: data.companyId,
        applicationId: data.applicationId,
        jobId: data.jobId,
        submitted: data.submitted,
        underReview: data.underReview,
        accepted: true,
        rejected: data.rejected,
      };
      dispatch(asyncUpdateAppStatus(formData, result._id));
    }
  };

  const handleReject = () => {
    if (data.rejected === false) {
      const result = appstatus.find((status) => {
        return status.applicationId === data.applicationId;
      });

      const formData = {
        userId: data.userId,
        companyId: data.companyId,
        applicationId: data.applicationId,
        jobId: data.jobId,
        submitted: data.submitted,
        underReview: data.underReview,
        accepted: false,
        rejected: true,
      };
      dispatch(asyncUpdateAppStatus(formData, result._id));
    }
  };

  useEffect(() => {
    dispatch(asyncGetAllApplication(companyInfo._id));
    dispatch(asyncGetAppStatus());
  }, [dispatch, companyInfo._id]);

  const filterApplicationData = () => {
    const result = application.filter((apps) => {
      return apps.companyId === companyInfo._id;
    });
    return result;
  };

  const confirm = () => {
    message.success("Selected!!");
  };

  const cancel = () => {
    message.error("Rejected!!");
  };

  return (
    <div className="container">
      <p className="app-heading">
        Total Applies &rarr; {filterApplicationData().length}
      </p>
      {filterApplicationData().length > 0 ? (
        <ul className="application-grid">
          {filterApplicationData().map((application) => {
            return (
              <li key={application._id} className="application-flex">
                <p className="app-text">
                  {application.jobId.jobDesignation}- (
                  {application.applicantName})
                </p>
                <p className="app-info app-info-flex-container">
                  <ion-icon name="location-outline"></ion-icon>
                  <span>{application.jobId.jobLocation}</span>
                </p>
                <p className="app-info app-info-flex-container application-flex-last-child">
                  <ion-icon name="laptop-outline"></ion-icon>
                  <span>{application.jobId.jobType}</span>
                </p>
                <p
                  className="app-status"
                  onClick={() => {
                    showDrawer(application);
                  }}
                >
                  View application
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>not applies yet here</p>
      )}
      <Drawer title="applicant details" onClose={onClose} open={open}>
        <div className="applicant-flex-container">
          <p>
            <strong>Name:</strong> {helper.applicantName}
          </p>
          <p>
            <strong>Email:</strong> {helper.applicantEmail}
          </p>
          <p>
            <strong>Contact:</strong> {helper.applicantNumber}
          </p>
          <p
            className="applicant-resume-pdf"
            onClick={() => {
              showpdf(helper.applicantResume);
            }}
          >
            Resume
          </p>
          <div className="applies-action-btn">
            <Popconfirm title="select this user" onConfirm={confirm}>
              <p
                onClick={() => {
                  handleSelect();
                }}
                className="select-applicant"
              >
                select
              </p>
            </Popconfirm>
            <Popconfirm title="Reject this user" onConfirm={cancel}>
              <p
                onClick={() => {
                  handleReject();
                }}
                className="reject-applicant"
              >
                Reject
              </p>
            </Popconfirm>
          </div>
          {status.accepted === true && <p className="selected">Selected</p>}
          {status.rejected === true && <p className="rejected">Rejected</p>}
        </div>
      </Drawer>
    </div>
  );
};

export default Applies;

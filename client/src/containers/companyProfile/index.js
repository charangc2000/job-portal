// import React from "react";
// import Footer from "../Footer";

// //STYLE
// import "../../style/general.css";

// const CompanyProfile = (props) => {
//   return (
//     <div className="container">
//       <h2>company profile</h2>
//       <div></div>
//       <Footer />
//     </div>
//   );
// };

// export default CompanyProfile;

import React, { useState, useEffect } from "react";
import { Avatar, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/index";

//STYLE
import "../../style/companyprofile.css";
import "../../style/general.css";
import {
  asyncGetProfile,
  asyncProfileUpdate,
  asyncSetProfile,
} from "../../actions/profileAction";
import { removeAccount } from "../../actions/userAction";
import { asyncUpdateCompany } from "../../actions/companyInfoAction";
//import "../../style/general.css";

const CompanyProfile = (props) => {
  //for profile
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");

  //for userInfo
  const [modelOpen, setModelOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [headQuarters, setHeadQuarters] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { profile, companyInfo, user } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(asyncGetProfile());
  });

  //for profile model
  const handleAddClick = () => {
    setOpen(true);
  };

  const handleUpdateClick = () => {
    setOpen(true);
  };

  const onOk = () => {
    const id = profile._id;
    const formData = new FormData();
    formData.append("profile", file);
    if (Object.keys(profile).length > 0) {
      dispatch(asyncProfileUpdate(id, formData));
    } else {
      dispatch(asyncSetProfile(formData));
    }
    setOpen(false);
  };
  const onCancel = () => {
    setOpen(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEdituserInfo = (companyInfo) => {
    setCompanyName(companyInfo.companyName);
    setCompanyEmail(companyInfo.contactEmail);
    setContactNumber(companyInfo.contactNumber);
    setCompanySize(companyInfo.companySize);
    setIndustry(companyInfo.industry);
    setCompanyType(companyInfo.companyType);
    setFoundedYear(companyInfo.foundedYear);
    setHeadQuarters(companyInfo.headQuarters);
    setModelOpen(true);
  };

  const handleInfoChange = (e) => {
    if (e.target.name === "company-name") {
      setCompanyName(e.target.value);
    } else if (e.target.name === "company-email") {
      setCompanyEmail(e.target.value);
    } else if (e.target.name === "contact-number") {
      setContactNumber(e.target.value);
    } else if (e.target.name === "industry") {
      setIndustry(e.target.value);
    } else if (e.target.name === "founded-year") {
      setFoundedYear(e.target.value);
    } else if (e.target.name === "company-type") {
      setCompanyType(e.target.value);
    } else if (e.target.name === "head-quarters") {
      setHeadQuarters(e.target.value);
    } else if (e.target.name === "company-size") {
      setCompanySize(e.target.value);
    }
  };

  const modelonOk = () => {
    const formData = {
      companyName: companyName,
      contactEmail: companyEmail,
      contactNumber: contactNumber,
      industry: industry,
      companySize: companySize,
      companyType: companyType,
      foundedYear: foundedYear,
      headQuarters: headQuarters,
    };
    dispatch(asyncUpdateCompany(companyInfo._id, formData));
    setModelOpen(false);
  };

  const modelonCancel = () => {
    setModelOpen(false);
  };

  return (
    <div>
      <div className="container profile-main-container">
        <div className="profile-container">
          <div className="company-profile-box">
            <div className="company-main-profile-box">
              <div className="company-profile-img-box">
                <div className="company-img-box">
                  {Object.keys(profile).length > 0 ? (
                    <img
                      className="profile-img"
                      src={`http://localhost:3999/api/upload-image/${profile.image}`}
                      alt="user profile"
                    />
                  ) : (
                    <Avatar
                      className="img-avatar"
                      size={200}
                      icon={<UserOutlined />}
                    />
                  )}
                </div>
                <div>
                  {Object.keys(profile).length > 0 ? (
                    <button onClick={handleUpdateClick}>Edit profile</button>
                  ) : (
                    <button onClick={handleAddClick}>Add profile</button>
                  )}
                </div>
              </div>
            </div>
            <div className="company-profile-info-box ">
              <div className="info-box">
                <div className="info-item">
                  <p className="info-text">
                    comapny-name: &rarr;
                    <span className="each-info">{companyInfo.companyName}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    industry: &rarr;
                    <span className="each-info">{companyInfo.industry}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    company-size: &rarr;
                    <span className="each-info">{companyInfo.companySize}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    company-Email: &rarr;
                    <span className="each-info">
                      {companyInfo.contactEmail}
                    </span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    Contact-number &rarr;
                    <span className="each-info">
                      {companyInfo.contactNumber}
                    </span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    founded-year: &rarr;
                    <span className="each-info">{companyInfo.foundedYear}</span>
                  </p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-item">
                  <p className="info-text">
                    company-type: &rarr;
                    <span className="each-info">{companyInfo.companyType}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    head-Quarters: &rarr;
                    <span className="each-info">
                      {companyInfo.headQuarters}
                    </span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    Managed-by: &rarr;
                    <span className="each-info">{user.username}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    user-email: &rarr;
                    <span className="each-info">{user.email}</span>
                  </p>
                </div>
                <div className="button-flex">
                  <div>
                    <button
                      onClick={() => {
                        handleEdituserInfo(companyInfo);
                      }}
                    >
                      Edit Info
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(removeAccount());
                        localStorage.removeItem("token");
                        localStorage.removeItem("role");
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            title="Add profile here"
            open={open}
            onOk={onOk}
            onCancel={onCancel}
          >
            <input type="file" name="file" onChange={handleFileChange} />
          </Modal>
          <Modal
            title="Edit company Information here"
            open={modelOpen}
            onOk={modelonOk}
            onCancel={modelonCancel}
          >
            <form className="info-form">
              <label>company-name:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="company-name"
                value={companyName}
              />
              <label>industry:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="industry"
                value={industry}
              />
              <label>company-size:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="company-size"
                value={companySize}
              />
              <label>company-email:</label>
              <input
                type="email"
                onChange={handleInfoChange}
                name="company-email"
                value={companyEmail}
              />
              <label>contact-number:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="contact-number"
                value={contactNumber}
              />
              <label>company-type:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="company-type"
                value={companyType}
              />
              <label>founded-year:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="founded-year"
                value={foundedYear}
              />
              <label>head-quarters:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="head-quarters"
                value={headQuarters}
              />
            </form>
          </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyProfile;

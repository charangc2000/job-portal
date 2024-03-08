import React, { useState, useEffect } from "react";
import { Avatar, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/index";

//STYLE
import "../../style/userprofile.css";
import "../../style/general.css";
import {
  asyncGetProfile,
  asyncProfileUpdate,
  asyncSetProfile,
} from "../../actions/profileAction";
import { asyncUpdateUserDetail } from "../../actions/userDetailAction";
import { removeAccount } from "../../actions/userAction";

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //for profile
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");

  useEffect(() => {
    dispatch(asyncGetProfile());
  }, [dispatch]);

  //for userInfo
  const [modelOpen, setModelOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [education, setEducation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [skills, setSkills] = useState([]);

  const { profile, user, userInfo } = useSelector((state) => {
    return state;
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

  const handleEdituserInfo = (userInfo) => {
    setFirstName(userInfo.firstName);
    setLastName(userInfo.lastName);
    setContact(userInfo.contact);
    setEducation(userInfo.education);
    setCurrentLocation(userInfo.currentLocation);
    setWorkExperience(userInfo.workExperience);
    setSkills(userInfo.skills.join(","));
    setModelOpen(true);
  };

  const handleInfoChange = (e) => {
    if (e.target.name === "first-name") {
      setFirstName(e.target.value);
    } else if (e.target.name === "last-name") {
      setLastName(e.target.value);
    } else if (e.target.name === "contact") {
      setContact(e.target.value);
    } else if (e.target.name === "work-experience") {
      setWorkExperience(e.target.value);
    } else if (e.target.name === "current-location") {
      setCurrentLocation(e.target.value);
    } else if (e.target.name === "education") {
      setEducation(e.target.value);
    } else if (e.target.name === "skills") {
      setSkills(e.target.value);
    }
  };

  const modelonOk = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      education: education,
      workExperience: workExperience,
      currentLocation: currentLocation,
      skills: skills.split(","),
    };
    dispatch(asyncUpdateUserDetail(userInfo._id, formData));
    setModelOpen(false);
  };

  const modelonCancel = () => {
    setModelOpen(false);
  };

  return (
    <div>
      <div className="container profile-main-container">
        <div className="profile-container">
          <div className="user-profile-box">
            <div className="user-main-profile-box">
              <div className="user-profile-img-box">
                <div className="user-img-box">
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
                    First-name: &rarr;
                    <span className="each-info">{userInfo.firstName}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    Last-name: &rarr;
                    <span className="each-info">{userInfo.lastName}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    contact: &rarr;
                    <span className="each-info">{userInfo.contact}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    work-experiance: &rarr;
                    <span className="each-info">{userInfo.workExperience}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    current-location &rarr;
                    <span className="each-info">
                      {userInfo.currentLocation}
                    </span>
                  </p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-item">
                  <p className="info-text">
                    education: &rarr;
                    <span className="each-info">{userInfo.education}</span>
                  </p>
                </div>
                <div className="info-item">
                  <p className="info-text">
                    skills: &rarr;
                    <span className="each-info">
                      {userInfo.skills !== undefined && (
                        <>{userInfo.skills.join(",")} </>
                      )}
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
                        handleEdituserInfo(userInfo);
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
            title="Edit user Information here"
            open={modelOpen}
            onOk={modelonOk}
            onCancel={modelonCancel}
          >
            <form className="info-form">
              <label>first-name:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="first-name"
                value={firstName}
              />
              <label>last-name:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="last-name"
                value={lastName}
              />
              <label>contact:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="contact"
                value={contact}
              />
              <label>current-location:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="current-location"
                value={currentLocation}
              />
              <label>education:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="education"
                value={education}
              />
              <label>work-experience:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="work-experience"
                value={workExperience}
              />
              <label>skills:</label>
              <input
                type="text"
                onChange={handleInfoChange}
                name="skills"
                value={skills}
              />
            </form>
          </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;

import React from "react";

//STYLE
import "../../style/general.css";
import "../../style/about.css";

const About = (props) => {
  return (
    <div className="container">
      <h3 className="about-heading">Explore</h3>
      <p className="about-description">
        A job portal application website is a comprehensive platform designed to
        facilitate the recruitment process for both job seekers and employers.
        It acts as a bridge between companies looking to hire and individuals
        searching for employment opportunities.
      </p>
      <ul className="portal-list">
        <li className="about-list-item">
          <img
            src="	https://c1.wallpaperflare.com/preview/144/259/752/dream-job-application-location-job.jpg"
            alt="for hiring"
          />
        </li>
        <li className="about-list-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/17/10/05/job-2860035_640.jpg"
            alt="job hiring"
          />
        </li>
        <li className="about-list-item">
          <img
            src="	https://img.freepik.com/premium-photo/job-search-c…line-employee-economy-occupationxa_36325-4500.jpg"
            alt="job hiring"
          />
        </li>
      </ul>
      <h1 className="primary-heading">For Job Seekers:</h1>
      <p className="user-description">
        <strong className="strong-text">User Profiles:</strong> Job seekers can
        create detailed profiles, showcasing their skills, educational
        background, work experience, and career preferences. This allows for a
        personalized experience, where the platform can recommend suitable job
        listings based on the profile.
      </p>
      <ul className="portal-list">
        <li className="about-list-item">
          <img
            src="https://octopuscrm.io/wp-content/uploads/2022/03/brent-morrell.png"
            alt="user profile-1"
          />
        </li>
        <li className="about-list-item">
          <img
            src="https://octopuscrm.io/wp-content/uploads/2022/03/finding-a-new-job.png"
            alt="user profile-2"
          />
        </li>
        <li className="about-list-item">
          <img
            src="	https://i.pinimg.com/originals/e1/b3/4e/e1b34e3efe822eb46f901b98d3ec5d79.png"
            alt="user profile-3"
          />
        </li>
      </ul>
      <p className="user-description">
        <strong className="strong-text">Resume Upload:</strong> Users have the
        option to upload their resumes, making it easier to apply for multiple
        positions without having to fill in their details each time.
      </p>
      <ul className="portal-list">
        <li className="about-list-item">
          <img
            src="https://img.freepik.com/free-psd/clean-modern-resume-portfolio-cv-template_120329-3603.jpg"
            alt="user resume-1"
          />
        </li>
        <li className="about-list-item">
          <img
            src="	https://www.cv-template.com/img/course/personal-based-cv-format.jpg"
            alt="user resume-2"
          />
        </li>
        <li className="about-list-item">
          <img
            src="	https://img.freepik.com/free-psd/professional-modern-minimal-resume-cv-template_501970-153.jpg"
            alt="user resume-3"
          />
        </li>
      </ul>
      <p className="user-description">
        <strong className="strong-text">Job Search:</strong> A powerful search
        engine allows candidates to filter job listings by keyword, location,
        industry, job type (full-time, part-time, freelance), and experience
        level, among other criteria.
      </p>
      <ul className="portal-list">
        <li className="about-list-item">
          <img
            src="		https://t4.ftcdn.net/jpg/04/71/38/67/360_F_471386788_yhzRs6ORO5a60RDOZNgyeh52SXR79NsS.jpg"
            alt="search engine-1"
          />
        </li>
        <li className="about-list-item">
          <img
            src="	https://dynamic.placementindia.com/blog_images/20180709172116_image1.jpg"
            alt="search engine-2"
          />
        </li>
      </ul>
      <p className="user-description">
        <strong className="strong-text">Application Tracking:</strong> Job
        seekers can track the status of their applications, receive updates on
        new job postings, and get notifications about potential matches or
        invitations to apply.
      </p>
    </div>
  );
};

export default About;

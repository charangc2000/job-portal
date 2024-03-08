import React from "react";

//STYLE
import "../../style/footer.css";

const Footer = (props) => {
  return (
    <div>
      <footer className="section-footer footer">
        <div className=" grid grid--footer">
          <div className="logo-col">
            <p className="footer-heading">Job-Portal</p>
            <ul className="social-links">
              <li>
                <a className="footer-link" href="#instagram">
                  <ion-icon
                    className="social-icon"
                    name="logo-instagram"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#facebook">
                  <ion-icon
                    className="social-icon"
                    name="logo-facebook"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#twitter">
                  <ion-icon
                    className="social-icon"
                    name="logo-twitter"
                  ></ion-icon>
                </a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; <span className="year">2024</span> by jobportal,
              Inc All rights reserved.
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a className="footer-link" href="mailto:hello@expense.com">
                  hello@jobportal.com
                </a>
              </p>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#account">
                  Create account
                </a>
              </li>
              <li>
                <a className="footer-link" href="#sign">
                  Sign in
                </a>
              </li>
              <li>
                <a className="footer-link" href="#iosapp">
                  iOS app
                </a>
              </li>
              <li>
                <a className="footer-link" href="#androidapp">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#aboutexpense">
                  About job-portal
                </a>
              </li>
              <li>
                <a className="footer-link" href="#buisness">
                  For job purpose
                </a>
              </li>
              <li>
                <a className="footer-link" href="#budgetpartners">
                  job seekers
                </a>
              </li>
              <li>
                <a className="footer-link" href="#careers">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#directory">
                  job directory
                </a>
              </li>
              <li>
                <a className="footer-link" href="#helpcenter">
                  Help center
                </a>
              </li>
              <li>
                <a className="footer-link" href="#privacy">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

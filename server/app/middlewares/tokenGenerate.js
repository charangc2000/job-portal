const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

const tokenGenerate = (req, res, next) => {
  const { body } = req;
  User.findOne({ email: body.email }).then((user) => {
    if (user === null) {
      res.json({ errors: "invalid email or password" });
    }
    if (user) {
      bcryptjs
        .compare(body.password, user.password)
        .then((match) => {
          if (match) {
            const tokenData = {
              _id: user._id,
              username: user.username,
              email: user.email,
              role: user.role,
            };
            const token = jwt.sign(tokenData, "charan@123", {
              expiresIn: "20d",
            });
            req.token = { token: `bearer ${token}`, role: tokenData.role };
            next();
          } else {
            res.json("invalid email or password");
          }
        })
        .catch((err) => {
          res.json(err);
        });
    }
  });
};

const userAuthentication = (req, res, next) => {
  let token = req.header("Authorization");
  if (token) {
    token = token.split(" ")[1];
    try {
      const tokenData = jwt.verify(token, "charan@123");
      User.findById(tokenData._id)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      res.json(err);
    }
  } else {
    res.json({ error: "something went wrong in token" });
  }
};

userRecruiterAuthorization = (req, res, next) => {
  let token = req.header("Authorization");
  if (token) {
    token = token.split(" ")[1];
    try {
      const tokenData = jwt.verify(token, "charan@123");
      User.findById(tokenData._id)
        .then((user) => {
          if (user.role === "Recruiter") {
            next();
          } else {
            res.json({ message: "Not Authorized" });
          }
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      res.json(err);
    }
  } else {
    res.json({ error: "something went wrong in token" });
  }
};

const userJobseekerAuthorization = (req, res, next) => {
  let token = req.header("Authorization");
  if (token) {
    token = token.split(" ")[1];
    try {
      const tokenData = jwt.verify(token, "charan@123");
      User.findById(tokenData._id)
        .then((user) => {
          if (user.role === "Jobseeker") {
            next();
          } else {
            res.json({ message: "Not Authorized" });
          }
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      res.json(err);
    }
  } else {
    res.json({ error: "something went wrong in token" });
  }
};

module.exports = {
  tokenGenerate,
  userAuthentication,
  userRecruiterAuthorization,
  userJobseekerAuthorization,
};

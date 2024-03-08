const User = require("../models/User");

const userController = {};

userController.register = (req, res) => {
  const { body } = req;
  const user = new User(body);
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

userController.login = (req, res) => {
  res.json(req.token);
};

userController.account = (req, res) => {
  res.json(req.user);
};

module.exports = userController;

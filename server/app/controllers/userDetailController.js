const UserDetail = require("../models/UserDetail");

const userDetailController = {};

userDetailController.create = (req, res) => {
  const { body } = req;
  body.userId = req.user._id;
  const userDetail = new UserDetail(body);
  userDetail
    .save()
    .then((userDetail) => {
      res.json(userDetail);
    })
    .catch((err) => {
      res.json(err);
    });
};

userDetailController.show = (req, res) => {
  UserDetail.findOne({ userId: req.user._id })
    .then((userDetail) => {
      res.json(userDetail);
    })
    .catch((err) => {
      res.json(err);
    });
};

userDetailController.update = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  body.userId = req.user._id;
  UserDetail.findOneAndUpdate(
    { _id: id, userId: req.user._id },
    { $set: body },
    { new: true, runValidators: true }
  )
    .then((userDetail) => {
      res.json(userDetail);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = userDetailController;

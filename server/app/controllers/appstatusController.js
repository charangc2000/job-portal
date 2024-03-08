const AppStatus = require("../models/AppStatus");

const appstatusController = {};

appstatusController.create = (req, res) => {
  const { body } = req;
  body.userId = req.user._id;
  const appstatus = new AppStatus(body);
  appstatus
    .save()
    .then((appstatus) => {
      res.json(appstatus);
    })
    .catch((err) => {
      res.json(err);
    });
};

appstatusController.list = (req, res) => {
  AppStatus.find()
    .then((appstatus) => {
      res.json(appstatus);
    })
    .catch((err) => {
      res.json(err);
    });
};

appstatusController.update = (req, res) => {
  const { body } = req;
  const { id } = req.params;
  AppStatus.findOneAndUpdate(
    { _id: id, applicationId: body.applicationId, userId: body.userId },
    { $set: body },
    { new: true, runValidators: true }
  )
    .then((appstatus) => {
      res.json(appstatus);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = appstatusController;

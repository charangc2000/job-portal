const Application = require("../models/Application");

const applicationController = {};

applicationController.create = (req, res) => {
  const body = {
    jobId: req.body.jobId,
    companyId: req.body.companyId,
    applicantName: req.body.applicantName,
    applicantNumber: req.body.applicantNumber,
    applicantEmail: req.body.applicantEmail,
    applicantResume: req.file.filename,
  };
  body.userId = req.user._id;
  const application = new Application(body);
  application
    .save()
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.json(err);
    });
};

applicationController.list = (req, res) => {
  Application.find({ userId: req.user._id })
    .populate("jobId")
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.json(err);
    });
};

applicationController.show = (req, res) => {
  Application.find()
    .populate("jobId")
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.json(err);
    });
};

applicationController.filter = (req, res) => {
  const { id } = req.params;
  Application.find({ companyId: id })
    .populate("jobId")
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = applicationController;

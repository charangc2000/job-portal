const JobPost = require("../models/JobPost");

jobpostController = {};

jobpostController.create = (req, res) => {
  const { body } = req;
  const jobPost = new JobPost(body);
  jobPost
    .save()
    .then((jobPost) => {
      res.json(jobPost);
    })
    .catch((err) => {
      res.json(err);
    });
};

jobpostController.list = (req, res) => {
  JobPost.find()
    .then((jobpost) => {
      res.json(jobpost);
    })
    .catch((err) => {
      res.json(err);
    });
};

jobpostController.update = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  JobPost.findOneAndUpdate(
    { _id: id, companyId: body.companyId },
    { $set: body },
    { new: true, runValidators: true }
  )
    .then((jobpost) => {
      res.json(jobpost);
    })
    .catch((err) => {
      res.json(err);
    });
};

jobpostController.destroy = (req, res) => {
  const { id } = req.params;
  JobPost.findOneAndDelete({ _id: id })
    .then((jobpost) => {
      res.json(jobpost);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = jobpostController;

const Company = require("../models/Company");

const companyController = {};

companyController.create = (req, res) => {
  const { body } = req;
  body.recruiterId = req.user._id;
  const company = new Company(body);
  company
    .save()
    .then((company) => {
      res.json(company);
    })
    .catch((err) => {
      res.json(err);
    });
};

companyController.show = (req, res) => {
  Company.findOne({ recruiterId: req.user._id })
    .then((company) => {
      res.json(company);
    })
    .catch((err) => {
      res.json(err);
    });
};

companyController.update = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  body.recruiterId = req.user._id;
  Company.findOneAndUpdate(
    { _id: id, recruiterId: body.recruiterId },
    { $set: body },
    { new: true, runValidators: true }
  )
    .then((company) => {
      res.json(company);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = companyController;

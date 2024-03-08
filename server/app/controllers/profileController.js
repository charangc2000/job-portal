const Profile = require("../models/Profile");

const profileController = {};

profileController.create = (req, res) => {
  const body = { image: req.file.filename, userId: req.user._id };
  const profile = new Profile(body);
  profile
    .save()
    .then((profile) => {
      res.json(profile);
    })
    .catch((err) => {
      res.json(err);
    });
};

profileController.show = (req, res) => {
  Profile.findOne({ userId: req.user._id })
    .then((profile) => {
      res.json(profile);
    })
    .catch((err) => {
      res.json(err);
    });
};

profileController.update = (req, res) => {
  if (req.file) {
    const { id } = req.params;
    const body = { image: req.file.filename, userId: req.user._id };
    Profile.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      { $set: body },
      { new: true, runValidators: true }
    )
      .then((profile) => {
        res.json(profile);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json("something went wrong in your profile file");
  }
};

module.exports = profileController;

const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      minlength: 4,
      maxlength: 20,
      required: [true, "name should be required"],
    },
    email: {
      type: String,
      required: [true, "email should be required"],
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: function () {
          return "inavalid email format";
        },
      },
    },
    password: {
      type: String,
      required: [true, "password should be required"],
      validate: {
        validator: function (value) {
          return validator.isStrongPassword(value);
        },
        message: function () {
          return "invalid password format";
        },
      },
    },
    role: {
      type: String,
      enum: ["Jobseeker", "Recruiter"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  bcryptjs.genSalt().then((salt) => {
    bcryptjs.hash(user.password, salt).then((encrypted) => {
      this.password = encrypted;
      next();
    });
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;

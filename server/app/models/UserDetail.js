const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const detailSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    firstName: {
      type: String,
      required: [true, "username should be required"],
    },
    contact: {
      type: Number,
      required: [true, "number should be required"],
    },
    currentLocation: {
      type: String,
      required: [true, "email should be required"],
    },
    workExperience: {
      type: String,
      required: [true, "location should be required"],
    },
    education: {
      type: String,
      required: [true, "location should be required"],
    },
    skills: {
      type: Array,
      required: [true, "status should be required"],
    },
    lastName: {
      type: String,
      required: [true, "status should be required"],
    },
  },
  { timestamps: true }
);

const UserDetail = mongoose.model("UserDetail", detailSchema);

module.exports = UserDetail;

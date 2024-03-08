const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postingSchema = new Schema(
  {
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    jobDesignation: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    workExperience: {
      type: Object,
      required: true,
    },
    salary: {
      type: Object,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["hybrid", "remote"],
      required: true,
    },
  },
  { timestamps: true }
);

const JobPost = mongoose.model("JobPost", postingSchema);

module.exports = JobPost;

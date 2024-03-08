const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "JobPost",
    required: true,
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  applicantName: {
    type: String,
    required: true,
  },
  applicantNumber: {
    type: Number,
    required: true,
  },
  applicantEmail: {
    type: String,
    required: true,
  },
  applicantResume: {
    type: String,
    required: true,
  },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;

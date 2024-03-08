const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appStatusSchema = new Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applicationId: {
    type: Schema.Types.ObjectId,
    ref: "Application",
    required: true,
  },
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "JobPost",
    required: true,
  },
  submitted: {
    type: Boolean,
    default: false,
  },
  underReview: {
    type: Boolean,
    default: false,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  rejected: {
    type: Boolean,
    default: false,
  },
});

const AppStatus = mongoose.model("AppStatus", appStatusSchema);

module.exports = AppStatus;

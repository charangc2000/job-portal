const express = require("express");
const userController = require("../app/controllers/userController");
const jobpostController = require("../app/controllers/jobpostController");
const {
  tokenGenerate,
  userAuthentication,
  userJobseekerAuthorization,
  userRecruiterAuthorization,
} = require("../app/middlewares/tokenGenerate");
const userDetailController = require("../app/controllers/userDetailController");
const uploadImage = require("../app/middlewares/upload-image");
const upload = require("../app/middlewares/upload");
const profileController = require("../app/controllers/profileController");
const applicationController = require("../app/controllers/applicationController");
const appstatusController = require("../app/controllers/appstatusController");
const companyController = require("../app/controllers/companyController");
const router = express.Router();

//USER
router.post("/api/user/register", userController.register);
router.post("/api/user/login", tokenGenerate, userController.login);
router.get("/api/user/account", userAuthentication, userController.account);

//COMPANY
router.post(
  "/api/company/register",
  userAuthentication,
  userRecruiterAuthorization,
  companyController.create
);
router.get(
  "/api/company/account",
  userAuthentication,
  userRecruiterAuthorization,
  companyController.show
);

router.put(
  "/api/company/account/:id",
  userAuthentication,
  userRecruiterAuthorization,
  companyController.update
);

//POSTING JOBS
router.post(
  "/api/job-posting",
  userAuthentication,
  userRecruiterAuthorization,
  jobpostController.create
);
router.get("/api/job-posting", userAuthentication, jobpostController.list);
router.put(
  "/api/job-posting/:id",
  userAuthentication,
  userRecruiterAuthorization,
  jobpostController.update
);

//USER-DETAIL
router.post(
  "/api/user-detail",
  userAuthentication,
  upload.single("file"),
  userDetailController.create
);
router.get(
  "/api/user-detail",
  userAuthentication,
  userJobseekerAuthorization,
  userDetailController.show
);
router.put(
  "/api/user-detail/:id",
  userAuthentication,
  userDetailController.update
);

//UPLOAD PROFILE
router.post(
  "/api/upload-image",
  userAuthentication,
  uploadImage.single("profile"),
  profileController.create
);
router.get("/api/upload-image", userAuthentication, profileController.show);
router.put(
  "/api/upload-image/:id",
  userAuthentication,
  uploadImage.single("profile"),
  profileController.update
);

//UPLOAD APPLICATION
router.post(
  "/api/application-upload",
  userAuthentication,
  upload.single("file"),
  applicationController.create
);
router.get(
  "/api/application-upload",
  userAuthentication,
  applicationController.list
);

router.get(
  "/api/application",
  userAuthentication,
  userRecruiterAuthorization,
  applicationController.show
);

//APP-STATUS
router.post(
  "/api/app-status",
  userAuthentication,
  userJobseekerAuthorization,
  appstatusController.create
);

router.put(
  "/api/app-status/:id",
  userAuthentication,
  userRecruiterAuthorization,
  appstatusController.update
);

router.get("/api/app-status", userAuthentication, appstatusController.list);

module.exports = router;

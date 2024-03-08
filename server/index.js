const express = require("express");
const cors = require("cors");
require("dotenv").config();

const configureDb = require("./config/database");
const router = require("./config/routes");

const app = express();
const port = process.env.PORT;

configureDb();
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/api/user-detail", express.static("files"));
app.use("/api/application-upload", express.static("files"));
app.use("/api/upload-image", express.static("upload/images"));

app.listen(port, () => {
  console.log("server running on the port", port);
});

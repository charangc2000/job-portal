const mongoose = require("mongoose");
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;

const configureDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(`mongodb://${db_host}:${db_port}/${db_name}`)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = configureDB;

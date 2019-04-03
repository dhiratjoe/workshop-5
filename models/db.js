const mongoose = require("mongoose");

//copy from CONNECT (MongoDB Atlas)
const dbURI =
 "mongodb+srv://dtjoe:bO6jndRlFffvxLnv@cluster0-4fhbf.mongodb.net/test?retryWrites=true";

const options = {
  useNewUrlParser: true,
  dbName: "INFO30005"
};

mongoose.connect(dbURI, options).then(
 () => {
   console.log("Database connection established!");
 },
 err => {
   console.log("Error connecting Database instance due to: ", err);
 }
);

require('./user.js');

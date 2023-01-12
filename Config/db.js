const moogoose = require("mongoose");

const url = "mongodb://localhost/profile";

moogoose.connect(url);
moogoose.connection
  .on("open", () => {
    console.log("Connected");
  })
  .once("error", (error) => {
    console.log("An error occured", error);
  });

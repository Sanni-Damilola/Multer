const moogoose = require("mongoose");

const Schema = moogoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
    },
    About: {
      type: String,
    },
  },
  { timeStamps: true }
);

const data = moogoose.model("Profile", Schema);

module.exports = data;

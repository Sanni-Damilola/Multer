const express = require("express");

const app = express();
const port = 2001;
app.use(express.json());
const userouter = require("./Routes/route");

require("./Config/db");

app.all("/", (req, res) => {
  res.status(200).json({
    message: "running",
  });
});

app.use("/api", userouter);

app.listen(port, () => {
  console.log("done");
});

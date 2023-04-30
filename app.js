//step 1
const express = require("express");
//step 2
const app = express();
//step 4
app.get("/name", function (req, res) {
  res.send("wellcome Arwa Alharbi");
});
//step 3
app.listen(8000, function () {
  console.log("listening");
});

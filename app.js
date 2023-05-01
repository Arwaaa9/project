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

app.set('view engine', 'ejs');
app.get("/testHtml" , (req, res) => {
res.sendFile(__dirname + "/test.html");
});

app.get("/testingEjs" , (req, res) => {
  const mark = "mark";
  res.render("introToEjs.ejs", { student: mark});
});


const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const spawn = require("child_process").spawn;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("index.ejs",{result : -1});
});
app.post("/", function (req, res) {
  email = req.body.email;
  var process = spawn("python", ["./model.py", email,]);
  process.stdout.on("data", function (data) {
    res.render("index.ejs",{result : data})
  });
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

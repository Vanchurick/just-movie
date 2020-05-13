const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/just-movie"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/just-movie/index.html"));
});

app.listen(process.env.PORT || 8080);

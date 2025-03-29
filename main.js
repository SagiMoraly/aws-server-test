const express = require("express");
const app = express();
port = process.env.PORT || 8080;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.path(_dirname + "/public/index.html"));
});

app.listen(port);

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("dist"));
app.listen(port, function() {
  console.log(`Listening to port ${port}.`);
});

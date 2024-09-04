let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send("Hello Abdulla how are you");
});
app.get("/about", (req, res) => {
  res.send("Hello this is About page");
});
app.get("/career", (req, res) => {
  res.send("hello this is career page");
});
app.listen(5000, () => {
  console.log("the server is listening on posrt no 5000");
});

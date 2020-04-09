const express = require("express"),
  app = express();
let path = require("path");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  // res.send("Hello World!");
  console.log("looking for something in the database");
  next();
});
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));

// handling unkown requests
app.use((erq, res) => {
  res.status(404).send("Uknown Request");
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

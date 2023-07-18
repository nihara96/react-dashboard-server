const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
const path = require("path");

app.use("/", express.static(path.join(__dirname, "/build")));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is Running at port " + PORT);
});
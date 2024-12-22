const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/public")));
app.get("/videos", () => {
  return "hello world";
});
app.post("/videos", () => {
  return "hello world2";
});
app.listen(3333, () => {
  console.log("Server running on 3333");
});

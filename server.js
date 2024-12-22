const express = require("express");
const UUID = require("node:crypto");
const app = new express();

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.put("/clicked", (req, res) => {
  res.send(UUID.randomUUID());
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

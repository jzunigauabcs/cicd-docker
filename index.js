require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Hola mundo!</h1>");
});

app.listen(PORT, () => {
  console.log(`Run port ${PORT}`);
});

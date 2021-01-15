const express = require("express");
const app = express();
const mysql = require("mysql");
const pool = require("./sql/connection");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/books", (req, res) => {
  pool.query("SELECT * FROM books", (err, row) => {
    if (err) throw new Error(err);
    return res.json(rows);
  });
});

app.listen(port, console.log(`I am listening on port ${port}`));

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "sakuramiko",
  database: "web",
});

app.get("/producer", (req, res) => {
  db.query(
    "SELECT producer FROM video GROUP BY producer ORDER BY producer DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/random", (req, res) => {
  db.query("SELECT * FROM video ORDER BY RAND () LIMIT 5 ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/series", (req, res) => {
  let series = req.query.series;
  let id = req.query.id;

  db.query(
    "SELECT * FROM web.video where series ='" +
      series +
      "' ORDER BY id ='" +
      id +
      "' DESC,date DESC, id DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/producerVideos", (req, res) => {
  let param = req.query.producer;
  let pages = req.query.pages;
  pages = pages * 5;

  db.query(
    "SELECT * FROM video WHERE producer = '" +
      param +
      "' ORDER BY date DESC, id DESC"+
      " LIMIT " +
      pages +
      ", 5",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
  return;
});

app.get("/video", (req, res) => {
  let pages = req.query.pages;
  pages = pages * 5;

  db.query(
    "SELECT * FROM video ORDER BY date DESC, id DESC" +
      " LIMIT " +
      pages +
      ", 5",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(4000, () => {
  console.log("server running in 4000");
});

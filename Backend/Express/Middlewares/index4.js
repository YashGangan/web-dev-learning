import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded ({extended: true}));

function makeBandName(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(makeBandName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your BandName is:</h1><h3>${bandName}</h3>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

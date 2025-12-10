const express = require("express");
const path = require("path");
var fs = require("fs");
const http = require("http");
const cors = require("cors");
const PORT = 8080;

const app = express();

const router = express.Router();
let directory = "dist";

app.use("/", express.static("dist"));
app.use(cors());

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, directory, "index.html"));
});

router.get("/csv/:file", (req, res) => {
  try {
    const { file } = req.params;
    const table = fs.readFileSync(`./csvData/${file}`).toString();
    const json = table.split("\n").map((item) => item.split(","));
    res.json(json);
  } catch (e) {
    console.log(e);
    res.json({});
  }
});

router.post("/upload", (req, res) => {});

app.use("/", router);

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log("HTTP server starting on port : 8080");
});

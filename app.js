const express = require("express");
const app = express();
const path = require("path");
var fs = require("fs");
const http = require("http");
const cors = require("cors");
const port = 8000;

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
    const json = table.split("\n").map(item => item.split(","));
    res.json(json);
  } catch (e) {
    console.log(e);
    res.json({});
  }
});

router.post("/upload", (req, res) => {});

app.use("/", router);
var httpServer = http.createServer(app);
httpServer.listen(8080, () => {
  console.log("HTTP server starting on port : 8080");
});

const express = require("express");
const path = require("path");
var fs = require("fs");
const http = require("http");
const cors = require("cors");
const PORT = 9000;

const app = express();

const router = express.Router();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use("/dist", express.static("dist"));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
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
  console.log("HTTP server starting on port : http://localhost:" + PORT);
});

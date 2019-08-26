const express = require('express');
const app = express();
const path = require('path');
var fs = require("fs");
const https = require('https');
const http = require('http');
var key = fs.readFileSync('./server.key');
var cert = fs.readFileSync('./server.cert');
var options = {
  key: key,
  cert: cert
};
const port = 8000;



let data;

try {
   data = fs.readFileSync('./data.json')
   data = JSON.parse(data)
} catch(e) {
    return e
}

// require('dotenv').config()
const router = express.Router();
let directory = "dist"
// if(process.env.DEV) {
//     app.use(express.static('src'));
//     directory = "src"
// }
// else 
app.use("/", express.static('dist'));
app.use("/images", express.static('images'));
console.log(process.env.DEV)
router.get('/', (req, res) => {
    console.log("Sent")
    res.sendFile(path.join(__dirname, directory, 'index.html'));
});
router.get('/info', requireHTTPS,  (req, res) => {
    console.log("Sent")
    console.log(req.query)
    res.sendFile(path.join(__dirname, directory, 'index.html'));
});
router.get('/data', (req, res) => {
    console.log("Sent")
    const { name } = req.query
   console.log(data[name])
    res.json( data[name]);
});
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
      return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
  }
app.use('/', router);
var server = https.createServer(options, app);
var httpServer = http.createServer(app);
httpServer.listen(8080, () => {
    console.log("HTTP server starting on port : 8080")
})
server.listen(port, () => {
  console.log("server starting on port : " + port)
});
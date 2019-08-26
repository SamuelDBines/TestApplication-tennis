const express = require('express');
const app = express();
const path = require('path');
var fs = require("fs");
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
router.get('/info', (req, res) => {
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
app.use('/', router);
app.listen(3000, () => console.log('Gator app listening on port 3000!'));
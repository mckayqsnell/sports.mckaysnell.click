const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lee:leelee@cluster0.galbe.mongodb.net/test', {
  useNewUrlParser: true
});

app.post('/api/datas', async (req, res) => {
  const data = new Data({
    name: req.body.name,
    netid: req.body.netid,
    number:req.body.number,
    team:req.body.team,
    email:req.body.email,
    color:req.body.color,
    path: req.body.path,
  });
  try {
    await data.save();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the datas in the museum.
app.get('/api/datas', async (req, res) => {
  try {
    let datas = await Data.find();
    res.send(datas);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for datas in the museum: a title and a path to an image.
const dataSchema = new mongoose.Schema({
  name: String,
  netid: String,
  number: String,
  team: String,
  email:String,
  color:String,
  path:String,
});

// Create a model for datas in the museum.
const Data = mongoose.model('Data', dataSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.delete('/api/datas/:id', async (req, res) => {
  try {
    await Data.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/datas/:id', async (req, res) => {
  try {
    let data = await Data.findOne({
      _id: req.params.id
    });
    data.name = req.body.name;
    data.netid = req.body.netid;
    data.number = req.body.number;
    data.team = req.body.team;
    data.email = req.body.email;
    data.color = req.body.color;
    data.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000,() => console.log("Server listening at port 3000"));
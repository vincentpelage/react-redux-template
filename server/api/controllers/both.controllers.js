const axios = require('axios');
const Model = require('../models/apiurl');
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://samtestuser:qsd@ds237445.mlab.com:37445/weatherapp', {
  useMongoClient: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: cannot connect to my DB'));
db.once('open', () => {
  console.log('connected to the DB :)');
});

const Url = Model;
Url.find({ url: 'http://api.timezonedb.com/v2/get-time-zone?key=1LYUJ5AOD7V0&format=json&by=zone&zone=Australia/Sydney' }, (err, url) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log(url[0]);
  }
});

module.exports.bothGetAll = (req, res) => {
  const apiUrl = req.body.value;

  const newUrl = new Url({ url: apiUrl });
  newUrl.save((err, savedUrl) => {
    if (err) {
      console.error(err);
      return err;
    }
    console.log(savedUrl);
  });

  axios.get(apiUrl)
    .then((response) => {
      res.send(JSON.stringify(response.data));
    });
};

module.exports.parisGetAll = (req, res) => {
  const url = 'http://api.openweathermap.org/data/2.5/forecast?id=2988507&units=metric&APPID=3690c08b9243ba14aa00a12785524dd3';
  axios.get(url)
    .then((response) => {
      res.send(JSON.stringify(response.data));
    });
};

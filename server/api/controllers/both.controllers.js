const axios = require('axios');

module.exports.bothGetAll = (req, res) => {
  const url = req.body.value;
  axios.get(url)
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

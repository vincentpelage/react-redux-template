// Import
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Server
const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Get
app.post('/', (req, res) => {
	const url = req.body.value;
	console.log(req)
	axios.get(url)
	.then((response) => {
		console.log(JSON.stringify(response.data))
		res.send(JSON.stringify(response.data));
	})
})

// Start on :3000
app.listen(3000, function(){
  console.log('App is running');
});

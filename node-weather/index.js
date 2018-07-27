const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'b01a88167ff1532df4d88d22041f06e0';
let city = argv.c || 'paris';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

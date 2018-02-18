const request = require('request');

request(
  {
    url:
      'https://maps.googleapis.com/maps/api/geocode/json?address=new%20era%20society%20pune',
    json: true
  },
  (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
  }
);

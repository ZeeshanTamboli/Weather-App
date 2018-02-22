const request = require('request');

module.exports = {
  getWeather(lat, lng, callback) {
    request(
      {
        url: `https://api.darksky.net/forecast/451f8e91f354a5068a852377d9b4040d/${lat},${lng}`,
        json: true
      },
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          });
        } else {
          callback('Unable to fetch weather.');
        }
      }
    );
  }
};

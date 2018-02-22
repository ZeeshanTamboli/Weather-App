// const yargs = require('yargs');
const request = require('request');

// //Requiring files
// const geocode = require('./geocode/geocode');

// const argv = yargs
//   .option({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h').argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

//451f8e91f354a5068a852377d9b4040d

request(
  {
    url: `https://api.darksky.net/forecast/451f8e91f354a5068a852377d9b4040d/18.4807627,73.8724301`,
    json: true
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(`Current Temperature: ${body.currently.temperature}`);
    } else {
      console.log('Unable to fetch weather.');
    }
  }
);

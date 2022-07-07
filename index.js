// index.js
const { nextISSTimesForMyLocation } = require('./iss');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(currentIp, (error,data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinate:' , data);
// });

// fetchISSFlyOverTimes({ latitude: 43.653226, longitude: -79.3831843 }, (error,data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned passing time:' , data);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  passTimes.forEach(element => {
    console.log(`Next pass at ${Date(element.risetime)} for ${element.duration} seconds!`);
  });

});
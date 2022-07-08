const { nextISSTimesForMyLocation } = require("./iss_promised");
nextISSTimesForMyLocation()
  .then(body => {
    body.forEach(element => {
      console.log(`Next pass at ${Date(element.risetime)} for ${element.duration} seconds!`);
    });
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });


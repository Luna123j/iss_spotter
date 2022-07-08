const request = require('request-promise-native');

const fetchMyIP = function() {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function(body) {
  const body2 = JSON.parse(body).ip;
  return request(`https://ipwho.is/${body2}`);
};

const fetchISSFlyOverTimes = function(body) {
  const parsedBody = JSON.parse(body);
  const coords = { latitude: parsedBody.latitude, longitude: parsedBody.longitude };
  return request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      return JSON.parse(body).response;
    });

};

module.exports = {nextISSTimesForMyLocation};
const axios = require("axios");

const BASE_URL = "http://localhost:5001";

function getAllNames() {
  axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => {
      const result = response.data.map((constellation) => {
        return constellation.name;
      });
      console.log(result);
    });
}

function getConstellationsByQuadrant(quadrant) {
  axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => {
      const result = response.data.filter((constellation) => {
        return constellation.quadrant == quadrant;
      });
      console.log(result);
    });
}

getAllNames();
getConstellationsByQuadrant("SQ1");

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};


import getNeighborhoodsList from './2-arrow';

/* eslint new-cap: ["error", { "newIsCap": false }] */

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);

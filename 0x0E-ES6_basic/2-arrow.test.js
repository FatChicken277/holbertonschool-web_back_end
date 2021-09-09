import getNeighborhoodsList from './2-arrow';

/* eslint new-cap: ["error", { "newIsCap": false }] */

describe('getNeighborhoodsList', () => {
  it('should return the list of neighborhoods with new values', () => {
    expect.assertions(1);

    const neighborhoodsList = new getNeighborhoodsList();
    const res = neighborhoodsList.addNeighborhood('Noe Valley');

    expect(res).toStrictEqual(['SOMA', 'Union Square', 'Noe Valley']);
  });
});

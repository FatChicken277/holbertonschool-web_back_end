import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  /* eslint-disable no-unused-vars */
  const a = new TestBuilding(200);
  /* eslint-enable no-unused-vars */
} catch (err) {
  console.log(err);
}

import * as redis from 'redis';

// no need to use promisify, according to documentation https://github.com/NodeRedis/node-redis

(async () => {
  const client = redis.createClient();

  client.on('connect', () => {
    // eslint-disable-next-line no-console
    console.log('Redis client connected to the server');
  });

  client.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.log('Redis client not connected to the server:', err.message);
  });

  function setNewSchool(schoolName, value) {
    client.set(schoolName, value, redis.print);
  }

  async function displaySchoolValue(schoolName) {
    // eslint-disable-next-line no-console
    console.log(await client.get(schoolName));
  }

  await client.connect();

  displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  displaySchoolValue('HolbertonSanFrancisco');
})();

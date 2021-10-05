import redis from 'redis';

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

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, result) => {
    // eslint-disable-next-line no-console
    console.log(result);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

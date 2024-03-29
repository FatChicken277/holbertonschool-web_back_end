import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();
const asyncGet = promisify(client.get).bind(client);

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
  console.log(await asyncGet(schoolName));
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

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

const key = 'HolbertonSchools';

client.hset(key, 'Portland', 50, redis.print);
client.hset(key, 'Seattle', 80, redis.print);
client.hset(key, 'New York', 20, redis.print);
client.hset(key, 'Bogota', 20, redis.print);
client.hset(key, 'Cali', 40, redis.print);
client.hset(key, 'Paris', 2, redis.print);

client.hgetall(key, (err, values) => {
  // eslint-disable-next-line no-console
  console.log(values);
});

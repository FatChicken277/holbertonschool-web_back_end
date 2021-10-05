import { createClient } from 'redis';

(async () => {
  const client = createClient();

  client.on('connect', () => {
    // eslint-disable-next-line no-console
    console.log('Redis client connected to the server');
  });

  client.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.log('Redis client not connected to the server:', err.message);
  });

  await client.connect();
})();

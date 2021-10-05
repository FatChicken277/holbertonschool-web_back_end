import redis from 'redis';

const publisher = redis.createClient();

publisher.on('connect', () => {
  // eslint-disable-next-line no-console
  console.log('Redis client connected to the server');
});

publisher.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log('Redis client not connected to the server:', err.message);
});

function publishMessage(message, time) {
  setTimeout(() => {
    // eslint-disable-next-line no-console
    console.log(`About to send ${message}`);
    publisher.publish('holberton school channel', message);
  }, time);
}

publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);

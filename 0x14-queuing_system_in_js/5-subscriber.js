import redis from 'redis';

const subscriber = redis.createClient();

subscriber.on('connect', () => {
  // eslint-disable-next-line no-console
  console.log('Redis client connected to the server');
});

subscriber.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log('Redis client not connected to the server:', err.message);
});

const holbertonChannel = 'holberton school channel';

subscriber.on('message', (channel, message) => {
  if (channel !== holbertonChannel) {
    return;
  }

  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe();
    subscriber.quit();
  }

  // eslint-disable-next-line no-console
  console.log(message);
});

subscriber.subscribe(holbertonChannel);

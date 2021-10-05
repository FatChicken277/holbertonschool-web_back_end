import kue from 'kue';

const queue = kue.createQueue();

const data = {
  phoneNumber: '99999999999',
  message: 'testing',
};

const job = queue.create('push_notification_code', data);

job.save((err) => {
  if (!err) {
    // eslint-disable-next-line no-console
    console.log(`Notification job created: ${job.id}`);
  }
});

job.on('complete', () => {
  // eslint-disable-next-line no-console
  console.log('Notification job completed');
});

job.on('failed', () => {
  // eslint-disable-next-line no-console
  console.log('Notification job failed');
});

import kue from 'kue';

const queue = kue.createQueue();

function sendNotification(phoneNumber, message) {
  // eslint-disable-next-line no-console
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

queue.process('push_notification_code', (job) => {
  sendNotification(job.data.phoneNumber, job.data.message);
});

function NewJobInQueue(data, queue) {
  const job = queue.create('push_notification_code_3', data);

  job.save((err) => {
    if (!err) {
      // eslint-disable-next-line no-console
      console.log(`Notification job created: ${job.id}`);
    }
  });

  job.on('complete', () => {
    // eslint-disable-next-line no-console
    console.log(`Notification job #${job.id} completed`);
  });

  job.on('failed', (errorMessage) => {
    // eslint-disable-next-line no-console
    console.log(`Notification job #${job.id} failed: ${errorMessage}`);
  });

  job.on('progress', (progress) => {
    // eslint-disable-next-line no-console
    console.log(`Notification job #${job.id} ${progress}% complete`);
  });
}

export default function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  jobs.forEach((element) => NewJobInQueue(element, queue));
}

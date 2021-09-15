import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userResponse = signUpUser(firstName, lastName);
  const photoResponse = uploadPhoto(fileName);

  return Promise.all([userResponse, photoResponse].map((p) => p.catch((e) => e))).then((values) => {
    const responses = [];

    for (let value of values) {
      let status = 'fulfilled';

      if (value instanceof Error) {
        status = 'rejected';
        value = value.toString();
      }

      responses.push({ status, value });
    }

    return responses;
  });
}

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userResponse = signUpUser(firstName, lastName);
  const photoResponse = uploadPhoto(fileName);

  return Promise.allSettled([userResponse, photoResponse]).then((values) => {
    for (const value of values) {
      if (value.reason !== undefined) {
        value.value = value.reason.toString();
        delete value.reason;
      }
    }

    return values;
  });
}
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userResponse = signUpUser(firstName, lastName);
  const photoResponse = uploadPhoto(fileName);

  return Promise.all([userResponse, photoResponse])
    .then((values) => console.log(values))
    .catch((err) => console.error(err));
}

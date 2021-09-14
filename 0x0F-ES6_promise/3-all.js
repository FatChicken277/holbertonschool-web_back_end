import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoResponse = uploadPhoto();
  const userResponse = createUser();

  return Promise.all([photoResponse, userResponse])
    .then((v) => console.log(`${v[0].body} ${v[1].firstName} ${v[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}

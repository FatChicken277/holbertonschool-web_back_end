import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const reponse = {};

  try {
    reponse.photo = await uploadPhoto();
    reponse.user = await createUser();
  } catch {
    reponse.photo = null;
    reponse.user = null;
  }

  return reponse;
}

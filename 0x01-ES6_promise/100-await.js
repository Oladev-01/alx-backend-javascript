import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const getPhoto = await uploadPhoto();
  const getUser = await createUser();
  if (getPhoto && getUser) {
    return {
      photo: getPhoto,
      user: getUser,
    };
  }
  return {
    photo: null,
    body: null,
  };
}

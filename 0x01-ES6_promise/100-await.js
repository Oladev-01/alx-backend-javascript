import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [getPhoto, getUser] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: getPhoto,
      user: getUser,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}

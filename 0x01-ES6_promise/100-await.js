import { uploadPhoto, createUser } from "./utils.js";

export default async function asyncUploadUser() {
  try {
    const [upload, user] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);
    return { upload, user };
  } catch (error) {
    return { upload: null, user: null };
  }
}

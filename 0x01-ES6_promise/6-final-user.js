import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';


export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signup, upload]);
}

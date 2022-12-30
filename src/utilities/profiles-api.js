import sendRequest from './send-request';
const BASE_URL = '/api/profiles';

// Retrieve profile of logged in user
// export function getProfile(userId) {
//   return sendRequest(`${BASE_URL}`, 'GET', userId);  
// }
//Above code didn't need userId and doesn't work if userId is passed. Delete after verification. 
export function getProfile() {
  return sendRequest(`${BASE_URL}`);  
}

export function saveProfile(profile) {
  // update user's profile
  return sendRequest(`${BASE_URL}`, 'POST', profile);
}

export function getPUOwnerProfile(id) {
  console.log('how about here in profiles-api?')
  return sendRequest(`${BASE_URL}/${id}`);  
}

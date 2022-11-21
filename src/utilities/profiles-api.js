import sendRequest from './send-request';
const BASE_URL = '/api/profiles';

// Retrieve profile of logged in user
export function getProfile(userId) {
  return sendRequest(`${BASE_URL}`, 'GET', userId);
}

export function saveProfile(profile) {
  // update user's profile
  return sendRequest(`${BASE_URL}`, 'POST', profile);
}
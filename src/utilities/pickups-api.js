import sendRequest from './send-request';
const BASE_URL = '/api/pickups';

// Retrieve all pickups
export function getAllPickups() {
  return sendRequest(`${BASE_URL}`);
}

// // Retrieve games of logged in user
// export function getUsersGames(userId) {
//   console.log('what is userId for in this query? usersGame-api.js: ', userId)
//   return sendRequest(`${BASE_URL}`, 'GET', userId);
// }

// // get enums from DB for display on frontend
// export function getUserGameEnums() {
//   return sendRequest(`${BASE_URL}/gameenums`);
// }

// export function getSkillLevelEnums() {
//   return sendRequest(`${BASE_URL}/skillenums`);
// }

// update a single existing user's game or create if doesn't exist
export function updatePickup(pickupData) {
  return sendRequest(`${BASE_URL}/save`, 'POST', pickupData);
}

// // delete a single existing user's game
// export function deleteUsersGame(gameId) {
//   return sendRequest(`${BASE_URL}/delete`, 'DELETE', gameId);
// }
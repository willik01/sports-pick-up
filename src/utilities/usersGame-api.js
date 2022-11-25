import sendRequest from './send-request';
const BASE_URL = '/api/usersGame';

// Retrieve games of logged in user
export function getUsersGames(userId) {
  console.log('what is userId for in this query? usersGame-api.js: ', userId)
  return sendRequest(`${BASE_URL}`, 'GET', userId);
}

// update a single existing user's game or create if doesn't exist
export function updateUsersGame(gameData) {
  return sendRequest(`${BASE_URL}/save`, 'POST', gameData);
}

// delete a single existing user's game
export function deleteUsersGame(gameId) {
  console.log('here I am in ug-apis.js', gameId)
  return sendRequest(`${BASE_URL}/delete`, 'DELETE', gameId);
}
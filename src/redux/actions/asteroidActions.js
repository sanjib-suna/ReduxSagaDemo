export const GET_ASTEROID_DATA = 'GET_ASTEROID_DATA';
export const SET_ASTEROID_DATA = 'SET_ASTEROID_DATA';

export function getAsteroidData(asteroidId) {
  return {type: GET_ASTEROID_DATA, asteroidId};
}

export function setAstroidData(data) {
  console.log('data', data);
  return {type: SET_ASTEROID_DATA, data};
}

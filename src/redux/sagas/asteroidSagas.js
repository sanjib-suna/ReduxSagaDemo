import {put, takeLatest} from 'redux-saga/effects';
import _ from 'lodash';
import {apiService} from '../../services/apiService';
import * as asteroidActions from '../actions/asteroidActions';
import {selectRandomInt} from '../../utils/commonFunctions';
import {endpoint, API_TOKEN} from '../../constants';

/**
 * watcher
 */
function* actionWatcher() {
  yield takeLatest('GET_ASTEROID_DATA', getAsteroidData);
}

/**
 * handler
 * @param value
 */
function* getAsteroidData(payload) {
  try {
    const asteroidId = _.get(payload, 'asteroidId', '');
    console.log('ret'+JSON.stringify(payload));
    const asteroidUrl = `${endpoint.API_URL}${asteroidId}?api_key=${API_TOKEN}`;
    console.log('reddht'+asteroidUrl);
    const response = yield apiService(asteroidUrl, 'GET');
    console.log('response jfhjfj'+JSON.stringify(response));
    if (response && response.success) {
      yield put(asteroidActions.setAstroidData(response.data));
    } else {
      yield put(asteroidActions.setAstroidData(response.data));
    }
  } catch (error) {
    console.log('getAsteroidData', error);
  }
}



export default [actionWatcher];

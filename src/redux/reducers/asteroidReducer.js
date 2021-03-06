import produce from 'immer';

import {GET_ASTEROID_DATA, SET_ASTEROID_DATA} from '../actions/asteroidActions';

export const initialState = {
  asteroidData: {},
  loading: false,
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ASTEROID_DATA:
        draft.loading = true;
        break;
      case SET_ASTEROID_DATA:
        draft.asteroidData = action.data;
        draft.loading = false;
        break;

      default:
        break;
    }
  });

export default reducer;

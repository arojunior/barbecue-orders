import { createAction } from 'redux-actions';
import history from '../../services/history';

const PUSH = 'modules/Router/PUSH';

export const redirect = createAction(PUSH);

export default {
  reducer: {
    [PUSH]: (state, action) => ({
      ...state,
      route: action.payload,
    }),
  },
  middleware: {
    [PUSH]: (store) => (next) => (action) => {
      history.push(action.payload);
      return next(action);
    },
  },
};

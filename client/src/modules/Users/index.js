import api from '../service';
import { createAction } from 'redux-actions';
import { redirect } from '../Router';
import { LOGIN_REQUEST_API } from '../Login';

const loginAction = createAction(LOGIN_REQUEST_API);

export const NEW_USER_REQUEST = 'modules/User/API_REQUEST_NEW';
export const EDIT_USER_REQUEST = 'modules/User/API_REQUEST_EDIT';

export const newUserAction = createAction(NEW_USER_REQUEST, (values) => {
  return api.post('/users', {
    email: values.email,
    password: values.password,
  });
});

export const editUserAction = createAction(EDIT_USER_REQUEST, (values) => {
  return api.put(`/users/${values.id}`, values);
});

export default {
  reducer: {
    [NEW_USER_REQUEST]: {
      throw: (state, action) => ({
        ...state,
        error: action.payload.response.data.msg,
      }),
    },
    [EDIT_USER_REQUEST]: {
      throw: (state, action) => ({
        ...state,
        error: action.payload.response.data.msg,
      }),
    },
  },
  middleware: {
    [NEW_USER_REQUEST]: ({ dispatch }) => (next) => (action) => {
      const result = next(action);

      if (!result.error) {
        dispatch(loginAction(result.payload));
        dispatch(redirect('/dashboard'));
      }

      return result;
    },
    [EDIT_USER_REQUEST]: ({ dispatch }) => (next) => (action) => {
      const result = next(action);

      if (!result.error) {
        dispatch(loginAction(result.payload));
      }

      return result;
    },
  },
};

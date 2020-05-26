import { getState } from 'redux-localstore';
import history from '../services/history';

export default (Component) => {
  if (!getState().isLogged) {
    return history.push('/');
  }
  return Component;
};

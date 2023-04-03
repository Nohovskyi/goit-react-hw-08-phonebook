import { useSelector } from 'react-redux';
import {
  getUser,
  getIsLoggedIn,
  getIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(getIsLoggedIn),
    isRefreshing: useSelector(getIsRefreshing),
    user: useSelector(getUser),
  };
};

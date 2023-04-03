import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ContactPage/ContactPage';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { Route, Routes } from 'react-router';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.wrap}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegistrationPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

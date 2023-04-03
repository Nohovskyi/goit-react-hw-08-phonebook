import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from '../../components/ContactForm/ContactForm.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });
  const onRegisterSubmit = data => {
    console.log(data.email);
    console.log(data.password);
    dispatch(
      logIn({
        email: data.email,
        password: data.password,
      })
    );
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onRegisterSubmit)} className={css.form}>
        <label className={css.form__label}>
          Email
          <div className={css.form__input__wrap}>
            <input
              {...register('email', {
                required: 'Please enter email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Incorrect mail form',
                },
              })}
              type="mail"
              name="email"
              placeholder="example@email.com"
              className={css.form__input}
            />
            {errors?.email && (
              <span className={css.form__error}>{errors?.email?.message}</span>
            )}
          </div>
        </label>

        <label className={css.form__label}>
          Password
          <div className={css.form__input__wrap}>
            <input
              {...register('password', {
                required: 'Please, enter password',
                minLength: {
                  value: 7,
                  message: 'Not less then 7 numbers',
                },
              })}
              type="password"
              name="password"
              placeholder="*******"
              className={css.form__input}
            />
            <span className={css.form__error}>{errors?.password?.message}</span>
          </div>
        </label>

        <button type="submit" disabled={!isValid} className={css.form__btn}>
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginPage;

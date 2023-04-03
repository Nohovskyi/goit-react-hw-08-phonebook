import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registr } from '../../redux/auth/operations';
import css from '../../components/ContactForm/ContactForm.module.css';

const RegistrationPage = () => {
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
    console.log(data.username);
    console.log(data.email);
    console.log(data.password);
    dispatch(
      registr({
        name: data.username,
        email: data.email,
        password: data.password,
      })
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onRegisterSubmit)} className={css.form}>
      <label className={css.form__label}>
        Username
        <div className={css.form__input__wrap}>
          <input
            {...register('username', {
              required: 'please enter name',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message:
                  'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan',
              },
            })}
            id="username"
            type="text"
            name="username"
            placeholder="username"
            className={css.form__input}
          />
          {errors?.username && (
            <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
              {errors?.username?.message || 'Error'}
            </span>
          )}
        </div>
      </label>

      <label className={css.form__label}>
        Email
        <div className={css.form__input__wrap}>
          <input
            {...register('email', {
              required: 'please enter email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'incorrect mail form',
              },
            })}
            id="email"
            type="mail"
            name="email"
            placeholder="example@email.com"
            className={css.form__input}
          />
          {errors?.email && (
            <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
              {errors?.email?.message}
            </span>
          )}
        </div>
      </label>

      <label className={css.form__label}>
        Password
        <div className={css.form__input__wrap}>
          <input
            {...register('password', {
              required: 'enter password',
              minLength: {
                value: 6,
                message: 'not less then 6 numbers',
              },
            })}
            id="password"
            type="password"
            name="password"
            placeholder="*******"
            className={css.form__input}
          />
          <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
            {errors?.password?.message}
          </span>
        </div>
      </label>

      <button type="submit" disabled={!isValid} className={css.form__btn}>
        Sign up
      </button>
    </form>
  );
};

export default RegistrationPage;

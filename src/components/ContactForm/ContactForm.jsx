import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContactsList } from 'redux/selectors';
import { useForm } from 'react-hook-form';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  const onSubmit = data => {
    const { name, number } = data;
    if (contacts.find(item => item.name === name)) {
      return alert('Sorry, this name already exist');
    }
    if (contacts.find(item => item.number === number)) {
      return alert('Sorry, this number already exist');
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label className={css.form__label}>
          Name
          <div className={css.form__input__wrap}>
            <input
              {...register('name', {
                required: 'Please, enter name',
                pattern: {
                  value:
                    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                  message:
                    'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan',
                },
              })}
              type="text"
              name="name"
              placeholder="Enter name"
              className={css.form__input}
            />
            {errors?.name && (
              <span style={{ display: 'block', marginBottom: 5, color: 'red' }}>
                {errors?.name?.message || 'Error'}
              </span>
            )}
          </div>
        </label>

        <label className={css.form__label}>
          Number
          <div className={css.form__input__wrap}>
            <input
              {...register('number', {
                required: 'Please, enter phone number',
                pattern: {
                  value: /\d{3}[-]\d{2}[-]\d{2}/,
                  message:
                    'Phone number must be digits and can contain spaces, dashes, parentheses',
                },
                maxLength: 9,
                message: 'Phone number has 7 digits',
              })}
              type="tel"
              name="number"
              placeholder="123-45-67"
              className={css.form__input}
            />
            {errors?.number && (
              <span className={css.form__error}>
                {errors?.number?.message || 'Phone number has 7 digits'}
              </span>
            )}
          </div>
        </label>

        <button type="submit" disabled={!isValid} className={css.form__btn}>
          Add contact
        </button>
      </form>
      {!contacts.length ? (
        <h2>The list of contacts is empty.</h2>
      ) : (
        <h2>Contacts</h2>
      )}
    </>
  );
};

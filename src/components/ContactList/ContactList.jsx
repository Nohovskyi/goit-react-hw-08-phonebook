import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contactsList = useSelector(getFilteredContacts);

  return (
    <ul className={css.contact__list}>
      {contactsList.map(({ id, name, number }) => (
        <li key={id} className={css.contact__list__item}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

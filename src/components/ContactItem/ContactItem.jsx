import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p className={css.contact__list__contact}>
        {name}: {number}
      </p>
      <button
        className={css.contact__btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    const filterValue = e.currentTarget.value.toLowerCase();
    dispatch(filteredContacts(filterValue));
  };
  return (
    <div className={css.container}>
      <label className={css.filter__label}>
        <span>Find contact by name</span>
        <input
          className={css.filter__input}
          type="text"
          placeholder="Find contacts"
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterContacts } from '../../redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilterContacts(e.target.value));
  };

  return (
    <label className={css.titleFilter}>
      Find contacts by name
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        onChange={changeFilter}
      />
    </label>
  );
};
export default Filter;

import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterContacts } from '../../redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { selectContactsFilter } from '../../redux/contacts/selectors';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

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
        filter={filter}
        value={filter}
      />
    </label>
  );
};
export default Filter;

import React from 'react';
import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name or phone number</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name..."
      />
    </div>
  );
};

export default SearchBox;

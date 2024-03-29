import css from './SearchBox.module.css';

const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <span className={css.searchTitle}>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};
export default SearchBox;

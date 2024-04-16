const SearchBox = ({ search, onSearch }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          type="text"
        />
      </label>
      {search && <button onClick={() => onSearch("")}>Reset</button>}
    </div>
  );
};

export default SearchBox;

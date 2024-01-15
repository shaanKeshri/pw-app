import { useState, useEffect } from 'react';

const Searchform = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchPref, setsearchPref] = useState('shows');

  useEffect(() => {}, []);

  const typedInSearch = ev => {
    setSearchInput(ev.target.value);
  };

  const onPrefChange = ev => {
    setsearchPref(ev.target.value);
  };

  const access = {
    q: searchInput,
    searchPref,
  };

  const submited = async ev => {
    ev.preventDefault();
    onSearch(access);
  };

  return (
    <form onSubmit={submited}>
      <ul>
        <label>
          Shows
          <input
            type="radio"
            name="search preference"
            value="shows"
            checked={searchPref === 'shows'}
            onChange={onPrefChange}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search pref"
            value="actors"
            checked={searchPref === 'actors'}
            onChange={onPrefChange}
          />
        </label>
      </ul>

      <input type="text" value={searchInput} onChange={typedInSearch} />
      <button type="submit">Search Database</button>
    </form>
  );
};
export default Searchform;

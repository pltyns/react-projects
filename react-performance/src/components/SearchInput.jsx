import { useSearchStore } from '../store';
import { useCallback } from 'react';

const SearchInput = () => {
  const setSearch = useSearchStore((state) => state.setSearch);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, [setSearch]);

  return (
    <input
      type="text"
      placeholder="Kullanıcı ara..."
      onChange={handleChange}
      className="p-2 border rounded w-full"
    />
  );
};

export default SearchInput;

import { useState } from "react";

import useDebounce from "./useDebounce";

function SearchBox() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search......"
      />
      <p>Current input: {search}</p>
      <p>Debounced input: {debouncedSearch}</p>
    </>
  );
}
export default SearchBox;

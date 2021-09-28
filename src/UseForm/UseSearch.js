import { useState } from "react";

const UseSearch = () => {
  const [ search, setSearch ] = useState('Tucuman')
  return {
    search,
    setSearch
  };
};
export default UseSearch;

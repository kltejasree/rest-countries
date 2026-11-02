import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center gap-4 bg-white w-full max-w-md px-6 py-5 rounded-md shadow-md mt-7 dark:bg-gray-800 dark:text-white">
      <IoSearchOutline size={20 } className="text-gray-500 dark:text-gray-300"/>

      <input
        type="text"
        placeholder="Search for a country..."
        className="outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
import React from "react";

const FilterRegion = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <select className="w-52 rounded-md bg-white px-5 py-4 outline-none mt-7 dark:bg-gray-800 dark:text-white" value={selectedRegion} onChange={(e)=>setSelectedRegion(e.target.value)}>
      <option value="" disabled hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterRegion;
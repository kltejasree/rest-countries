import React from 'react'

const FilterBySubRegion = ({countries, selectedSubRegion, setSelectedSubRegion }) => {
    const uniqueSubRegions = new Set();

    countries.forEach((country) => {
        if (country.subregion && country.subregion.trim() !== '') {
            uniqueSubRegions.add(country.subregion);
        }
    });

    const subregions = [...uniqueSubRegions]
   
    
  return (
    <select className="w-full min-w-0 rounded-md bg-white px-5 py-3 outline-none mt-7 dark:bg-gray-800 dark:text-white" value={selectedSubRegion} onChange={(e)=>setSelectedSubRegion(e.target.value)}>
      <option value="" disabled hidden>Filter by SubRegion</option>
      {subregions.map((subregion) => (
        <option key = {subregion} value = {subregion}>{subregion}</option>
      ))}
      
      
      
      
      
    </select>

  )
}

export default FilterBySubRegion
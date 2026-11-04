import CountryCard from "./CountryCard"


const CountryList = ({countries, onCountryClick}) => {
  

  return (
    <>
    
    <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 ">
      {countries.map((country) => (
      
        <CountryCard
          key={country.names.common}
          country={country}
          onClick={()=>onCountryClick(country)}
        />
        
    
       
      ))}
    </div>
    </>
  )
}

export default CountryList
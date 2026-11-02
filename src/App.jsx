import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterRegion from "./components/FilterRegion"
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";


const App = () => {
  const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;

  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion]=useState("");
  const [selectedCountry, setSelectedCountry]=useState(null);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);

        const fields = "names,codes.alpha_2,flag.description,population,region,subregion,tlds,currencies,languages,borders,capitals"
        
        const limit = 100;
        let offset = 0;
        let allCountries = [];
        
        while (true) {
          const res = await fetch(
            `https://api.restcountries.com/countries/v5?response_fields=${fields}&limit=${limit}&offset=${offset}`,
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
              },
            },
          );

          if (!res.ok) {
            throw new Error("Failed to fecth countries");
          }

          const data = await res.json();
          //console.log(data)
          const pageCountries = data.data.objects;
          //console.log(pageCountries)

          allCountries = [...allCountries, ...pageCountries];

          if (pageCountries.length < limit) {
            break;
          }

          offset += limit;
        }

        //Filter countries with alpha_2 code
        const countriesWithFlags = allCountries.filter(
          (country) =>
            
            country.codes?.alpha_2 && country.codes.alpha_2.trim() !== "",
        );

        setCountries(countriesWithFlags);

      } catch (error) {
        console.error("Error fetching countries", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  //Filtering countries - search and region

  const filteredCountries = countries.filter((country) =>{
  
    const matchSearch = country.names.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchRegion = selectedRegion === "" || country.region===selectedRegion;
  
    return matchRegion && matchSearch;
  }
  );

  return (
    <div className={darkMode?"dark":""}>
      <div
        className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white"
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="mx-auto max-w-360 px-6 py-3">
          

          {selectedCountry?(
            <CountryDetails
              country={selectedCountry}
              onBack={()=>setSelectedCountry(null)}/>
              
          ):(
            <>
             <div className="flex items-center justify-between ">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterRegion selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
            </div>
            {loading ? (<Spinner />) : (
            <CountryList countries={filteredCountries} 
            onCountryClick={(country)=>setSelectedCountry(country)}/>
            )}
            </>
          )}

          
          
        </div>
      </div>
    </div>
  );
};

export default App;
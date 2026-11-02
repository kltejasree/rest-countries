const CountryCard = ({ country, onClick }) => {
  const code = country.codes?.alpha_2?.toLowerCase();

  return (

   
        <div onClick={onClick} className="w-full cursor-pointer max-w-300 overflow-hidden rounded-md bg-white shadow-sm dark:bg-gray-800">
        {code && (
            <img
            src={`https://flags.restcountries.com/v5/w320/${code}.png`}
            alt={country.flag?.description || `${country.names.common} flag`}
            className="object-cover w-full h-60"
            />
        )}

        <div className="px-7 py-6 mb-4">
            <h2 className="font-bold text-lg mb-6">{country.names.common}</h2>

            <p className="text-sm mb-1">
            <span className="font-semibold">Population:</span>{" "}
            <span className="font-normal">
                {country.population.toLocaleString()}
            </span>
            </p>

            <p className="text-sm mb-1">
            <span className="font-semibold">Region:</span>{" "}
            <span className="font-normal">{country.region}</span>
            </p>

            <p className="text-sm ">
            <span className="font-semibold">Capital:</span>{" "}
            <span className="font-normal">
                {country.capitals?.[0]?.name || "N/A"}
            </span>
            </p>
        </div>
        </div>
    );
  
};


export default CountryCard;
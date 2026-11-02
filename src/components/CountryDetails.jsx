
import { IoArrowBack } from "react-icons/io5";

const CountryDetails = ({ country, onBack }) => {
  const nativeName =
    country.names.native?.[0]?.common || country.names.common;

  const currencies =
    country.currencies?.map((currency) => currency.name).join(", ") || "N/A";

  const languages =
    country.languages?.map((lang) => lang.name).join(", ") || "N/A";

  return (
    <div className="mt-8">
     
      <button
        onClick={onBack}
        className="mb-10 cursor-pointer flex items-center gap-2 rounded-md bg-white px-8 py-3 shadow-md dark:bg-gray-800 dark:text-gray-300"
      >
        <IoArrowBack />
        <span>Back</span>
      </button>

      <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-22">
     
        <div>
          {country.codes?.alpha_2 && (
            <img
              src={`https://flags.restcountries.com/v5/w320/${country.codes.alpha_2.toLowerCase()}.png`}
              alt={`${country.names.common} flag`}
              className="w-full max-w-xl rounded-sm object-cover"
            />
          )}
        </div>

        
        <div>
          <h1 className="mb-8 text-3xl font-bold">
            {country.names.common}
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
        
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Native Name:</span> {nativeName}
                
              </p>

              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population?.toLocaleString() || "N/A"}
              </p>

              <p>
                <span className="font-semibold">Region:</span> {country.region || "N/A"}

              </p>

              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {country.subregion || "N/A"}
              </p>

              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capitals?.[0]?.name || "N/A"}
              </p>
            </div>

           
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.tlds?.[0] || "N/A"}
              </p>

              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {currencies}
              </p>

              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {languages}
              </p>
            </div>
          </div>

        
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span className="font-semi-bold">Border Countries:</span>

            {country.borders?.length > 0 ? (
              country.borders.map((border) => (
                <span
                  key={border}
                  className="rounded-md bg-white px-5 py-2 text-sm shadow-md dark:bg-gray-800 dark:text-gray-300"
                >
                  {border}
                </span>
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
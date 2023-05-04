import { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { GiBatwingEmblem } from "react-icons/gi";
import { City, CityPopular } from "../../utils/types";
import {
  CitiesApi,
  CitiesPopularApi,
  CitiesPopularFromApi,
} from "../../utils/apiCalls";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [cities, setCities] = useState<City[]>([]);
  const [citiesPopular, setCitiesPopular] = useState<CityPopular[]>([]);

  const handleClickInput = () => {
    // get data on the 5 most popular cities by selecting the search bar
    CitiesPopularApi(setCitiesPopular);
  };
  const handleClickCityPopular = (localName: string) => {
    // display the selected value
    setSearchValue(localName);
  };
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // get input value
    const value = e.target.value;
    setSearchValue(value);
    // delete data on the 5 most popular cities
    setCitiesPopular([]);
  };
  const handleClickCity = (localName: string, uniqueName: string) => {
    // get data on the 5 most popular cities from a given city
    CitiesPopularFromApi(uniqueName, setCitiesPopular);
    // display the selected value
    setSearchValue(localName);
  };
  const handleBlur = () => {
    // disappearance of auto-completion when clicking outside the search bar
    setTimeout(() => setCities([]), 200);
    setTimeout(() => setCitiesPopular([]), 200);
  };

  useEffect(() => {
    // get data all cities
    CitiesApi(searchValue, setCities);
  }, [searchValue]);

  return (
    <div className="relative bg-black pt-16 pb-8">
      <GiBatwingEmblem
        aria-label="bat"
        className="absolute left-5 top-3 text-white text-sizeIcon"
      />
      <div className="relative flex justify-center">
        <input
          type="text"
          placeholder="Une destination, demande..."
          className="w-11/12 sm:w-2/4 rounded-full py-4 pl-6"
          value={searchValue}
          onClick={handleClickInput}
          onChange={handleChangeValue}
          onBlur={handleBlur}
        />
        <div className="absolute right-[calc(100%_/_24)] sm:right-[calc(100%_/_4)] bg-colorSearchIcon p-3 rounded-full">
          <BiSearchAlt
            aria-label="search"
            className="text-sizeIcon cursor-pointer"
          />
        </div>
        {citiesPopular.length > 0 ? (
          <ul className="absolute w-11/12 sm:w-2/4 bg-white border border-gray-300 rounded-lg mt-16">
            <li className="ml-1 text-gray-400 text-sm">
              Ville, Région et Pays
            </li>
            {citiesPopular.map((city) => (
              <li
                key={city.city_id}
                onClick={() => handleClickCityPopular(city.local_name)}
                className="ml-2 p-2 hover:bg-gray-200 cursor-pointer"
              >
                {city.local_name}
              </li>
            ))}
          </ul>
        ) : cities.length > 0 ? (
          <ul
            aria-label="cities"
            className="absolute w-11/12 sm:w-2/4 bg-white border border-gray-300 rounded-lg mt-16"
          >
            <li className="ml-1 text-gray-400 text-sm">
              Ville, Région et Pays
            </li>
            {cities.map((city) => (
              <li
                aria-label="city"
                key={city.city_id}
                onClick={() =>
                  handleClickCity(city.local_name, city.unique_name)
                }
                className="ml-2 p-2 hover:bg-gray-200 cursor-pointer"
              >
                {city.local_name}
                {city.emoji}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

import axios from "axios";

export const CitiesApi = async (searchValue: string, setCities: Function) => {
  // data all cities
  const { data } = await axios.get(
    `https://api.comparatrip.eu/cities/autocomplete/?q=${searchValue}`
  );
  return data && searchValue.length > 0 ? setCities(data) : setCities([]);
};

export const CitiesPopularApi = async (setCitiesPopular: Function) => {
  // data on the 5 most popular cities
  const { data } = await axios.get(
    "https://api.comparatrip.eu/cities/popular/5"
  );
  return data ? setCitiesPopular(data) : setCitiesPopular([]);
};

export const CitiesPopularFromApi = async (
  localName: string,
  setCitiesPopularFrom: Function
) => {
  // data on the 5 most popular cities from a given city
  const { data } = await axios.get(
    `https://api.comparatrip.eu/cities/popular/from/${localName}/5`
  );
  return data && localName.length > 0
    ? setCitiesPopularFrom(data)
    : setCitiesPopularFrom([]);
};

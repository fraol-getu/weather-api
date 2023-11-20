import { useState } from "react";
import { Geo_Api_url, geoApiOptions } from "../../Api";
import { AsyncPaginate } from 'react-select-async-paginate';


const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${Geo_Api_url}cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })

      .catch((err) => console.error(err));
  };
  const handleonchange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="searchforcity"
      debounceTimeout={600}
      value={search}
      onChange={handleonchange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;

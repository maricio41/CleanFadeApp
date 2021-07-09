import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllCities } from "../../store/barbershop";
import "./CitySearch.css";

const CitySearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cities = useSelector((state) => state.barbershops.cities);
  const [city, setCity] = useState(0);

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  const onSubmit = () => {
    if (city === 0) {
      window.alert("Please select a city!");
      return;
    }
    history.push(`/barbershops/search/${city}`);
  };

  return (
    <div className="citySearch__container">
      <label>
        <h3 className="search-header">Find a Barbershop</h3>{" "}
      </label>
      <select
        className="navbar-select"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        <option value={0}>Please choose a city</option>
        {cities &&
          Object.values(cities).map((city) => {
            return <option value={city}>{city}</option>;
          })}
      </select>
      <button className="search-submit" onClick={onSubmit}>
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

export default CitySearch;

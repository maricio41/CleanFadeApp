import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector, useHistory } from 'react-router-dom'
import { getAllCities } from '../../store/barbershop'
import "./CitySearch.css"


const CitySearch = () => {
    const dispatch = useDispatch()
    const history = useHistorty()
    const cities = useSelector((state) => state.barbershops.cities)

    useEffect(() => {
        dispatch(getAllCities())
    }, [dispatch])

    const onSubmit = () => {
        if (city === 0) {
          window.alert("Please select a city!");
          return;
        }
        history.push(`/barbershops/search/${city}`);
      };

    return (
        <div className="userdash__citySearch">
          <div className="city-container">
            <label><h3>Find a Barbershop</h3> </label>
            <select
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
            <button className="userdash__search-submit" onClick={onSubmit}> Submit </button>
          </div>
        </div>
    )
}

export default CitySearch

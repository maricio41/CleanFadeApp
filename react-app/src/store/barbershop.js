const LOAD_BARBERSHOP = "barbershop/LOAD_BARBERSHOP";
const LOAD_BARBERSHOPS = "barbershop/LOAD_BARBERSHOPS";
const LOAD_BARBERSHOP_CITIES = "/LOAD_BARBERSHOP_CITIES";

const loadBarberShop = (barbershop) => ({
  type: LOAD_BARBERSHOP,
  payload: barbershop,
});
const getBarberShopsByCity = (barbershops) => ({
  type: LOAD_BARBERSHOPS,
  payload: barbershops,
});
const getBarberShopCities = (cities) => ({
  type: LOAD_BARBERSHOP_CITIES,
  payload: cities,
});

export const getAllCities = () => async (dispatch) => {
  const response = await fetch(`/api/barbershops/cities`);
  if (response.ok) {
    const cities = await response.json();
    dispatch(getBarberShopCities(cities));
    return cities;
  }
};

export const getBarberShop = (barbershopId) => async (dispatch) => {
  console.log("------");
  const response = await fetch(`/api/barbershops/${barbershopId}`);
  if (response.ok) {
    const barbershop = await response.json();
    console.log(barbershop);
    dispatch(loadBarberShop(barbershop.barbershop));
    return barbershop.barbershop;
  }
};
export const getBarberShops = (city) => async (dispatch) => {
  console.log("------");
  const response = await fetch(`/api/barbershops/search/${city}`);
  if (response.ok) {
    const { barbershops } = await response.json();
    console.log(barbershops);
    dispatch(getBarberShopsByCity(barbershops));
  }
};

const initialState = { barbershop: null, barbershops: null, cities: null };

const BarbershopReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_BARBERSHOP:
      newState = Object.assign({}, state);
      newState.barbershop = action.payload;
      return newState;
    case LOAD_BARBERSHOPS:
      newState = Object.assign({}, state);
      newState.barbershops = action.payload;
      return newState;
    case LOAD_BARBERSHOP_CITIES:
      newState = Object.assign({}, state);
      newState.cities = action.payload;
      return newState;
    default:
      return state;
  }
};

export default BarbershopReducer;

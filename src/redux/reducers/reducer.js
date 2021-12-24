import { actionTypes } from "../constants/actionTypes";

const initialState = {
  cityName: "",
  name: "",
  temperature: "",
  pressure: "",
  humidity: "",
  feels_like: "",
  coordinates: "",
  temp_min: "",
  temp_max: "",
  errorMsg: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_API_DATA:
      const payload = action.payload;
      return {
        ...state,

        name: payload.name,
        temperature: payload.temperature,
        pressure: payload.pressure,
        humidity: payload.humidity,
        feels_like: payload.feels_like,
        coordinates: payload.coordinates,
        temp_min: payload.temp_min,
        temp_max: payload.temp_max,
      };

    // case actionTypes.ERROR_IN_API:
    //
    //   return {
    //     ...state,
    //     errorMsg: action.payload.error,
    //   };
    case actionTypes.CITY_NAME_UPDATE:
      console.log("reducer", action.payload.data);
      return {
        ...state,
        cityName: action.payload.data,
      };

    case actionTypes.SHOW_ERROR:
      return {
        ...state,
        errorMsg: action.payload.data.error,
        cityName: "",
        name: "",
        temperature: "",
        pressure: "",
        humidity: "",
        feels_like: "",
        coordinates: "",
        temp_min: "",
        temp_max: "",
        errorMsg: "",
      };

    default:
      return state;
  }
};

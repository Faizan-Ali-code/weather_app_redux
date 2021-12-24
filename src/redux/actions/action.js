import axios from "axios";
import { actionTypes } from "../constants/actionTypes";
export const weatherFinder = (cityName) => {
  console.log(cityName);
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2ed352864e3fb8455799d5183ebb4822`
      )
      .then((response) => {
        const data = response.data;
        const apiData = {
          name: data.name,
          temperature: data.main.temp,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          feels_like: data.main.feels_like,
          coordinates: data.coord,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
        };
        dispatch(storeWeatherData(apiData));
      })
      .catch((error) => {
        console.log(error);

        const errormsg = "something went wrong! Try Again.";
        dispatch(showError(errormsg));
      });
  };
};

export const storeWeatherData = (data) => {
  return {
    type: actionTypes.STORE_API_DATA,
    payload: data,
  };
};

export const cityNameUpdate = (data) => {
  console.log("action", data);
  //   console.log(data);
  return {
    type: actionTypes.CITY_NAME_UPDATE,
    payload: { data: data },
  };
};

export const showError = (data) => {
  return {
    type: actionTypes.SHOW_ERROR,
    payload: { error: data },
  };
};

// export const resetToDefault = () => {
//   return {
//     type: actionTypes.RESET_TO_DEFAULT,
//   };
// };

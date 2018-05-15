import axios from "axios";

const API_KEY = '1bd6020f071f299f3a83638fa3aca71e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
 
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  //debugger;
  console.log("Request:",request);
  return {
    type: FETCH_WEATHER,
    payload: request // the request is promise here
  };
}
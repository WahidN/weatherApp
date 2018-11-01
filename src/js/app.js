// Models
import Weather from './Models/Weather';
import Forecast from './Models/Forecast';
import GeoWeather from './Models/Geo';

// Views
import * as WeatherView from './Views/weatherView';
import * as ForecastView from './Views/forecastView';
import { showLoader, removeLoader } from './Views/base';


/**
 * ****************
 * variables
 *****************/
const state = {};
let geoSet = false;


/**
 * ****************
 * Functions
 *****************/
const getWeather = (weather) => {

    const place = weather.name;
    const country = weather.sys.country;
    const [temp, tempMax, tempMin, windDeg, windSpeed] = [
        Math.round(weather.main.temp), 
        weather.main.temp_max, 
        weather.main.temp_min, 
        weather.wind.deg, 
        weather.wind.speed
    ];

    WeatherView.updateLocation(place, country);
    WeatherView.updateWeatherInfo(temp, tempMax, tempMin, windDeg, windSpeed);

    removeLoader();
}

const getForecast = async (forecast) => {
    const forecastDays = forecast.list.slice(0, 8);
    forecastDays.forEach(f => {
        ForecastView.renderForecast(f);
    })
}

const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const res = await position;
            const [lat, lon] = [res.coords.latitude, res.coords.longitude];
            // get weather 
            state.geo = new GeoWeather(lat, lon);
            const weather = await state.geo.getGeoWeather();
            getWeather(weather);

            // get forecast
            state.geoForecast = new GeoWeather(lat, lon);
            const forecast = await state.geoForecast.getGeoForecast();
            getForecast(forecast);
            
            geoSet = true;
        },
        (err)  => {
            console.log(err)
            geoSet = false;
        }
    )
}


/**
 * ****************
 * Event Listeners
 *****************/
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        showLoader();
        getGeoLocation();
    } else {
        console.log("geoLocation is not supported");
    }
});

// Models
import Weather from './Models/Weather';
import Forecast from './Models/Forecast';
import GeoWeather from './Models/Geo';

// Views
import * as WeatherView from './Views/weatherView';
import * as ForecastView from './Views/forecastView';
import * as SearchView from './Views/searchView';
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
    const result = getValues(weather);
    WeatherView.updateLocation(result.place, result.country);
    WeatherView.updateWeatherInfo(result.temp, result.tempMax, result.tempMin, result.windDeg, result.windSpeed);
    WeatherView.updateGradient(result.temp);
    removeLoader();
}

const getValues = (data) => {
    return {
        place: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        windDeg: data.wind.deg,
        windSpeed: data.wind.speed,
        clouds: data.clouds.all,
    }
}

const getForecast = (forecast) => {
    const forecastDays = forecast.list.slice(0, 8);
    forecastDays.forEach(f => {
        ForecastView.renderForecast(f);
    })
}

const getGeoLocation = () => {
    try {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                showLoader();
                const res = position;
                const [lat, lon] = [res.coords.latitude, res.coords.longitude];
                
                // get weather 
                state.geo = new GeoWeather(lat, lon);
                const weather = await state.geo.getGeoWeather();
                getWeather(weather);
    
                // get forecast
                state.geoForecast = new GeoWeather(lat, lon);
                const forecast = await state.geoForecast.getGeoForecast();
                getForecast(forecast);

            },
            (err)  => {
                console.error('error: ', err)
                geoSet = false;
                removeLoader();
            }
        )
    } catch (err) {
        console.error(err);
    }
    
}

const searchControl = async () => {
    const query = SearchView.getInput();
    SearchView.clearInput();
    showLoader();
    if(query) {
        ForecastView.clearForecast();

        state.weather = new Weather(query);
        state.forecast = new Forecast(query);
        geoSet = false;
        try {
            const weatherData = await state.weather.getWeather();
            const forecastData = await state.forecast.getForecast();
            getForecast(forecastData);
            getWeather(weatherData);

            removeLoader();
        } catch(err) {
            console.log(err);
        }
    } else {
        removeLoader();
    }
    
}

const checkGeo = () => {
    if (navigator.geolocation) {
        geoSet = true;
        if(geoSet) {
            ForecastView.clearForecast();
            getGeoLocation();
        }
    } else {
        console.log("geoLocation is not supported");
        removeLoader();
    }
}

const styleNav = () => {
    const scrollPosY = window.pageYOffset | document.body.scrollTop;
    if (scrollPosY > 10) {
        document.querySelector('.nav').classList.add('active');
    } else {
        document.querySelector('.nav').classList.remove('active');
    }
}


/**
 * ****************
 * Event Listeners
 *****************/
window.addEventListener('load', checkGeo);
document.querySelector('#search').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        searchControl();
    }
});
document.querySelector('.js--search').addEventListener('click', searchControl)
document.querySelector('.js--getGeoLocation').addEventListener('click', checkGeo)
document.addEventListener('scroll', styleNav)
import Weather from './Models/Weather';
import Forecast from './Models/Forecast';

const state = {};



const searchForecast = async () => {
    const query = 'Amsterdam'

    // state.weather = new Weather(query);
    // state.weather.getWeather();
    // state.forecast =  new Forecast(query);
    // state.forecast.getForecast();
}

searchForecast();

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const res = await position;
                console.log(res)
            },
            (err)  => {
                console.log(err)
            }
        )
    } else {
        console.log("geoLocation is not supported");
    }
})



import { elements } from './base';

export const renderForecast = (forecast) => {
    const time = forecast.dt_txt.split(' ')[1].split(":").splice(0, 2).join(":");
    const temp = Math.round(forecast.main.temp);
    var iconurl = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    const markup = `
        <div class="list__item">
            <div class="time">${time}</div>
            <div class="icon"><img src="${iconurl}"></div>
            <div class="degrees">${temp} <small>&#8451;</small></div>
            <div class="description">${forecast.weather[0].description}</div>
        </div>
    `;

    elements.forecastList.insertAdjacentHTML('beforeend', markup);
}

export const clearForecast = () => {
    elements.forecastList.innerHTML = "";
}
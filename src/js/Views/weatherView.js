import { elements } from './base';

export const updateLocation = (place, country) => {
    elements.place.textContent = place;
    elements.country.textContent = country;
}

export const updateWeatherInfo = (temp, tempMax, tempMin, windDeg, windSpeed) => {
    elements.temp.innerHTML = `${temp} <small>&#8451;</small>`;
    elements.tempMax.innerHTML = `max: ${tempMax} <small>&#8451;</small>`;
    elements.tempMin.innerHTML = `min: ${tempMin} <small>&#8451;</small>`;
    elements.windDeg.textContent = windDeg;
    elements.windSpeed.textContent = windSpeed + ' ' + 'm/s';
}
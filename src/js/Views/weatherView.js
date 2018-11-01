import { elements } from './base';

export const updateLocation = (place, country) => {
    elements.place.textContent = place;
    elements.country.textContent = country;
}

export const updateWeatherInfo = (temp, tempMax, tempMin, windDeg, windSpeed) => {
    elements.temp.textContent = temp;
    elements.tempMax.textContent = tempMax;
    elements.tempMin.textContent = tempMin;
    elements.windDeg.textContent = windDeg;
    elements.windSpeed.textContent = windSpeed;
}
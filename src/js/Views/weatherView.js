import { elements } from './base';

export const updateLocation = (place, country) => {
    elements.place.textContent = place;
    elements.country.textContent = country;
}

export const updateWeatherInfo = (temp, tempMax, tempMin, windDeg, windSpeed) => {
    elements.temp.innerHTML = `${temp} <small>&deg;</small>`;
    elements.tempMax.innerHTML = `max: ${tempMax} <small>&#8451;</small>`;
    elements.tempMin.innerHTML = `min: ${tempMin} <small>&#8451;</small>`;
}

export const updateGradient= (temp) => {
    if (temp < 10) {
        document.querySelector('.weather').classList.add('cold');
    } else if (temp < 15) {
        document.querySelector('.weather').classList.add('average');
    } else {
        document.querySelector('.weather').classList.add('warm');
    }
}
export const elements = {
    place: document.querySelector('.place__title'),
    country: document.querySelector('.country__title'),
    temp: document.querySelector('.degrees span'),
    tempMax: document.getElementById('tempMax'),
    tempMin: document.getElementById('tempMin'),
    windDeg: document.getElementById('windDeg'),
    windSpeed: document.getElementById('windSpeed'),
    body: document.querySelector('body'),
    forecastList: document.querySelector('.forecast__list'),
    searchInput: document.getElementById('search')

}

export const elementStrings = {
    loader: 'loader'
}

export const showLoader = () => {
    const markup = `
        <div class='${elementStrings.loader}'>
            <div class="loader__icon">
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                </svg>
            </div>
        </div>
    `
    elements.body.insertAdjacentHTML('beforeend', markup);
}

export const removeLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
}
import { apiKey } from './base';
import Axios from 'axios';

export default class Weather {
    constructor(place) {
        this.place = place;
    }

    async getWeather() {
        const res = await Axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.place}&APPID=${apiKey}`);
        console.log(this.place);
        console.log(res.data);
    }
}
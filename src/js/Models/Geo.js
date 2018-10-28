import { apiKey } from './base';
import Axios from 'axios';

export default class Forecast {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }

    async getGeoForeCast() {
        try {
            const res = await Axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.long}&APPID=${apiKey}`);
            const data = res.data;
            console.log(data);
        } catch(err) {
            console.log(err);
        }
    }

    async getGeoWeather() {
        try {
            const res = await Axios(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&APPID=${apiKey}`);
            const data = res.data;
            console.log(data);
        } catch(err) {
            console.log(err);
        }
    }
}
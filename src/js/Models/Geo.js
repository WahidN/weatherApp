import { apiKey } from '../config';
import Axios from 'axios';

export default class GeoWeather {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }

    async getGeoForecast() {
        try {
            const res = await Axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&APPID=${apiKey}`);
            const data = res.data;
            return data;
        } catch(err) {
            console.log(err);
        }
    }

    async getGeoWeather() {
        try {
            const res = await Axios(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&APPID=${apiKey}`);
            const data = res.data;
            return data;
        } catch(err) {
            console.log(err);
        }
    }
}
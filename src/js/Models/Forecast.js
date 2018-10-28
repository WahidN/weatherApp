import { apiKey } from './base';
import Axios from 'axios';

export default class Forecast {
    constructor(place) {
        this.place = place
    }

    async getForecast() {
        try {
            const res = await Axios(`https://api.openweathermap.org/data/2.5/forecast?q=${this.place}&APPID=${apiKey}`);
            const data = res.data;
            console.log(data);
        } catch(err) {
            console.log(err);
        }
    }
}
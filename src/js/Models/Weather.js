import { apiKey } from '../config';
import Axios from 'axios';

export default class Weather {
    constructor(place) {
        this.place = place;
    }

    async getWeather() {
        try {
            const res = await Axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.place}&units=metric&APPID=${apiKey}`);
            console.log(res.data)
        } catch(err) {
            console.log(err);
        }
    }
}
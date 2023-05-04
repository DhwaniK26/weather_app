class Weather {
    constructor(place, temperature, message, feels_like, humidity) {
        this.place = place;
        this.temperature = temperature;
        this.feels_like = feels_like;
        this.humidity = humidity;
        this.message = message;
    }
}

export default Weather;
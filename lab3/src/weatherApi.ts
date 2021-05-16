export class WeatherApi{
    private apiKey = 'd7f3aa98cf1c6874807647fa803af714';
    private citiesArray: string[];

    public constructor(cities:string[]){
        this.citiesArray = cities;
        this.createWeatherBlocks();
    }

    async createWeatherDiv(city: string): Promise<any> {
        let citiesContainer:HTMLDivElement =  document.querySelector("#citiesContainer");
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        let weatherBox= `<div class="weatherBox"><h2>`+city+`</h2> 
        <h3><img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" width="100" height="100">
        <br/>Temperature: `+ Math.round(weatherData.main.temp - 273.15)+`&deg;C 
        <br/>Pressure: `+weatherData.main.pressure+` hPA
        <br/>Humidity: `+weatherData.main.humidity+` %
        </h3>`;
        citiesContainer.innerHTML +=weatherBox;

    }
    addNewCity(city: string){
        this.citiesArray.push(city);
    }
    createWeatherBlocks(){
        document.querySelector("#citiesContainer").innerHTML = "";
        for(let city of this.citiesArray){
            this.createWeatherDiv(city);
        }
    }
}
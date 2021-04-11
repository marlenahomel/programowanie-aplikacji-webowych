export class App {
    opwApiKey = 'd7f3aa98cf1c6874807647fa803af714';

    constructor(){
        this.getCityInfo('zakopane')
    }
    async getCityInfo(city: string){
        const weather = await this.getWeather('zakopane');
        this.saveData(weather);
    }  
    
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.opwApiKey}';
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }
    saveData(data: any){
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData(){
        const data = localStorage.getItem('weatherData');
        if(data){
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}
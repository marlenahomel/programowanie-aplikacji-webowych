import {LocalStorage} from './localStorage'
import {WeatherApi} from './weatherApi'

export class App{
    private localStorage1: LocalStorage;
    private weatherApi: WeatherApi;

    public constructor(){
        document.addEventListener('keypress', this.onKeyPress);
    }

    onKeyPress(ev: KeyboardEvent): void{
        if(ev.key == 'Enter'){
           let nameOfCity :  HTMLInputElement= document.querySelector("#city");
           let name: string = nameOfCity.value;
           if(name){
                let localStorage1= new LocalStorage("cities");
                localStorage1.addCity(name);
                let weatherApi2= new WeatherApi(localStorage1.getCity());
                weatherApi2.addNewCity(name);
            }
           }
        }
    }

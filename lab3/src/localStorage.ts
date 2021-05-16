export class LocalStorage{
    private city: string;

    public constructor(name:string){
        this.city = name;
    }

    isNotNull(): boolean{
        if(localStorage.getItem(this.city)){
            return true;
        }
        else{
            return false;
        }
    }

    getCity(): string[]{
        let tab: string[] = localStorage.getItem(this.city).split("-");
        return tab;
    }

    addCity(name: string): void{
        if(this.isNotNull()){
            let tab: string[] = localStorage.getItem(this.city).split("-");
            tab.push(name);
            let newTab: string = tab.join("-");
            localStorage.setItem(this.city, newTab);   
        }
        else{
            localStorage.setItem(this.city, name);   
        }
    }
}
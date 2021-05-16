export class NotesStorage{
    private note: string;

    public constructor(note:string){
        this.note = note;
    }

    isNotNull(): boolean{
        if(localStorage.getItem(this.note)){
            return true;
        }
        else{
            return false;
        }
    }

    getCity(): string[]{
        let tab: string[] = localStorage.getItem(this.note).split("-");
        return tab;
    }

    addCity(name: string): void{
        if(this.isNotNull()){
            let tab: string[] = localStorage.getItem(this.note).split("-");
            tab.push(name);
            let newTab: string = tab.join("-");
            localStorage.setItem(this.note, newTab);   
        }
        else{
            localStorage.setItem(this.note, name);   
        }
    }
}
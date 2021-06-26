
import {AppStorage} from './AppStorage'
const  storageHandler: AppStorage = new AppStorage();

export interface note{
    id: string;
    title: string;
    body: string;
    date: string;
    pinned: boolean;
    color: string;
}

export class Note{

    createNote(){
        let title :  HTMLInputElement= document.querySelector("#title");
        let body : HTMLInputElement= document.querySelector("#body");
        let isPinned : boolean = false;
        let CurrentDate  =  this.getTimeStamp();
        let newNote :note ={id: storageHandler.getNextId(),title:title.value , body:body.value, date: CurrentDate.toString(), pinned: isPinned, color:this.getColor()};
        storageHandler.addNote(newNote);


    }

    getColor(): string{
       
            let chosenColor = document.querySelector('input[type="radio"]:checked').id;
        
         //   if(document.querySelector('input[type="radio"]:checked')==null){
           //  let chosenColor = "blue";
        
        console.log(chosenColor);
            return chosenColor;
    }
    
    getTimeStamp(){
        let date:Date = new Date();
        let day:number = date.getDate();
        let month:number = date.getMonth() + 1;
        let year:number = date.getFullYear();
        let hour:number = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours();
        let min:any = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
        let sec:number = date.getSeconds();
        let ampm:string = (date.getHours() >= 12) ? 'pm' : 'am';
        return `${day}/${month}/${year} ${hour}:${min}:${sec} ${ampm}`;
      }
    
    }

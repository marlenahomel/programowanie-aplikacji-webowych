export class CreateNote{
    private notesArray: string[];

    public constructor(notes:string[]){
        this.notesArray = notes;
        this.createNotesBlocks();
    }


    createNotesDiv(notes: string){
        let notesContainer:HTMLDivElement =  document.querySelector("#notesContainer");
        let date = new Date();
        let fullDate = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()+' '+date.getHours() + ":" +date.getMinutes() + ":" + date.getSeconds();
        let noteBox= `<div class="noteBox"><h2>`+notes+`</h2> `+fullDate+`
        </div>`
        notesContainer.innerHTML +=noteBox;
    }
    addNewCity(notes: string){
        this.notesArray.push(notes);
    }
    createNotesBlocks(){
        document.querySelector("#notesContainer").innerHTML = "";
        for(let notes of this.notesArray){
            this.createNotesDiv(notes);
        }
    }
}
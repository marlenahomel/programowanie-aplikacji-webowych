import {Notes} from "./Notes";
import {note} from './Note'
const notes: Notes= new Notes();

export class AppStorage{
    private idListName = "IDs";
    noteTab : note[];

    public constructor(){
    if(localStorage.getItem(this.idListName) == null || undefined  || "")
    {
        localStorage.setItem(this.idListName, "0");
    }
    }

    createNoteBlocks(){
        this.getAllNotes().forEach((note)=>{
            notes.createNoteDiv(note);
        })
        this.triggerDelListeners();
        this.triggerTextAreaListeners();
    }

    getNextId(): string{
        let listOfIds: string[] = [];
        listOfIds=  localStorage.getItem(this.idListName).split(":");
        const id = Number(listOfIds[listOfIds.length-1])+1;
        return id.toString();
    }

    pushIdToList(id: string){
        let listOfIds=  localStorage.getItem(this.idListName).split(":");
        listOfIds.push(id);
        localStorage.setItem(this.idListName, listOfIds.join(":"));
    }

    getNote(id: string): note{
        const newNote = localStorage.getItem(id);
        return JSON.parse(newNote);
    }

    addNote(newNote: note): void{
        localStorage.setItem(this.getNextId(), JSON.stringify(newNote));
        this.pushIdToList(this.getNextId());
        notes.createNoteDiv(newNote);
        this.triggerDelListeners();
        this.triggerTextAreaListeners();
    }
    triggerDelListeners(){
        this.getAllNotes().forEach(element => {
            document.querySelector("#note"+element.id).addEventListener("click", () => this.deleteNote(element.id));
        }); 
    }
    triggerTextAreaListeners(){
        this.getAllNotes().forEach(element => {
            document.querySelector("#textarea"+element.id).addEventListener("change", () => this.updateTextArea(element.id));
        }); 
    }

    deleteNote(id: string){
        console.log(id);
        this.removeId(Number(id));
        localStorage.removeItem(id);
        notes.removeNoteDiv(id);
    }
    removeId(id: number) {
        let listOfIds=  localStorage.getItem(this.idListName).split(":");
        let idx = listOfIds.indexOf(id.toString());
        let firstHalf = listOfIds.slice(0, idx);
        let secondHalf= listOfIds.slice( idx +1);
        let newArr = firstHalf.concat(secondHalf);
        localStorage.setItem(this.idListName, newArr.join(":"));
        
    }
    getAllNotes(): note[]{
        let listOfIds=  localStorage.getItem(this.idListName).split(":");
        let noteTab: note[] = [];
        for(let i of listOfIds){
            if(i!="0"){
                let note = this.getNote(i);
                noteTab.push({id: i, title: note.title, body: note.body, date: note.date, pinned: note.pinned, color: note.color,})
            }
        }
        return noteTab;
    }

    updateTextArea(id: string){
    const newNote = localStorage.getItem(id);
    let note = JSON.parse(newNote);
    let changedNote= (<HTMLTextAreaElement>document.querySelector("#textarea"+id)).value;
    note.body = changedNote;
    localStorage.setItem(id, JSON.stringify(note));
    }

}
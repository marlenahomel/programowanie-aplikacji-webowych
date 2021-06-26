
import {AppStorage} from './AppStorage'
import {Note} from './Note'
import {Notes } from "./Notes";
const notes: Notes= new Notes();
const storageHandler: AppStorage = new AppStorage();
const newNote: Note = new Note();

export class App{

    public constructor(){
        document.addEventListener('keypress', this.onKeyPress);
        let pinned :HTMLDivElement = document.querySelector("#noteBlocksPinned");
        let notpinned :HTMLDivElement = document.querySelector("#noteBlocks");
        pinned.addEventListener("dragend", this.dropOnUnPinned);
        notpinned.addEventListener("dragend", this.dropOnPinned);
        storageHandler.createNoteBlocks();
    }

    onKeyPress(ev: KeyboardEvent): void{
        if(ev.key == 'Enter'){
            newNote.createNote();
           }
        }

    dropOnPinned(ev : DragEvent){
        ev.preventDefault();
        const target = ev.target as HTMLElement;
        let id = target.id.substr(2,3);
        const newNote = localStorage.getItem(id);
        let note = JSON.parse(newNote);
        note.pinned = true;
        localStorage.setItem(id, JSON.stringify(note));
        notes.removeNoteDiv(id);
        notes.createNoteDiv(note);
        storageHandler.triggerDelListeners();
    }
    
    dropOnUnPinned(ev : DragEvent){
        ev.preventDefault();
        const target = ev.target as HTMLElement;
        let id = target.id.substr(2,3);
        const newNote = localStorage.getItem(id);
        let note = JSON.parse(newNote);
        note.pinned = false;
        localStorage.setItem(id, JSON.stringify(note));
        notes.removeNoteDiv(id);
        notes.createNoteDiv(note);
        storageHandler.triggerDelListeners();
        storageHandler.triggerTextAreaListeners
    }
}


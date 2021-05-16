import {NotesStorage} from './notesStorage'
import {CreateNote} from './createNote'

export class App{
    private notesStorage: NotesStorage;
    private createNote: CreateNote;

    public constructor(){
        document.addEventListener('keypress', this.onKeyPress);
    }

    onKeyPress(ev: KeyboardEvent): void{
        if(ev.key == 'Enter'){
           let enteredNote :  HTMLInputElement= document.querySelector("#note");
           let note: string = enteredNote.value;
           if(note){
                let notesStorage= new NotesStorage("notes");
                notesStorage.addNote(note);
                let createNote1= new CreateNote(notesStorage.getNote());
                createNote1.addNewNote(note);
            }
           }
        }
    }

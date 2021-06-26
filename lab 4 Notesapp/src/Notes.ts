import {note} from './Note'
import {AppStorage} from './AppStorage'


export class Notes{

    createNoteDiv(note: note) {        
        let place:HTMLDivElement;
        note.pinned ? place =  document.querySelector("#noteBlocksPinned") :  place = document.querySelector("#noteBlocks"); 
        if(note.color==""){
            note.color="black";
        }
        let noteBox= `<div class="noteBox" style="background-color: `+note.color+`;" draggable="true"" id=id`+note.id+`>
        <br/><h3>`+note.title+
        ` </h3><br/><textarea id=textarea`+note.id+` rows="5" style="background-color: `+note.color+`;"> `+note.body+`</textarea> </h3><br/> `+note.date+`
        <button id="note`+note.id+`" class="delbtn"> X</button>`;

        ;
        noteBox+="</div>";
        place.insertAdjacentHTML( 'beforeend',noteBox);
       
    }
    removeNoteDiv(id: string){
        let element :HTMLElement = document.querySelector("#id"+id);
        element.parentNode.removeChild(element);
    }

    
}
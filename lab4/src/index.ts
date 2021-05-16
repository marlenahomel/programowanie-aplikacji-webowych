import { App } from './app';
import './main.scss';
const clearButton= document.getElementById('clearButton');

clearButton.addEventListener('click',() => {
	localStorage.clear();
    location.reload();

    })
const app = new App();

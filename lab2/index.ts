let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

let RecordingOn1 = false;
let RecordingOn2 = false;
let RecordingOn3 = false;
let RecordingOn4 = false;

const channel1: any[] = [];
const channel2: any[] = [];
const channel3: any[] = [];
const channel4: any[] = [];

const btnChannel1Play = document.querySelector('#channel1Play');
const btnChannel2Play = document.querySelector('#channel2Play');
const btnChannel3Play = document.querySelector('#channel3Play');
const btnChannel4Play = document.querySelector('#channel4Play');

const btnChannel1Record = document.querySelector('#channel1Record');
const btnChannel2Record = document.querySelector('#channel2Record');
const btnChannel3Record = document.querySelector('#channel3Record');
const btnChannel4Record = document.querySelector('#channel4Record');


appStart();
function appStart(): void {
    document.addEventListener('keypress', onKeyDown);

    btnChannel1Play.addEventListener('click', onChannel1Play);
    btnChannel2Play.addEventListener('click', onChannel2Play);
    btnChannel3Play.addEventListener('click', onChannel3Play);
    btnChannel4Play.addEventListener('click', onChannel4Play);

    btnChannel1Record.addEventListener('click', onChannel1Record);
    btnChannel2Record.addEventListener('click', onChannel2Record);
    btnChannel3Record.addEventListener('click', onChannel3Record);
    btnChannel4Record.addEventListener('click', onChannel4Record);

    getAudioElements();
   
}
function onChannel1Play(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
    console.log("playing channel 1");
}

function onChannel2Play(): void {
    channel2.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
    console.log("playing channel 2");
}

function onChannel3Play(): void {
    channel3.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
    console.log("playing channel 3");
}

function onChannel4Play(): void {
    channel4.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })
    console.log("playing channel 4");
}

function onChannel1Record(): void {
    if(!RecordingOn1)
    {
        RecordingOn1= true;
        btnChannel1Record.textContent = "Recording, click to stop"
    }
    else if(RecordingOn1)
    {
        RecordingOn1= false;
        btnChannel1Record.textContent = "Record on channel 1"
    }
}

function onChannel2Record(): void {
    if(!RecordingOn2)
    {
        RecordingOn2= true;
        btnChannel2Record.textContent = "Recording, click to stop"
    }
    else if(RecordingOn2)
    {
        btnChannel2Record.textContent = "Record on channel 2"
        RecordingOn2= false;
    }
}

function onChannel3Record(): void {
    if(!RecordingOn3)
    {
        btnChannel3Record.textContent = "Recording, click to stop"
        RecordingOn3= true;
    }
    else if(RecordingOn3)
    {   
        btnChannel3Record.textContent = "Record on channel 3"
        RecordingOn3= false;
    }
}

function onChannel4Record(): void {
    if(!RecordingOn4)
    {
        btnChannel4Record.textContent = "Recording, click to stop"
        RecordingOn4= true;
    }
    else if(RecordingOn4)
    {
        btnChannel4Record.textContent = "Record on channel 4"
        RecordingOn4= false;
    }
}


function getAudioElements(){
    clapSound = document.querySelector('#clap');
    kickSound  = document.querySelector('#kick');
    boomSound = document.querySelector('#boom');
    hihatSound = document.querySelector('#hihat');
    openhatSound = document.querySelector('#openhat');
    rideSound = document.querySelector('#ride');
    snareSound = document.querySelector('#snare');
    tinkSound = document.querySelector('#tink');
    tomSound = document.querySelector('#tom');

}

function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    if(RecordingOn1)
    {
    channel1.push({key, time})
    playSound(key)
    }
    else
    {
        playSound(key)
    }

    if(RecordingOn2)
    {
    channel2.push({key, time})
    playSound(key)
    }
    else
    {
        playSound(key)
    }


    if(RecordingOn3)
    {
    channel3.push({key, time})
    playSound(key)
    }
    else
    {
        playSound(key)
    }

    if(RecordingOn4)
    {
    channel4.push({key, time})
    playSound(key)
    }
    else
    {
        playSound(key)
    }
}



function playSound(key: string): void {
    switch(key){
        case 'a':
            boomSound.currentTime = 0;
            boomSound.play()
            break;
        case 'r':
            clapSound.currentTime = 0;
            clapSound.play()
            break;
        case 's':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'd':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 't':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        
        case 'f':
            tomSound.currentTime = 0;
            tomSound.play();
            break;

        case 'e':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'q':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 'w':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'e':
            rideSound.currentTime = 0;
            rideSound.play();
            break;

    }
}


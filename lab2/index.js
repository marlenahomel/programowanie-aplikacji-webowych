var clapSound;
var kickSound;
var boomSound;
var hihatSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var RecordingOn1 = false;
var RecordingOn2 = false;
var RecordingOn3 = false;
var RecordingOn4 = false;
var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
var btnChannel1Play = document.querySelector('#channel1Play');
var btnChannel2Play = document.querySelector('#channel2Play');
var btnChannel3Play = document.querySelector('#channel3Play');
var btnChannel4Play = document.querySelector('#channel4Play');
var btnChannel1Record = document.querySelector('#channel1Record');
var btnChannel2Record = document.querySelector('#channel2Record');
var btnChannel3Record = document.querySelector('#channel3Record');
var btnChannel4Record = document.querySelector('#channel4Record');
appStart();
function appStart() {
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
function onChannel1Play() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
    console.log("playing channel 1");
}
function onChannel2Play() {
    channel2.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
    console.log("playing channel 2");
}
function onChannel3Play() {
    channel3.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
    console.log("playing channel 3");
}
function onChannel4Play() {
    channel4.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
    console.log("playing channel 4");
}
function onChannel1Record() {
    if (!RecordingOn1) {
        RecordingOn1 = true;
        btnChannel1Record.textContent = "Recording, click to stop";
    }
    else if (RecordingOn1) {
        RecordingOn1 = false;
        btnChannel1Record.textContent = "Record on channel 1";
    }
}
function onChannel2Record() {
    if (!RecordingOn2) {
        RecordingOn2 = true;
        btnChannel2Record.textContent = "Recording, click to stop";
    }
    else if (RecordingOn2) {
        btnChannel2Record.textContent = "Record on channel 2";
        RecordingOn2 = false;
    }
}
function onChannel3Record() {
    if (!RecordingOn3) {
        btnChannel3Record.textContent = "Recording, click to stop";
        RecordingOn3 = true;
    }
    else if (RecordingOn3) {
        btnChannel3Record.textContent = "Record on channel 3";
        RecordingOn3 = false;
    }
}
function onChannel4Record() {
    if (!RecordingOn4) {
        btnChannel4Record.textContent = "Recording, click to stop";
        RecordingOn4 = true;
    }
    else if (RecordingOn4) {
        btnChannel4Record.textContent = "Record on channel 4";
        RecordingOn4 = false;
    }
}
function getAudioElements() {
    clapSound = document.querySelector('#clap');
    kickSound = document.querySelector('#kick');
    boomSound = document.querySelector('#boom');
    hihatSound = document.querySelector('#hihat');
    openhatSound = document.querySelector('#openhat');
    rideSound = document.querySelector('#ride');
    snareSound = document.querySelector('#snare');
    tinkSound = document.querySelector('#tink');
    tomSound = document.querySelector('#tom');
}
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    if (RecordingOn1) {
        channel1.push({ key: key, time: time });
        playSound(key);
    }
    else {
        playSound(key);
    }
    if (RecordingOn2) {
        channel2.push({ key: key, time: time });
        playSound(key);
    }
    else {
        playSound(key);
    }
    if (RecordingOn3) {
        channel3.push({ key: key, time: time });
        playSound(key);
    }
    else {
        playSound(key);
    }
    if (RecordingOn4) {
        channel4.push({ key: key, time: time });
        playSound(key);
    }
    else {
        playSound(key);
    }
}
function playSound(key) {
    switch (key) {
        case 'a':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'r':
            clapSound.currentTime = 0;
            clapSound.play();
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

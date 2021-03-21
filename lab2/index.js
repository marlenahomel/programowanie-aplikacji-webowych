var clapSound;
var kickSound;
var boomSound;
var hihatSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var channel1 = [];
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('#channel1Play');
    btnChannel1Play.addEventListener('click', onChannel1Play);
    getAudioElements();
}
function onChannel1Play() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
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
    channel1.push({ key: key, time: time });
    console.log(channel1);
    playSound(key);
    console.log(ev);
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

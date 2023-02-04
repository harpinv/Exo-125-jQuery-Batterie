let touche1 = $('#touche1');
let touche2 = $('#touche2');
let touche3 = $('#touche3');
let touche4 = $('#touche4');
let touche5 = $('#touche5');
let touche6 = $('#touche6');
let touche7 = $('#touche7');
let touche8 = $('#touche8');
let touche9 = $('#touche9');

const audioCtx = new AudioContext();
const musique1 = $('#musique1');
const musique2 = $('#musique2');
const musique3 = $('#musique3');
const musique4 = $('#musique4');
const musique5 = $('#musique5');
const musique6 = $('#musique6');
const musique7 = $('#musique7');
const musique8 = $('#musique8');
const musique9 = $('#musique9');


$('#clavier:text').keydown(function (event) {
    if(event.which === 65) {
        touche1.addClass('playing');
        console.log("touche " + event.which + " enclenché");
        audioCtx.createMediaElementSource(musique1);

    }
    if(event.which === 83) {
        touche2.addClass('playing');
        console.log("touche " + event.which + " enclenché");
        audioCtx.createMediaElementSource(musique2);
    }
    if(event.which === 68) {
        touche3.addClass('playing');
        console.log("touche " + event.which + " enclenché");
        audioCtx.createMediaElementSource(musique3);
    }
    if(event.which === 70) {
        touche4.addClass('playing');
        console.log("touche " + event.which + " enclenché");
        audioCtx.createMediaElementSource(musique4);
    }
    if(event.which === 71) {
        touche5.addClass('playing');
        console.log("touche " + event.which + " enclenché");
        audioCtx.createMediaElementSource(musique5);
    }
    if(event.which === 72) {
        touche6.addClass('playing');
        console.log("touche " + event.which + " enclenché");
        audioCtx.createMediaElementSource(musique6);
    }
    if(event.which === 74) {
        touche7.addClass('playing');
        console.log("touche " + event.which + " enclenché");
        audioCtx.createMediaElementSource(musique7);
    }
    if(event.which === 75) {
        touche8.addClass('playing');
        console.log("touche " + event.which + " enclenché");
        audioCtx.createMediaElementSource(musique8);
    }
    if(event.which === 76) {
        touche9.addClass('playing');
        console.log("touche " + event.which + " enclenché");
        audioCtx.createMediaElementSource(musique9);
    }

})
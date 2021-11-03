const language = document.querySelector('.language');
const nolanguage = document.querySelector('.no-language');
const puzzle = document.querySelector('.puzzle');
const nopuzzle = document.querySelector('.no-puzzle');
const box = document.querySelector('.answer-box');
const submit = document.querySelector('.submit-button');
const question = document.querySelector('.question');
const body = document.querySelector('.dead-body');
const ha = document.querySelector(".hulpafbeelding");
const help = document.querySelector('.wrong');
const minutesTime = 15;
let time = minutesTime * 60;
const countdownEl = document.querySelector('.countdown');

setInterval(updateCountdown, 1000);
function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;   
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    
}
if (language) {
    language.addEventListener('click', function () {

        language.classList.remove('language');
        language.classList.add('scroll');
        nolanguage.classList.add('language');
        
    })
}
if (nolanguage) {
    nolanguage.addEventListener('click', function () {

        language.classList.remove('scroll');
        language.classList.add('language');
        nolanguage.classList.remove('language');
    })
}
if (puzzle) {
    puzzle.addEventListener('click', function () {
        ha.classList.remove("hide");
        ha.classList.add("show");
        nopuzzle.classList.add('puzzle');
        box.classList.add('answer');
        box.classList.remove('empty');
        question.classList.remove('empty');
        submit.classList.remove('empty');
    })
}
if (nopuzzle) {
    nopuzzle.addEventListener('click', function () {

        ha.classList.add("hide");
        ha.classList.remove("show");
        nopuzzle.classList.remove('puzzle');
        box.classList.remove('answer');
        box.classList.add('empty');
        question.classList.add('empty');
        submit.classList.add('empty');
    })
}
if (submit) {
    submit.addEventListener('click', function () {
        if (box.value.includes('halloween feest uitnodiging') || box.value.includes('Halloween feest uitnodiging')) {
            const text = document.querySelector('.message');
            text.classList.remove('hide');
            text.classList.add('show');
            language.classList.remove('scroll');
            ha.classList.remove("show");
            ha.classList.add('hide');
            submit.classList.add('empty')
            box.classList.add('empty');
            question.classList.add('empty');
            help.classList.add('hide');
        
        }
        else {
            
            help.classList.remove('hide');
        }
    })
}

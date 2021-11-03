const language = document.querySelector('.language');
const nolanguage = document.querySelector('.no-language');
const puzzle = document.querySelector('.puzzle');
const nopuzzle = document.querySelector('.no-puzzle');
const box = document.querySelector('.answer-box');
const submit = document.querySelector('.submit-button');
const question = document.querySelector('.question');
const body = document.querySelector('.dead-body');

if (language) {
    language.addEventListener('click', function () {

        //document.getElementById("language").style.backgroundImage = "url('img/language.png')";
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

        //document.getElementById("language").style.backgroundImage = "url('img/language.png')";
        puzzle.classList.remove('puzzle');
        puzzle.classList.add('puzzle-code');
        nopuzzle.classList.add('puzzle');
        box.classList.add('answer');
        box.classList.remove('empty');
        question.classList.remove('empty');
        submit.classList.remove('empty');
    })
}
if (nopuzzle) {
    nopuzzle.addEventListener('click', function () {

        puzzle.classList.remove('puzzle-code');
        puzzle.classList.add('puzzle');
        nopuzzle.classList.remove('puzzle-code');
        box.classList.remove('answer');
        box.classList.add('empty');
        question.classList.add('empty');
        submit.classList.add('empty');
    })
}/*
if (body) {
    body.addEventListener('click', function () {

        language.classList.remove('scroll');
        language.classList.add('language');
    })
}*/
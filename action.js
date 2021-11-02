const language = document.querySelector('.language');
const nolanguage = document.querySelector('.no-language');
const puzzle = document.querySelector('.puzzle');
const nopuzzle = document.querySelector('.no-puzzle');
const box = document.querySelector('.answer-box');
const body = document.querySelector('.dead-body');

if (language) {
    language.addEventListener('click', function () {

        //document.getElementById("language").style.backgroundImage = "url('img/language.png')";
        language.classList.remove('language');
        language.classList.add('scroll');
        nolanguage.classList.add('language');
        box.classList.remove('answer-box');
        box.classList.add('answer');
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
    })
}
if (nopuzzle) {
    nopuzzle.addEventListener('click', function () {

        puzzle.classList.remove('puzzle-code');
        puzzle.classList.add('language');
        nopuzzle.classList.remove('language');
    })
}/*
if (body) {
    body.addEventListener('click', function () {

        language.classList.remove('scroll');
        language.classList.add('language');
    })
}*/
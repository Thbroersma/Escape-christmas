const language = document.querySelector('.language')
const nolanguage = document.querySelector('.no-language')
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
}/*
if (body) {
    body.addEventListener('click', function () {

        language.classList.remove('scroll');
        language.classList.add('language');
    })
}*/
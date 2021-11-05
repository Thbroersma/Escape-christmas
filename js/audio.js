const door = document.querySelector('.exit');
const doorAudio = new Audio ('audio/closeddoor.mp3');
const introGame = document.querySelector('startintro');
const intro = new Audio ('audio/intro.mp3');


function play(){
    const audio = document.querySelector(".startGame");
    audio.play();
    }
if (introGame) {
    introGame.addEventListener('onclick', function() {
        intro.play();
    })
}

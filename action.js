let numberOfPuzzle = 1;
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
const puzzleOne = document.querySelector('.puzzel1');
const boneOne = document.querySelector('.leg');
const boneTwo = document.querySelector('.head');
const skeleton = document.querySelector('.skelet');
const exit = document.querySelector('.exit');
const codeCase = document.querySelector('.case');
const lock = document.querySelector('.lock');
const safe = document.querySelector('.safe');
const textbox = document.querySelector('.textbox-area');
const minutesTime = 15;
let time = minutesTime * 60;
const countdownEl = document.querySelector('.countdown');
let boneOneCollect = false;
let boneTwoCollect = false;
let bonesCollected = 0;

setInterval(updateCountdown, 1000);
function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;   
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}
    
for(let i = 0; i<3; i++){
  if(numberOfPuzzle == 1){
    boneOne.addEventListener('click', function(){
      if (bonesCollected == 1){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot2.png'></img>";
        bonesCollected++;
        console.log(bonesCollected);
      } else{
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot1.png'></img>";
        bonesCollected++;
      }
      
      boneOneCollect = true;
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    boneTwo.addEventListener('click', function(){
      if (bonesCollected == 1){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot2.png'></img>";
        bonesCollected++;
      } else{
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot1.png'></img>";
        bonesCollected++;
      }
      boneTwoCollect = true;
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    skeleton.addEventListener('click', function(){
      if(bonesCollected <2){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-skelet-geenbot.png'></img>";
        textbox.addEventListener('click', function(){
          textbox.innerHTML = " ";
        })
        console.log(bonesCollected);
      }
    })
    numberOfPuzzle++;
  }
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


            text.addEventListener('click', function () {
              text.innerHTML = " ";
            }) 
        }
        else {
            
            help.classList.remove('hide');
        }
    })
}

function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  function shuffle() {
  //Use nested loops to access each cell of the 3x3 grid
  for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
     for (var column=1;column<=3;column++) { //For each column in this row
    
      var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
      var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
       
      swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
    } 
  } 
  }
  
  function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="tile9") { 
         //Checking if white tile on the right
         if (column<3) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         //Checking if white tile is below
         if (row<3) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
    
  }
  

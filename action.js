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
  
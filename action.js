let numberOfPuzzle = 2;
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
const endPuzzleOne = document.querySelector('.eindePuzzelEen');
const inputButtonOne = document.querySelector('.inputButtonOne');
const inputCodeOne = document.querySelector('.inputCodeOne');
const strangeCode = document.querySelector('.strangeCode');
const submitTranslation = document.querySelector('.submit-translation');
const minutesTime = 15;
let time = minutesTime * 60;
const countdownEl = document.querySelector('.countdown');
let boneOneCollect = false;
let boneTwoCollect = false;
let bonesCollected = 0;
let keyReceived = false;
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
    language.addEventListener('click', function(){
      textbox.innerHTML = " ";
        })
    exit.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel-1-deur.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    codeCase.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel 1 codeslot.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    lock.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-code-deur.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    safe.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel 1 kluis.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    boneOne.addEventListener('click', function(){
      if(bonesCollected == 1 && boneOneCollect == false){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot2.png'></img>";
        bonesCollected++;

      }else if(boneOneCollect == false){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot1.png'></img>";
        bonesCollected++;
      }
      
      boneOneCollect = true;
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    boneTwo.addEventListener('click', function(){
      if(bonesCollected == 1 && boneTwoCollect == false){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot2.png'></img>";
        bonesCollected++;
      }else if(boneTwoCollect == false){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-bot1.png'></img>";
        bonesCollected++;
      }
      boneTwoCollect = true;
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    skeleton.addEventListener('click', function(){
      if (bonesCollected <2){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-skelet-geenbot.png'></img>";
        textbox.addEventListener('click', function(){
          textbox.innerHTML = " ";
        })
      } else {
        shuffle();
        puzzleOne.classList.toggle('hide');
      }
    })
    endPuzzleOne.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel1-skelet-gemaakt.png'></img>";
      numberOfPuzzle = 2;
      puzzleOne.classList.toggle('hide');
    })
  }else if(numberOfPuzzle == 2){
    boneOne.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-skelet.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    boneTwo.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-skelet.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    skeleton.addEventListener('click', function(){
      textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-skelet.png'></img>";
      textbox.addEventListener('click', function(){
        textbox.innerHTML = " ";
      })
    })
    codeCase.addEventListener('click', function(){
        if(keyReceived == true){
          textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-legedoos\.png'></img>";
        }else {
          textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-codeslot.png'></img>";
          textbox.addEventListener('click', function(){
            textbox.innerHTML = " ";
            inputButtonOne.classList.remove('hide');
            inputCodeOne.classList.remove('hide');
            inputButtonOne.addEventListener('click', function(){
              const codeAnswer = inputCodeOne.value;
              if(codeAnswer == 2137){
                textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-opendoos\.png'></img>";
                textbox.addEventListener('click', function(){
                  textbox.innerHTML = " ";
                  inputButtonOne.classList.add('hide');
                  inputCodeOne.classList.add('hide');
                  keyReceived = true;
                  
                })
              }else {
                alert("Code is onjuist!");
              }
            })
          })
        }
        
    })
    safe.addEventListener('click', function(){
      if(keyReceived == true){
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-openkluis\.png'></img>";
        textbox.addEventListener('click', function(){
          textbox.innerHTML =  "<img class='showingtextimage'src='img/textfoto/puzzel2-decoding.png'></img>";
          textbox.addEventListener('click', function(){
            textbox.innerHTML = " ";
            strangeCode.innerHTML = "<img class='puzzle-code' src='img/puzzle.png'>";
          strangeCode.innerHTML += "<img class='puzzel-code' src='img/language.png'>";
          box.classList.toggle('hide');

          strangeCode.addEventListener('click', function(){
            strangeCode.innerHTML = " ";

          
          })
          })
        })
      } else {
        textbox.innerHTML = "<img class='showingtextimage'src='img/textfoto/puzzel2-geensleutel-kluis\.png'></img>";
        textbox.addEventListener('click', function(){
          textbox.innerHTML = " ";

        })
      }
    })
  }
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
  

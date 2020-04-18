/* GameFundamentalCode*/

const cards = document.querySelectorAll('.card'); //select all class elements with card
let numberAttempts = 0; // sets number of attempts to 0
let hasFlippedCard = false; // all cards false 
let lockBoard = false; // do not lock board 
let firstCard, secondCard; // define first and second variables
var shufflenumber = cards.length; //shuffle number equals the amount of cards in the game

cards.forEach(card => card.addEventListener('click', flipCard)); //add eventlistener to cards, if its clicked - flip it

$(function() { // shuffle on load screen
    shuffle();
});

function flipCard() {  //adds class of flip to card
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) { //first click 
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  secondCard = this; //second click

    numberAttempts++; //adds 1 to number of attempts after every two clicks
    attempts(); //calls function attempts


  checkForMatch(); // calls function check for match
}

function attempts() { //adds the updated number of attempts +1 to the html element continously after every second click
    $('.numberattempts').html(numberAttempts);
}

function checkForMatch() { //checks if the data-name in first card matches the data-name in the second card
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards(); // it's a match call function to disable the cards unflipping - otherwise unflip them
}

function disableCards() { //if matches removes ability to click and adds match class, calls win function check if player has won
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  firstCard.classList.add('match');
  secondCard.classList.add('match');
  win();
  resetBoard();
}

function unflipCards() { // if cards do not match it removes the flip classes and the cards flip back
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1200);
}

function resetBoard() { // resets for remaining cards and restarts the process 
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() { //shuffles cards based on the shufflenumber and puts them in random order 
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * shufflenumber);
    card.style.order = randomPos;
  });
}


function restart() { //restarts the game - tied to the restart and try again button, shuffles, removes flip and match classes, sets number attempts to 0, adds event listener, reshows the cards and hides the results modal
    cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * shufflenumber );
    card.style.order = randomPos;  
    card.classList.remove('flip', 'match'); 
    numberAttempts = 0;
    $('.numberattempts').html(numberAttempts);
    cards.forEach(card => card.addEventListener('click', flipCard));
     $('.game').show();
    rehide ();
    });
}


function win() { // checks if the amount of matches equal the shuffle number - if they do - the game has been completed - hides the cards and displays the results modal
    matches = $('.match');
    numbersmatched = matches.length;
    if (numbersmatched == shufflenumber) {
    setTimeout(function(){
    $('.game').hide();}, 1200);
    setTimeout(function(){
    revealresult();}, 1500);
}
}

function revealresult(){ //checks how many attempts player has made and shows the winning or losing modal
 if (numberAttempts <= (shufflenumber/2)+(4)) { 
        $('.winner').show();
        $("#win").removeClass("winner");
       

    } else { 
            $('.loser').show();
              $("#lose").removeClass("loser");
        }
}

function rehide () { // rehides the modal after a restard
    $("#win").addClass("winner");
    $('.winner').hide();
    $("#lose").addClass("loser");
    $('.loser').hide();
}


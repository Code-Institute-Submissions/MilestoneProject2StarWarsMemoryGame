/* GameFundamentalCode*/

const cards = document.querySelectorAll('.card'); 
let numberAttempts = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var shufflenumber = cards.length;

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

    numberAttempts++;
    attempts();


  checkForMatch();
}


function attempts() {
    $('.numberattempts').html(numberAttempts);
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  firstCard.classList.add('match');
  secondCard.classList.add('match');
  win();
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1200);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * shufflenumber);
    card.style.order = randomPos;
  });
}


function restart() {
    cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * shufflenumber );
    card.style.order = randomPos;
    card.classList.remove('flip', 'match'); 
    numberAttempts = 0;
    $('.numberattempts').html(numberAttempts);
    cards.forEach(card => card.addEventListener('click', flipCard));
     $('.game').show();
    card.classList.remove('flip', 'match'); 
    rehide ();
    })
}


function win() {
    matches = $('.match');
    numbersmatched = matches.length;
    if (numbersmatched == shufflenumber) {
    setTimeout(function(){
    $('.game').hide();}, 1200);
    setTimeout(function(){
    revealresult();}, 1500);
}
}

function revealresult(){
 if (numberAttempts <= (shufflenumber/2)+(2)) { 
        $('.winner').show() 
        $("#win").removeClass("winner");
       

    } else { 
            $('.loser').show() 
              $("#lose").removeClass("loser");
        }
}

function rehide () {
    $("#win").addClass("winner");
    $('.winner').hide();
    $("#lose").addClass("loser");
    $('.loser').hide();
}


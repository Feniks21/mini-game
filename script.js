



const cards = document.querySelectorAll('.card');

let card = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip'); // Возвращает псевдомассив

  if (!card) {
    card = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  check();
}

function check() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disable() : unflipCards();
}

function disable() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  reset();

}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    reset();
  }, 1000);
}

function reset() {
  [card, lockBoard] = [false, false];
}

(function ran() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
// Task 2
const numbers = [7, 11, 24]; 
fetch(`http://numbersapi.com/${numbers.join(',')}?json`)
  .then(response => response.json())
  .then(data => {
    Object.values(data).forEach(fact => {
      const p = document.createElement('p');
      p.innerText = fact;
      document.body.appendChild(p);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// task 3
const number = 7; 
const facts = [];

for (let i = 0; i < 4; i++) {
  fetch(`http://numbersapi.com/${number}?json`)
    .then(response => response.json())
    .then(data => {
      facts.push(data.text);
      if (facts.length === 4) {
        facts.forEach(fact => {
          const p = document.createElement('p');
          p.innerText = fact;
          document.body.appendChild(p);
        });
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// part two 
// task 1
fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  .then(response => response.json())
  .then(data => {
    const card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  })
  .catch(error => console.error('Error:', error));

// task 2
fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  .then(response => response.json())
  .then(data => {
    const firstCard = data.cards[0];
    const deckId = data.deck_id;
    console.log(`${firstCard.value} of ${firstCard.suit}`);
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  })
  .then(response => response.json())
  .then(data => {
    const secondCard = data.cards[0];
    console.log(`${secondCard.value} of ${secondCard.suit}`);
  })
  .catch(error => console.error('Error:', error));

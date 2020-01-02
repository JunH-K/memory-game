export default class Card {
  constructor(front, back, key) {
    this.front = front;
    this.back = back;
    this.key = key;
  }

  get element() {
    return this.createCard( this.front, this.back, this.key );
  }

  createCard(front, back, key) {
    const cardDiv = document.createElement( 'div' );
    const frontDiv = document.createElement( 'div' );
    const backDiv = document.createElement( 'div' );

    cardDiv.classList.add( 'card' );
    frontDiv.classList.add( 'card-side', 'card-side-front' );
    backDiv.classList.add( 'card-side', 'card-side-back' );

    frontDiv.style.backgroundImage = `url("${ front }")`;
    frontDiv.style.backgroundRepeat = 'no-repeat';
    backDiv.style.backgroundImage = `url("${ back }")`;
    backDiv.style.backgroundRepeat = 'no-repeat';
    backDiv.dataset.key = key;

    cardDiv.appendChild( frontDiv );
    cardDiv.appendChild( backDiv );

    return cardDiv;
  }
}
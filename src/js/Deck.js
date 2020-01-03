import Card from "./Card";

export default class Deck {
  constructor(datas) {
    this.datas = datas;
    this.cards = [];
    this.createCards( this.datas );
  }

  createCards(datas=[]) {
    datas.forEach( (item) => {
      const { frontImage, backImage, key } = item;
      const card = new Card( frontImage, backImage, key );
      this.cards.push( card );
    } );
  }


  createElements() {
    const cards = document.createDocumentFragment();
    this.cards.forEach( (card) => {
      cards.append( card.element );
    } );

    return cards
  }

  shuffle() {
    const { length } = this.cards;

    for ( let i = 0; i < 100; i++ ) {
      const random = Math.floor( Math.random() * length );
      [ this.cards[ 0 ], this.cards[ random ] ] = [ this.cards[ random ], this.cards[ 0 ] ];
    }

    return this.cards;
  }
}

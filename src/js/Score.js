import Dom from "./util/Dom";

export default class Score {
  constructor(store) {
    this.store = store;
    this.scoreElem = document.querySelector( '.score' );
  }

  updateScore(score) {
    const scores = this.store.getLocalStorage( 'scores' );
    score && scores.push( score );

    scores.sort( (a, b) => a - b );
    this.store.setLocalStorage( 'scores', scores.slice( 0, 10 ) );
    this.render( scores );
  }

  render(scores) {
    const frag = document.createDocumentFragment();

    Array.from( this.scoreElem.childNodes ).forEach( (child) => {
      this.scoreElem.removeChild( child );
    } );

    scores.slice( 0, 3 ).forEach( (item, index) => {
      const liElem = document.createElement( 'li' );
      Dom.setText( liElem, `${ index + 1 }위 ${ item }초` );
      frag.appendChild( liElem );
    } );

    this.scoreElem.appendChild( frag );
  }

}

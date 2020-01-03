import Dom from "./util/Dom";

export default class Score {
  constructor(store) {
    this.store = store;
  }

  updateScore(score) {
    const scores = this.store.getLocalStorage( 'scores' );
    score && scores.push( score ).sort( (a, b) => a - b );
    this.store.setLocalStorage( 'scores', scores );
    this.render( scores );
  }

  render(scores) {
    const scoreElem = document.querySelector( '.score' );
    const frag = document.createDocumentFragment();

    Array.from( scoreElem.childNodes ).forEach( (child) => {
      scoreElem.removeChild( child );
    } );

    scores.slice( 0, 3 ).forEach( (item, index) => {
      const liElem = document.createElement( 'li' );
      Dom.setText( liElem, `${ index + 1 }위 ${ item }초` );
      frag.appendChild( liElem );
    } );
    scoreElem.appendChild( frag );
    console.log( scoreElem );
  }

}

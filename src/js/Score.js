import Dom from "./Dom";

export default class Score {
  constructor(store) {
    this.store = store;
  }

  updateScore(score) {
    const scoreElem = document.querySelector( '.score' );
    const frag = document.createDocumentFragment();
    const scores = this.store.getLocalStorage( 'scores' );

    score && scores.push( score );
    scores.sort((a,b)=>a-b);

    Array.from( scoreElem.childNodes ).forEach( (child) => {
      scoreElem.removeChild( child );
    } );

    scores.forEach( (item, index) => {
      const liElem = document.createElement( 'li' );
      if( index > 2 ) {
        return;
      }
      Dom.setText( liElem, `${ index + 1 }위 ${ item }초` );
      frag.appendChild( liElem );
    } );

    scoreElem.appendChild( frag );
    this.store.setLocalStorage( 'scores', scores );
  }

}
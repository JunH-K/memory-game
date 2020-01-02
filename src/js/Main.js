import datas from "./datas/Datas";
import Card from "./Card";

export default class Main {
  constructor(store) {
    this.store = store;
  }

  static REMAIN_TIME = 60;
  remainTime = Main.REMAIN_TIME;
  clickElement = [];
  matchingCount = 0;
  interval = null;
  isRestart = false;
  containerElem;
  dimElem;
  startWrap;
  startElem;
  timeElem;

  init() {
    this.containerElem = document.querySelector( '.container' );
    this.dimElem = document.querySelector( '.dim' );
    this.startWrap = document.querySelector( '.start_wrap' );
    this.startElem = document.querySelector( '.start' );
    this.timeElem = document.querySelector( '#time-remaining' );
    this.containerElem.addEventListener( 'click', this.onClickCard );
    this.startElem.addEventListener( 'click', this.startGame );
    this.initCard();
  }

  initCard() {
    const dataSource = this.shuffle( datas );
    // const container = document.querySelector( '.container' );
    const cards = document.createDocumentFragment();

    dataSource && dataSource.forEach( (item) => {
      const { frontImage, backImage, key } = item;
      const card = new Card( frontImage, backImage, key );
      cards.append( card.element );
    } );

    this.containerElem.appendChild( cards );

    if( !this.store.getLocalStorage( 'scores' ) ) {
      this.store.setLocalStorage( 'scores', [] );
    } else {
      this.updateScore();
    }
  }

  startGame = (e) => {
    if( !this.isRestart && e.target.classList.contains( 'start_wrap' ) ) {
      this.startInterval();
    } else {
      this.reset();
      this.startInterval();
    }

    this.hide( this.dimElem );
    this.hide( this.startWrap );

  };

  updateScore(score) {
    const scoreElem = document.querySelector( '.score' );
    const frag = document.createDocumentFragment();
    const scores = this.store.getLocalStorage( 'scores' );
    score && scores.push( score );
    scores.sort();

    Array.from( scoreElem.childNodes ).forEach( (child) => {
      scoreElem.removeChild( child );
    } );

    scores.forEach( (item, index) => {
      const liElem = document.createElement( 'li' );
      if( index > 2 ) {
        return;
      }
      this.setText( liElem, `${ index + 1 }위 ${ item }초` );
      frag.appendChild( liElem );
    } );

    scoreElem.appendChild( frag );
    this.store.setLocalStorage( 'scores', scores );
  }

  onClickCard = (e) => {
    if( this.clickElement.length < 2 && e.target.classList.contains( 'card-side-back' ) ) {
      e.target.parentNode.classList.add( 'flip' );
      this.clickElement.push( e.target );
      this.checkMatching();
    }
  }

  checkMatching = this.debounce( () => {
    if( this.clickElement.length !== 2 ) {
      return;
    }

    if( this.clickElement[ 0 ].dataset.key === this.clickElement[ 1 ].dataset.key ) {
      this.matchingCount++;
    } else {
      this.clickElement.forEach( (i) => {
        i.parentNode.classList.remove( 'flip' );
      } );
    }

    this.checkWin( this.matchingCount );
    this.clickElement = [];
  }, 500 );

  checkWin(count) {
    if( count === 8 ) {
      clearInterval( this.interval );
      this.show( this.dimElem );
      this.startWrap.style.display = 'flex';
      this.setText( this.startElem, "Complete! <br/> Restart" );
      this.isRestart = true;
      this.updateScore( Main.REMAIN_TIME - this.remainTime );
    }
  }

  reset() {
    //남은시간초기화
    this.setText( this.timeElem, Main.REMAIN_TIME );
    this.matchingCount = 0;
    this.remainTime = Main.REMAIN_TIME;

    //카드 초기화
    Array.from( this.containerElem.childNodes ).forEach( (child) => {
      if( child.classList && child.classList.contains( 'card' ) ) {
        this.containerElem.removeChild( child );
      }
    } );
    //initCard
    this.initCard();
  }

  shuffle(datas) {
    const double = [ ...datas, ...datas.reverse() ];
    const { length } = double;

    for ( let i = 0; i < length; i++ ) {
      const random = Math.floor( Math.random() * length );
      [ double[ i ], double[ random ] ] = [ double[ random ], double[ i ] ];
    }

    return double;
  }

  debounce(func, delay) {
    let timer = null;

    return function () {
      if( timer ) {
        clearTimeout( timer );
      }
      timer = setTimeout( func, delay );
    }
  }

  show(elem) {
    elem.style.display = 'block';
  }

  hide(elem) {
    elem.style.display = 'none';
  }

  setText(elem, text) {
    elem.innerHTML = text;
  }

  startInterval = () => {
    this.interval = setInterval( () => {
      this.remainTime -= 1;
      this.setText( this.timeElem, this.remainTime );

      if( this.remainTime === 0 ) {
        clearInterval( this.interval );
        this.show( this.dimElem );
        this.startWrap.style.display = 'flex';
        this.setText( this.startElem, "Game Over<br/>Restart" );
        this.isRestart = true;
        this.updateScore( Main.REMAIN_TIME - this.remainTime );
      }
    }, 1000 );
  }

}
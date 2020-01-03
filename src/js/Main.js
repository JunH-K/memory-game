import Dom from "./util/Dom";
import Deck from "./Deck";
import Store from "./Store";
import Score from "./Score";

export default class Main {
  static REMAIN_TIME = 60;

  constructor(datas) {
    const store = new Store( 'scores' );
    this.score = new Score( store );
    this.deck = new Deck( datas );
  }

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

  checkMatching = this.debounce( () => {
    if ( this.clickElement.length !== 2 ){
      return;
    }

    if ( this.clickElement[ 0 ].dataset.key === this.clickElement[ 1 ].dataset.key ){
      this.matchingCount++;
    } else {
      this.clickElement.forEach( (i) => {
        i.parentNode.classList.remove( 'flip' );
      } );
    }
    this.checkWin( this.matchingCount );
    this.clickElement = [];
  }, 500 );

  run() {
    this.containerElem = Dom.find( '.container' );
    this.dimElem = Dom.find( '.dim' );
    this.startWrap = Dom.find( '.start_wrap' );
    this.startElem = Dom.find( '.start' );
    this.timeElem = Dom.find( '#time-remaining' );
    Dom.on( this.containerElem, 'click', this.onClickCard );
    Dom.on( this.startElem, 'click', this.onClickStartGame );
    this.initCard(  );
  }

  initCard() {
    this.deck.shuffle();
    const cardElements = this.deck.createElements();
    this.containerElem.appendChild( cardElements );
    this.score.updateScore();
  }


  checkWin(count) {
    if ( count === 8 ){
      clearInterval( this.interval );
      Dom.show( this.dimElem );
      Dom.showFlex( this.startWrap );
      Dom.setText( this.startElem, "Complete! <br/> Restart" );
      this.isRestart = true;
      this.score.updateScore( Main.REMAIN_TIME - this.remainTime );
    }
  }

  reset() {
    //남은시간초기화
    Dom.setText( this.timeElem, Main.REMAIN_TIME );
    this.matchingCount = 0;
    this.remainTime = Main.REMAIN_TIME;

    //카드 초기화
    Array.from( this.containerElem.childNodes ).forEach( (child) => {
      if ( child.classList && child.classList.contains( 'card' ) ){
        this.containerElem.removeChild( child );
      }
    } );

    this.initCard( cardData );
  }

  debounce(func, delay) {
    let timer = null;
    return function () {
      if ( timer ){
        clearTimeout( timer );
      }
      timer = setTimeout( func, delay );
    }
  }

  startInterval = () => {
    this.interval = setInterval( () => {
      this.remainTime -= 1;
      Dom.setText( this.timeElem, this.remainTime );
      this.gameOver( this.remainTime, 0 );
    }, 1000 );
  };

  gameOver = (remainTime, timeout) => {
    if ( remainTime === timeout ){
      clearInterval( this.interval );
      this.isRestart = true;
      this.score.updateScore( Main.REMAIN_TIME - this.remainTime );
      Dom.setText( this.dimElem );
      Dom.show( this.dimElem );
      Dom.showFlex( this.startWrap );
      Dom.setText( this.startElem, "Game Over<br/>Restart" );
    }
  }

  onClickStartGame = (e) => {
    if ( !this.isRestart && e.target.classList.contains( 'start' ) ){
      this.startInterval();
    } else {
      this.reset();
      this.startInterval();
    }

    Dom.hide( this.dimElem );
    Dom.hide( this.startWrap );

  };

  onClickCard = (e) => {
    if ( this.clickElement.length < 2 && e.target.classList.contains( 'card-side-back' ) ){
      e.target.parentNode.classList.add( 'flip' );
      this.clickElement.push( e.target );
      this.checkMatching();
    }
  }
}

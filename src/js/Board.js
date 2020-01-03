import Dom from "./util/Dom";
import Deck from "./Deck";
import Store from "./Store";
import Score from "./Score";
import { debounce } from "./util/util";

export default class Board {
  static REMAIN_TIME = 60;

  constructor(datas) {
    const store = new Store( 'scores' );
    this.score = new Score( store );
    this.deck = new Deck( datas );
    this.gameEndCount = datas.length / 2;

    this.containerElem = Dom.find( '.container' );
    this.dimElem = Dom.find( '.dim' );
    this.startWrap = Dom.find( '.start_wrap' );
    this.startElem = Dom.find( '.start' );
    this.timeElem = Dom.find( '#time-remaining' );
    this.remainTime = Board.REMAIN_TIME;
    this.clickElement = [];
    this.matchingCount = 0;
    this.interval = null;
  }

  checkMatching = debounce( () => {
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
    Dom.on( this.containerElem, 'click', this.onClickCard );
    Dom.on( this.startElem, 'click', this.onClickStartGame );
    this.initCard();
  }

  initCard() {
    this.deck.shuffle();
    const cardElements = this.deck.createElements();
    this.containerElem.appendChild( cardElements );
    this.score.updateScore();
  }

  checkWin(count) {
    if ( count !== this.gameEndCount ){
      return;
    }

    clearInterval( this.interval );
    Dom.show( this.dimElem );
    Dom.showFlex( this.startWrap );
    Dom.setText( this.startElem, "Complete! <br/> Restart" );
    this.score.updateScore( Board.REMAIN_TIME - this.remainTime );
  }

  reset() {
    this.matchingCount = 0;
    this.remainTime = Board.REMAIN_TIME;
    this.removeCard();
    this.initCard();
    Dom.setText( this.timeElem, Board.REMAIN_TIME );
  }

  removeCard(){
    Array.from( this.containerElem.childNodes ).forEach( (child) => {
      if ( child.classList && child.classList.contains( 'card' ) ){
        this.containerElem.removeChild( child );
      }
    } );
  }

  startInterval = () => {
    this.interval = setInterval( () => {
      this.remainTime -= 1;
      Dom.setText( this.timeElem, this.remainTime );
      this.checkGameOver( this.remainTime, 0 );
    }, 1000 );
  };

  checkGameOver = (remainTime, timeout) => {
    if ( remainTime === timeout ){
      clearInterval( this.interval );
      this.score.updateScore( Board.REMAIN_TIME - this.remainTime );

      Dom.setText( this.dimElem );
      Dom.show( this.dimElem );
      Dom.showFlex( this.startWrap );
      Dom.setText( this.startElem, "Game Over<br/>Restart" );
    }
  };

  onClickStartGame = () => {
    this.reset();
    this.startInterval();

    Dom.hide( this.dimElem );
    Dom.hide( this.startWrap );
  };

  onClickCard = (e) => {
    if ( this.clickElement.length < 2 && e.target.classList.contains( 'card-side-back' ) ){
      e.target.parentNode.classList.add( 'flip' );
      this.clickElement.push( e.target );
      this.checkMatching();
    }
  };
}

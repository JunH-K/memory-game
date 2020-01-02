import datas from "./datas/Datas";
import Card from "./Card";
import Dom from "./Dom";

export default class Main {
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

  constructor(score) {
    this.score = score;
  }

  init() {
    this.containerElem = document.querySelector( '.container' );
    this.dimElem = document.querySelector( '.dim' );
    this.startWrap = document.querySelector( '.start_wrap' );
    this.startElem = document.querySelector( '.start' );
    this.timeElem = document.querySelector( '#time-remaining' );
    this.containerElem.addEventListener( 'click', this.onClickCard );
    this.startElem.addEventListener( 'click', this.onCliskStartGame );
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
    this.score.updateScore();
  }

  onCliskStartGame = (e) => {
    if( !this.isRestart && e.target.classList.contains( 'start_wrap' ) ) {
      this.startInterval();
    } else {
      this.reset();
      this.startInterval();
    }

    Dom.hide( this.dimElem );
    Dom.hide( this.startWrap );

  };

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
      Dom.setText( this.dimElem );
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

  startInterval = () => {
    this.interval = setInterval( () => {
      this.remainTime -= 1;
      Dom.setText( this.timeElem, this.remainTime );

      if( this.remainTime === 50 ) {
        clearInterval( this.interval );
        this.isRestart = true;
        this.score.updateScore( Main.REMAIN_TIME - this.remainTime );
        Dom.setText( this.dimElem );
        Dom.show( this.dimElem );
        Dom.showFlex( this.startWrap );
        Dom.setText( this.startElem, "Game Over<br/>Restart" );
      }
    }, 1000 );
  }

}
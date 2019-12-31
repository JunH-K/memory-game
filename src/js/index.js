import '../css/reset.css'
import '../css/style.css'
import angular from '../img/angular.png';
import node from '../img/node.svg';
import react from '../img/react.png';
import vue from '../img/vue.png';
import html from '../img/html.png';
import github from '../img/github.png';
import ws from '../img/ws.png';
import docker from '../img/docker.png';
import game from '../img/game.png';


const datas = [
  { frontImage: angular, backImage: 'js.png', key: 1 },
  { frontImage: node, backImage: 'js.png', key: 2 },
  { frontImage: react, backImage: 'js.png', key: 3 },
  { frontImage: vue, backImage: 'js.png', key: 4 },
  { frontImage: html, backImage: 'js.png', key: 5 },
  { frontImage: github, backImage: 'js.png', key: 6 },
  { frontImage: ws, backImage: 'js.png', key: 7 },
  { frontImage: docker, backImage: 'js.png', key: 8 },
];

(function () {
  const containerElem = document.querySelector( '.container' );
  const dimElem = document.querySelector( '.dim' );
  const startWrap = document.querySelector( '.start_wrap' );
  const startElem = document.querySelector( '.start' );
  const timeElem = document.querySelector( '#time-remaining' );
  const REMAIN_TIME = 60;
  let remainTime = REMAIN_TIME;
  let clickElement = [];
  let matchingCount = 0;
  let interval = null;
  let isRestart = false;

  initCard();

  containerElem.addEventListener( 'click', onClickCard );
  containerElem.addEventListener( 'transitionend', checkMatching );
  startElem.addEventListener( 'click', startGame );

  function startGame(e) {
    if ( !isRestart && e.target.classList.contains( 'start_wrap' ) ){
      startInterval();
    } else {
      reset();
      startInterval();
    }

    hide( dimElem );
    hide( startWrap );

  }

  function show(elem) {
    elem.style.display = 'block';
  }

  function hide(elem) {
    elem.style.display = 'none';
  }

  function setText(elem, text) {
    elem.innerHTML = text;
  }

  function startInterval() {
    interval = setInterval( () => {
      remainTime -= 1;
      setText( timeElem, remainTime );

      if ( remainTime === 0 ){
        clearInterval( interval );
        show( dimElem );
        show( startWrap );
        setText( startElem, "Game Over<br/>Restart" );
        isRestart = true;
        updateScore( REMAIN_TIME - remainTime );
      }
    }, 1000 );
  }

  function updateScore(score) {
    const scoreElem = document.querySelector( '.score' );
    const frag = document.createDocumentFragment();
    const scores = getStorage( 'scores' );
    scores.push( score );
    scores.sort();

    Array.from( scoreElem.childNodes ).forEach( (child) => {
      scoreElem.removeChild( child );
    } );

    scores.forEach( (item, index) => {
      const liElem = document.createElement( 'li' );
      if ( index > 2 ){
        return;
      }
      setText( liElem, `${ index + 1 }위 ${ item }초` );
      frag.appendChild( liElem );
    } );

    scoreElem.appendChild( frag );
    setStorage( 'scores', scores );

  }

  function onClickCard(e) {
    if ( clickElement.length < 2 && e.target.classList.contains( 'card-side-back' ) ){
      e.target.parentNode.classList.add( 'flip' );
      clickElement.push( e.target );
    }
  }

  function checkMatching(e) {
    if ( clickElement.length !== 2 ){
      return;
    }

    if ( clickElement[ 0 ].dataset.key === clickElement[ 1 ].dataset.key ){
      matchingCount++;
    } else {
      clickElement.forEach( (i) => {
        i.parentNode.classList.remove( 'flip' );
      } );
    }

    checkWin( matchingCount );
    clickElement = [];
  }

  function checkWin(count) {
    if ( count === 8 ){
      clearInterval( interval );
      show( dimElem );
      show( startWrap );
      setText( startElem, "Complete! <br/> Restart" );
      isRestart = true;
      updateScore( REMAIN_TIME - remainTime );
    }
  }

  function initCard() {
    const dataSource = shuffle( datas );
    // const container = document.querySelector( '.container' );
    const cards = document.createDocumentFragment();

    dataSource && dataSource.forEach( (item) => {
      const { frontImage, backImage, key } = item;
      cards.append( createCard( { frontImage, backImage, key } ) );
    } );

    containerElem.appendChild( cards );

    if ( !getStorage( 'scores' ) ){
      setStorage( 'scores', [] )
    }
  }

  function setStorage(key, obj) {
    const myStorage = window.localStorage;
    return myStorage.setItem( key, JSON.stringify( obj ) );
  }

  function getStorage(key) {
    const myStorage = window.localStorage;
    return JSON.parse( myStorage.getItem( key ) );
  }

  function createCard({ frontImage, backImage, key }) {
    const cardDiv = document.createElement( 'div' );
    const frontDiv = document.createElement( 'div' );
    const backDiv = document.createElement( 'div' );

    cardDiv.classList.add( 'card' );
    frontDiv.classList.add( 'card-side', 'card-side-front' );
    backDiv.classList.add( 'card-side', 'card-side-back' );

    frontDiv.style.backgroundImage = `url("${ frontImage }")`;
    frontDiv.style.backgroundRepeat = 'no-repeat';
    backDiv.dataset.key = key;

    cardDiv.appendChild( frontDiv );
    cardDiv.appendChild( backDiv );

    return cardDiv;
  }

  function reset() {


    //남은시간초기화
    setText( timeElem, REMAIN_TIME );
    matchingCount = 0;
    remainTime = REMAIN_TIME;

    //카드 초기화
    Array.from( containerElem.childNodes ).forEach( (child) => {
      if ( child.classList && child.classList.contains( 'card' ) ){
        containerElem.removeChild( child );
      }
    } );
    //initCard
    initCard();
  }

  function shuffle(datas) {
    const double = [...datas, ...datas.reverse()];
    const { length } = double;

    for ( let i = 0; i < length; i++ ) {
      const random = Math.floor( Math.random() * length );
      [double[ i ], double[ random ]] = [double[ random ], double[ i ]];
    }

    return double;
  }

})();

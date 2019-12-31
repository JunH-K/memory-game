import '../css/reset.css'
import '../css/style.css'

const datas = [
  { frontImage: 'angular.png', backImage: 'js.png', key: 1 },
  { frontImage: 'node.svg', backImage: 'js.png', key: 2 },
  { frontImage: 'react.png', backImage: 'js.png', key: 3 },
  { frontImage: 'vue.png', backImage: 'js.png', key: 4 },
  { frontImage: 'html.png', backImage: 'js.png', key: 5 },
  { frontImage: 'github.png', backImage: 'js.png', key: 6 },
  { frontImage: 'ws.png', backImage: 'js.png', key: 7 },
  { frontImage: 'docker.png', backImage: 'js.png', key: 8 },
];

(function () {
  const containerElem = document.querySelector( '.container' );
  let clickElement = [];
  let matchingCount = 0;

  initCard();

  containerElem.addEventListener( 'click', onClickCard );
  containerElem.addEventListener( 'transitionend', checkMatching );


  function onClickCard(e) {
    if ( clickElement.length < 2 && e.target.classList.contains( 'card-side-back' ) ){
      e.target.parentNode.classList.add( 'flip' );
      clickElement.push( e.target );
    }
  }

  function checkMatching() {
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

    clickElement = [];
  }

  function initCard() {
    const dataSource = shuffle( datas );
    const container = document.querySelector( '.container' );
    const cards = document.createDocumentFragment();

    dataSource && dataSource.forEach( (item) => {
      const { frontImage, backImage, key } = item;
      cards.append( createCard( { frontImage, backImage, key } ) );
    } );

    container.appendChild( cards );

  }

  function createCard({ frontImage, backImage, key }) {
    const cardDiv = document.createElement( 'div' );
    const frontDiv = document.createElement( 'div' );
    const backDiv = document.createElement( 'div' );

    cardDiv.classList.add( 'card' );
    frontDiv.classList.add( 'card-side', 'card-side-front' );
    backDiv.classList.add( 'card-side', 'card-side-back' );

    frontDiv.style.backgroundImage = `url("/img/${ frontImage }")`;
    frontDiv.style.backgroundRepeat = 'no-repeat';
    backDiv.dataset.key = key;

    cardDiv.appendChild( frontDiv );
    cardDiv.appendChild( backDiv );

    return cardDiv;
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

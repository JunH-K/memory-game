/**
 *  호출 지연 함수
 * @param func
 * @param delay
 * @returns {function(...[*]=)}
 */
const  debounce=(func, delay) =>{
  let timer = null;
  return function () {
    if ( timer ){
      clearTimeout( timer );
    }
    timer = setTimeout( func, delay );
  }
};

export {
  debounce
}

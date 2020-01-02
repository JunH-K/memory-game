export default class Dom {

  static find(...params) {
    const [ element, selector = element ] = params;

    if( element instanceof HTMLElement ) {
      return element.querySelector( selector );
    }

    return document.querySelector( selector );
  }

  static findAll(...params) {
    const [ element, selector = element ] = params;
    
    if( element instanceof HTMLElement ) {
      return element.querySelectorAll( selector );
    }
    return document.querySelectorAll( selector );
  }

  static on(element, event, handler) {
    element.addEventListener( event, handler );
  }

  static off(element, event, handler) {
    element.removeEvent( event, handler );
  }

  static show(elem) {
    elem.style.display = 'block';
  }

  static showFlex(elem) {
    elem.style.display = 'flex';
  }

  static hide(elem) {
    elem.style.display = 'none';
  }

  static setText(elem, text) {
    elem.innerHTML = text;
  }
}
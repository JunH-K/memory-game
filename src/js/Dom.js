export default class Dom{
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
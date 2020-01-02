import '../css/reset.css';
import '../css/style.css';
import Main from './Main'
import Store from "./Store";

const store = new Store('scores');
const main = new Main(store);
main.init();


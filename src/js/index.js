import '../css/reset.css';
import '../css/style.css';
import Main from './Main'
import Store from "./Store";
import Score from "./Score";

const store = new Store( 'scores' );
const score = new Score( store );
const main = new Main( score );

main.init();


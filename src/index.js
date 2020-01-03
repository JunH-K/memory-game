import './css/reset.css';
import './css/style.css';
import Board from './js/Board'
import cardData from "./js/datas/CardData";

const board = new Board( cardData );
board.run();





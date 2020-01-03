import './css/reset.css';
import './css/style.css';
import Main from './js/Main'
import cardData from "./js/datas/CardData";

const App = () => {
  const main = new Main(cardData);
  main.run();
};

App();




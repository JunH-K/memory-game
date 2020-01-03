import './css/reset.css';
import './css/style.css';
import Main from './js/Main'
import datas from "./js/datas/Datas";

const App = () => {
  const main = new Main(datas);
  main.run();
};

App();




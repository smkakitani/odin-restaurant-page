// import css
import './styles/style.css';
import './styles/home.css';
// import js
import { homePage } from './pages/home';

import logoCat from './images/logo-cat.png';


console.log('HAI');

function createHeader() {
  const container = document.querySelector('#content');
  // const container = document.createElement('div');
  
  console.log(container);
  return container;
}

// createHeader();
// document.body.appendChild(createHeader());
homePage();
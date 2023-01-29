import './styles/style.css';
import './styles/base.css';
import './styles/home.css';

import logoCat from './images/logo-cat.png';


console.log('HAI');

function createHeader() {
  const header = document.getElementsByTagName('header');
  const headerLogo = document.createElement('img');
  headerLogo.src = logoCat;

  header.appendChild(headerLogo);
  
  // console.log(header);
  return header;
}

/* function addLogo() {
  logoCat
} */

// document.body.appendChild(createHeader());
createHeader();
// console.log(document.body);
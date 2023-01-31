import coffeeMocha from '../images/mocha-coffee.jpg';
import coffeeAffogato from '../images/affogato-coffee.jpg';
import coffeeCappuccino from '../images/cappuccino-coffee.jpg';
import coffeeFrappe from '../images/frappe-coffee.jpg';

// drinks
const drinkMocha = ["Espresso", "Chocolate", "Steamed milk"];
const drinkAffogato = ["Espresso", "Vanilla ice cream"];
const drinkCappuccino = ["Espresso", "Steamed milk foam"];
const drinkFrappe = ["Instant coffee", "Milk", "Ice"];


const menuPage = function() {
  const mainContainer = document.querySelector('#content');
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  mainContainer.appendChild(menuDiv);

  // append divs to .menu
  menuDiv.appendChild(menuMocha());
  menuDiv.appendChild(menuAffogato());
  menuDiv.appendChild(menuCappuccino());
  menuDiv.appendChild(menuFrappe());

  // console.log(drinkMocha);
  return mainContainer;
};

// mocha
const menuMocha = function() {
  const mochaDiv =  document.createElement('div');
  mochaDiv.classList.add('mocha');

  // img
  const mochaImg = document.createElement('img');
  mochaImg.src = coffeeMocha;  
  mochaDiv.appendChild(mochaImg);

  // description
  const mochaTitle = document.createElement('p');
  mochaTitle.textContent = "Mocha";  
  mochaDiv.appendChild(mochaTitle);

  const mochaList = document.createElement('ul');
  drinkMocha.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    mochaList.appendChild(li);
  });
  mochaDiv.appendChild(mochaList);

  return mochaDiv;
};
// affogato
const menuAffogato = function() {
  const affogatoDiv = document.createElement('div');
  affogatoDiv.classList.add('affogato');

  // img
  const affogatoImg = document.createElement('img');
  affogatoImg.src = coffeeAffogato;
  affogatoDiv.appendChild(affogatoImg);

  // description
  const affogatoTitle = document.createElement('p');
  affogatoTitle.textContent = "Affogato";  
  affogatoDiv.appendChild(affogatoTitle);

  const affogatoList = document.createElement('ul');
  drinkAffogato.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    affogatoList.appendChild(li);
  });
  affogatoDiv.appendChild(affogatoList);

  return affogatoDiv;
};
// cappuccino
const menuCappuccino = function() {
  const cappuccinoDiv =  document.createElement('div');
  cappuccinoDiv.classList.add('cappuccino');

  // img
  const cappuccinoImg = document.createElement('img');
  cappuccinoImg.src = coffeeCappuccino;  
  cappuccinoDiv.appendChild(cappuccinoImg);

  // description
  const cappuccinoTitle = document.createElement('p');
  cappuccinoTitle.textContent = "Cappuccino";  
  cappuccinoDiv.appendChild(cappuccinoTitle);

  const cappuccinoList = document.createElement('ul');
  drinkCappuccino.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    cappuccinoList.appendChild(li);
  });
  cappuccinoDiv.appendChild(cappuccinoList);

  return cappuccinoDiv;
};
// frappe
const menuFrappe = function() {
  const frappeDiv =  document.createElement('div');
  frappeDiv.classList.add('frappe');

  // img
  const frappeImg = document.createElement('img');
  frappeImg.src = coffeeFrappe;  
  frappeDiv.appendChild(frappeImg);

  // description
  const frappeTitle = document.createElement('p');
  frappeTitle.textContent = "Frappe";  
  frappeDiv.appendChild(frappeTitle);

  const frappeList = document.createElement('ul');
  drinkFrappe.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    frappeList.appendChild(li);
  });
  frappeDiv.appendChild(frappeList);

  return frappeDiv;
};

export { menuPage };
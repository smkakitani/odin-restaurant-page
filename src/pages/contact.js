import catTheBoss from '../images/cat-the-boss.jpg';
import catManager from '../images/cat-manager.jpg';
import catSoldier from '../images/cat-soldier.jpg';

// contacts factory function
const ContactFactory = (cssClass, image, title, email) => {
  const catDiv = document.createElement('div');
  catDiv.classList.add(`${cssClass}`);

  //img
  const contactImg = document.createElement('img');
  contactImg.src = image;
  catDiv.appendChild(contactImg);

  // description
  const contactPara = document.createElement('div');
  contactPara.classList.add('description');
  catDiv.appendChild(contactPara);

  const contactTitle = document.createElement('p');
  contactTitle.textContent = `${title}`;
  contactPara.appendChild(contactTitle);

  const contactText = document.createElement('p');
  contactText.textContent = `${email}`;
  contactPara.appendChild(contactText);

  return catDiv;
};

const contactPage = function() {
  const mainContainer = document.querySelector('#content');
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');
  mainContainer.appendChild(contactDiv);

  // append contacts to .contact
  const managerContact = ContactFactory('manager', catManager, 'Manager', 'iammanager@somethingemail.com');
  const soldierContact = ContactFactory('soldier', catSoldier, 'Soldiers', 'meowmeow@somethingemail.com');

  contactDiv.appendChild(contactTheBoss());
  contactDiv.appendChild(managerContact);
  contactDiv.appendChild(soldierContact);

  return mainContainer;
};

const contactTheBoss = function() {
  const theBossDiv = document.createElement('div');
  theBossDiv.classList.add('the-boss');

  // img
  const theBossImg = document.createElement('img');
  theBossImg.src = catTheBoss;
  theBossImg.alt = "Black cat named The Boss, current proprietary"
  theBossDiv.appendChild(theBossImg);

  // description
  const theBossPara = document.createElement('div');
  theBossPara.classList.add('description');
  theBossDiv.appendChild(theBossPara);

  const theBossTitle = document.createElement('p');
  theBossTitle.textContent = "The Boss";
  theBossPara.appendChild(theBossTitle);

  const theBossText = document.createElement('p');
  theBossText.textContent = "iamboss@somethingemail.com";
  theBossPara.appendChild(theBossText);

  return theBossDiv;
};

export { contactPage };
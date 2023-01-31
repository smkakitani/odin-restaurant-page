import catTheBoss from '../images/cat-the-boss.jpg';


const contactPage = function() {
  const mainContainer = document.querySelector('#content');
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');
  mainContainer.appendChild(contactDiv);

  // append contacts to .contact
  contactDiv.appendChild(contactTheBoss());


  console.log('contaaacts');
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

  // text

  return theBossDiv;
};

export { contactPage };
import catTheBoss from '../images/cat-and-coffee.jpg';

const homePage = function() {
  const mainContainer = document.querySelector('#content');
  const homeDiv = document.createElement('div');
  mainContainer.appendChild(homeDiv);
  // append title
  const para = document.createElement('p');
  homeDiv.classList.add('home');
  para.textContent = "Cats. Coffee. CATS!";
  homeDiv.appendChild(para);

  // append image
  const theBossImg = document.createElement('img');
  theBossImg.src = catTheBoss;
  homeDiv.appendChild(theBossImg);

  // append text
  

  // console.log(mainContainer);
  return mainContainer;
};



export { homePage };
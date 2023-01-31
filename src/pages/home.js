import catTheBoss from '../images/cat-and-coffee.jpg';

const homePage = function() {
  const mainContainer = document.querySelector('#content');
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');
  mainContainer.appendChild(homeDiv);

  // append title
  const para = document.createElement('p');
  
  para.textContent = "Cats. Coffee. CATS!";
  homeDiv.appendChild(para);

  // append image
  const theBossImg = document.createElement('img');
  theBossImg.src = catTheBoss;
  theBossImg.alt = "Black cat called The Boss";
  homeDiv.appendChild(theBossImg);

  // append text
  const text = document.createElement('p');
  text.textContent = "The Boss, she owns it!";
  homeDiv.appendChild(text);  

  // console.log(mainContainer);
  return mainContainer;
};

export { homePage };
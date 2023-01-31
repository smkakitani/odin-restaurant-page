import catTheBoss from '../images/cat-and-coffee.jpg';


/* const currentTab = function() {
  const selectTab = document.querySelectorAll('#links li');

  selectTab.forEach((element) => {
    // console.log(element.className)
    if (element.className === "tab-menu" || element.className === "tab-contact") {
      element.removeAttribute('.current-tab');
    } else if (element.className === "tab-home") {
      element.classList.add('current-tab');
    }    
  });
  // console.log(selectTab);
}; */

const homePage = function() {
  const mainContainer = document.querySelector('#content');
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');
  mainContainer.appendChild(homeDiv);

  // identifying current page
  /* const setTabs = function() {
    const parentNode = document.getElementById('content');
    const pagesList = document.querySelectorAll('#links li');

    if (parentNode.firstElementChild.className === "home") {
      pagesList.forEach((element) => {
        // console.log(element.classList)
        if (element.className === "tab-menu" || element.className === "tab-contact") {
          element.classList.remove('current-tab');
        } else if (element.className === "tab-home") {
          element.classList.add('current-tab');
        }
      });
    }
  };
  setTabs(); */

  // append title
  const para = document.createElement('p');
  
  para.textContent = "Cats. Coffee. CATS!";
  homeDiv.appendChild(para);

  // append image
  const theBossImg = document.createElement('img');
  theBossImg.src = catTheBoss;
  homeDiv.appendChild(theBossImg);

  // append text
  const text = document.createElement('p');
  text.textContent = "The Boss, she owns it!";
  homeDiv.appendChild(text);  

  // console.log(mainContainer);
  return mainContainer;
};

export { homePage };
const menuPage = function() {
  const mainContainer = document.querySelector('#content');
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  mainContainer.appendChild(menuDiv);

  // console.log(mainContainer);
  return mainContainer;
};

export { menuPage };
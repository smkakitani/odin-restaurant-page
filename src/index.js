// import css
import './styles/style.css';
import './styles/home.css';
import './styles/menu.css';

// import js
import { homePage } from './pages/home';
import { menuPage } from './pages/menu';
// import { contactPage } from './pages/contact';

console.log('HAI index.js');

/* function setPageTab(element) {
  if (element.className ===) {
    element.classList.remove('current-tab');
  } else if (element.className === "tab-home") {
    element.classList.add('current-tab');
  }
} */
const setDefaultPage = function() {
  const parentNode = document.getElementById('content');

  if (parentNode.firstElementChild === null) {
    homePage();
    // console.log('its nulllllll');
  } else {
    return;
  }
};

const switchTab = function() {
  const selectTabs = document.getElementById('links');
  selectTabs.addEventListener('click', (event) => {
    const eventTab = event.target.className;
    const parentNode = document.getElementById('content');
    const tabPage = document.querySelectorAll('#links li');

    if (eventTab === "tab-home") {
      // clear #content
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      };
      // give .current-tab and remove from others
      tabPage.forEach((element) => {
        if (element.className == eventTab) {
          element.classList.add('current-tab');          
        } else {
          element.classList.remove('current-tab');
        }     
      });

      homePage();
    } else if (eventTab === "tab-menu") {
      // clear #content
      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
      };
      tabPage.forEach((element) => {
        if (element.className == eventTab) {
          element.classList.add('current-tab');          
        } else {
          element.classList.remove('current-tab');
        }     
      });

      menuPage();
    }

    // console.log(tabPage);
  });
};
// document.body.appendChild(createHeader());
switchTab();
setDefaultPage();
// menuPage();

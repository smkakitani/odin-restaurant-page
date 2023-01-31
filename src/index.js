// import css
import './styles/style.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

// import js
import { homePage } from './pages/home';
import { menuPage } from './pages/menu';
import { contactPage } from './pages/contact';

const setDefaultPage = function() {
  const parentNode = document.getElementById('content');

  if (parentNode.firstElementChild === null) {
    homePage();
    console.log('homepage');
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
      // give .current-tab and remove from others
      tabPage.forEach((element) => {
        if (element.className == eventTab) {
          element.classList.add('current-tab');          
        } else {
          element.classList.remove('current-tab');
        }     
      });

      menuPage();
    } else if (eventTab === "tab-contact") {
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

      contactPage();
    }
  });
};
switchTab();
setDefaultPage();
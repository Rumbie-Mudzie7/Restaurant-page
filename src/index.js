import Header from './components/header';
import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';

const body = document.querySelector('body');
const navbar = Header();
const mainDiv = document.getElementById('content');
body.appendChild(navbar.createNav());


const showMenuView = () => {
  const views = document.querySelectorAll('.home-button');
  for (let i = 0; i < views.length; i += 1) {
    views[i].addEventListener('click', () => {
      const viewMenuBtn = document.getElementById('menu-tab');
      viewMenuBtn.click();
    });
  }
};

const tabs = document.getElementsByClassName('tab');
for (let i = 0; i < tabs.length; i += 1) {
  tabs[i].addEventListener('click', (e) => {
    const myTabs = document.getElementsByClassName('tab');
    for (let j = 0; j < myTabs.length; j += 1) {
      myTabs[j].classList.remove('active');
    }
    e.target.classList.add('active');

    mainDiv.innerHTML = '';

    switch (e.target.textContent) {
      case 'Home':
        mainDiv.appendChild(Home.homePage());
        showMenuView();
        break;
      case 'Menu':
        mainDiv.appendChild(Menu.menuCategories());
        showMenuView();
        break;
      case 'Contact':
        mainDiv.appendChild(Contact.contactDetails());
        showMenuView();
        break;
      default:
    }
  });
}

tabs[0].click();

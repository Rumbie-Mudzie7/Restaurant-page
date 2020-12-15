import Header from './components/header'
import Home from './components/home'
import Menu from './components/menu'
import Contact from './components/contact'

let body = document.querySelector('body');
let navbar = Header();
let mainDiv = document.getElementById('content');
body.appendChild(navbar.createNav());

let tabs = document.getElementsByClassName('tab');
for (let i = 0; i < tabs.length; i += 1) {
  tabs[i].addEventListener('click', function(e) {
    let myTabs = document.getElementsByClassName('tab');
    for (let j = 0; j < myTabs.length; j += 1) {
      myTabs[j].classList.remove('active');
    }
    e.target.classList.add('active');

    mainDiv.innerHTML = "";

    switch(e.target.textContent) {
      case 'Home':
        mainDiv.appendChild(Home.homePage());
        break;
      case 'Menu':
        mainDiv.appendChild(Menu.menuCategories());
        break;
      case 'Contact':
        mainDiv.appendChild(Contact.contactDetails());
        break;
      default:
    }
  });
}

tabs[0].click();
















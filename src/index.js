import Header from './components/header'
// import Home from './components/home'
// Home.homePage();
let navbar = Header();
let mainDiv = document.getElementById('content');

mainDiv.appendChild(navbar.createNav());

const Header = (() => {
  
  const createNav = () => {
    const nav = document.createElement('nav');
    const unOrdered = document.createElement('ul');
    const homeList = document.createElement('li');
    const menuList = document.createElement('li');
    const contactList = document.createElement('li');
    
    homeList.setAttribute('id', 'home');
    menuList.setAttribute('id', 'menu');
    contactList.setAttribute('id', 'contact');

    homeList.textContent = 'Home';
    menuList.textContent = 'Menu';
    contactList.textContent = 'Contact';

    nav.classList = 'navbar';

    unOrdered.appendChild(homeList);
    unOrdered.appendChild(menuList);
    unOrdered.appendChild(contactList);
    nav.appendChild(unOrdered);
    return nav;
    
  }
    return { createNav };
});

export default Header

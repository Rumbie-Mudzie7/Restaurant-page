const Header = (() => {
  const createNav = () => {
    const nav = document.createElement('nav');
    const unOrdered = document.createElement('ul');
    const homeList = document.createElement('li');
    const menuList = document.createElement('li');
    const contactList = document.createElement('li');

    homeList.setAttribute('class', 'tab');
    menuList.setAttribute('class', 'tab');
    contactList.setAttribute('class', 'tab');

    homeList.textContent = 'Home';
    menuList.textContent = 'Menu';
    contactList.textContent = 'Contact';

    nav.classList = 'navbar';

    unOrdered.appendChild(homeList);
    unOrdered.appendChild(menuList);
    unOrdered.appendChild(contactList);
    nav.appendChild(unOrdered);
    return nav;
  };
  return { createNav };
});

export default Header;

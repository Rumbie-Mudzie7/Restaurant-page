const Contact = (() => {
  const contactDetails = () => {
    const contactContent = document.createElement('div');

    // creating DOM elements
    const contactBanner = document.createElement('section');
    const contactHeading = document.createElement('h1');
    const contactDesc = document.createElement('p');
    const contactBtn = document.createElement('button');

    contactContent.classList = 'contact-wrapper';
    contactBanner.classList = 'contact-section';
    contactHeading.classList = 'home-description';
    contactDesc.classList = 'menu-description';
    contactBtn.classList = 'home-button';

    contactHeading.textContent = "Rumbie's Contact Details";
    contactDesc.textContent = 'rumbiemudzie@yahoo.co.za';
    contactBtn.textContent = 'View Menu';

    contactContent.appendChild(contactBanner);
    contactContent.appendChild(contactHeading);
    contactContent.appendChild(contactDesc);
    contactContent.appendChild(contactBtn);
    return contactContent;
  };
  return { contactDetails };
})();

export default Contact;
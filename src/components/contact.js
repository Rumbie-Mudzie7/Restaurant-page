const Contact = (() => {

  const contactDetails = () => {
    const contactContent = document.createElement('div');

      // creating DOM elements
      const contactBanner = document.createElement('section');
      const contactHeading = document.createElement('h1');
      const contactDesc = document.createElement('p');
      const contactBtn = document.createElement('button');

      contactContent.classList = "contact-wrapper";
      contactBanner.classList = "contact-section";
      contactHeading.classList = "contact-header";
      contactDesc.classList = "contact-description";
      contactBtn.classList = "contact-button";

      contactHeading.textContent = "Rumbie's Exclusive Diner";
      contactDesc.textContent = "Welcome to an exclusive restaurant by the seashore";
      contactBtn.textContent = "View Menu";


      contactContent.appendChild(contactHeading);
      return contactContent;
  }
  return { contactDetails };
})();

export default Contact
const Contact = (() => {

  const contactDetails = () => {
    const content = document.getElementById('content');

      // creating DOM elements
      const contactBanner = document.createElement('section');
      const contactHeading = document.createElement('h1');
      const contactDesc = document.createElement('p');
      const contactBtn = document.createElement('button');

      contactWrapper.classList = "contact-wrapper";
      contactBanner.classList = "contact-section";
      contactHeading.classList = "contact-header";
      contactDesc.classList = "contact-description";
      contactBtn.classList = "contact-button";

      contactHeading.textContent = "Rumbie's Exclusive Diner";
      contactDesc.textContent = "Welcome to an exclusive restaurant by the seashore";
      contactBtn.textContent = "View Menu";
  }
  return { contactDetails };
})();

export default Contact
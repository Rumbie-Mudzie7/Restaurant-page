const Home = (() => {
  
  const homePage = () => {
  const content = document.getElementById('content');

  // creating DOM elements
    const section = document.createElement('section');
    const heading = document.createElement('h1');
    const description = document.createElement('p');
    const menuBtn = document.createElement('button');

  // assigning text to element variables
    heading.textContent = "Rumbie's Exclusive Diner";
    description.textContent = "Welcome to an exclusive restaurant by the seashore";
    menuBtn.textContent = "View Menu";

  // classList attributes for styling
    section.classList = "homeSection";
    heading.classList = "homeHeader";
    description.classList = "homeDescription";
    menuBtn.classList = "homeButton";

  // appending elements to parent div
    section.appendChild(heading);
    section.appendChild(description);
    section.appendChild(menuBtn);

}
return { homePage };
})();

export default Home


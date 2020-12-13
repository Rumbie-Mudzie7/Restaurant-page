const Home = (() => {
  
  const homePage = () => {
  const content = document.getElementById('content');

  // creating DOM elements
    const banner = document.createElement('section');
    const heading = document.createElement('h1');
    const description = document.createElement('p');
    const menuBtn = document.createElement('button');

    const menuWrapper = document.createElement('div');
    const breakfast = document.createElement('div');
    const menuHeading1 = document.createElement('h1');
    const breakfastImg = document.createElement('div');
    const menuDescription1 = document.createElement('p')
    const menuBtn1 = document.createElement('button');

    const lunch = document.createElement('div');
    const menuHeading2 = document.createElement('h1');
    const lunchImg = document.createElement('div');
    const menuDescription2 = document.createElement('p')
    const menuBtn2 = document.createElement('button');

  // assigning text to element variables
    heading.textContent = "Rumbie's Exclusive Diner";
    description.textContent = "Welcome to an exclusive restaurant by the seashore";
    menuBtn.textContent = "View Menu";

    menuHeading1.textContent = "Rumbie's Breakfast";
    menuDescription1.textContent = "We have a variety of cuisine breakfasts"
    menuBtn1.textContent = "View Menu";

    menuHeading2.textContent = "Rumbie's Lunch";
    menuDescription2.textContent = "We have a variety of cuisine lunches"
    menuBtn2.textContent = "View Menu";
    
  // classList attributes for styling
    menuWrapper.classList = "menu-wrapper";
    banner.classList = "home-section";
    heading.classList = "home-header";
    description.classList = "home-description";
    menuBtn.classList = "home-button";

    breakfast.classList = "left-btm-section";
    menuHeading1.classList = "menu-heading1";
    breakfastImg.classList = "breakfast-img1";
    menuDescription1.classList = "menu-description1";
    menuBtn1.classList = "home-button1";

    lunch.classList = "right-btm-section";
    menuHeading2.classList = "menu-heading2";
    lunchImg.classList = "lunch-img2";
    menuDescription2.classList = "menu-description2";
    menuBtn2.classList = "home-button2";

  // appending elements to parent div
    breakfast.appendChild(menuHeading1);
    breakfast.appendChild(breakfastImg);
    breakfast.appendChild(menuDescription1);
    breakfast.appendChild(menuBtn1);
    lunch.appendChild(menuHeading2);
    lunch.appendChild(lunchImg);
    lunch.appendChild(menuDescription2)
    lunch.appendChild(menuBtn2);
    menuWrapper.appendChild(breakfast);
    menuWrapper.appendChild(lunch);
    banner.appendChild(heading);
    banner.appendChild(description);
    banner.appendChild(menuBtn);
    content.appendChild(banner);
    content.appendChild(menuWrapper);
  }
return { homePage };
})();

export default Home


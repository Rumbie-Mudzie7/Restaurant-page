const Menu = (() => {

  const menuCategories = () => {
    const menuContent = document.createElement('div');

    // creating DOM elements
    const breakfast = document.createElement('div');
    const menuHeading1 = document.createElement('h1');
    const breakfastImg = document.createElement('div');
    const menuDescription1 = document.createElement('p')
    const breakfastBtn= document.createElement('button');

    const lunch = document.createElement('div');
    const menuHeading2 = document.createElement('h1');
    const lunchImg = document.createElement('div');
    const menuDescription2 = document.createElement('p')
    const lunchBtn= document.createElement('button');

    const dinner = document.createElement('div');
    const menuHeading3 = document.createElement('h1');
    const dinnerImg = document.createElement('div');
    const menuDescription3 = document.createElement('p')
    const dinnerBtn= document.createElement('button');

    const desert = document.createElement('div');
    const menuHeading4 = document.createElement('h1');
    const desertImg = document.createElement('div');
    const menuDescription4 = document.createElement('p')
    const desertBtn= document.createElement('button');

     // assigning text to element variables
    menuHeading1.textContent = "Breakfast Deluxe";
    menuDescription1.textContent = "Enjoy our Premium Breakfasts";
    breakfastBtn.textContent = "View Menu";

    menuHeading2.textContent = "Lunch Deluxe";
    menuDescription2.textContent = "Enjoy our Premium Lunch";
    lunchBtn.textContent = "View Menu";

    menuHeading3.textContent = "Dinner Deluxe";
    menuDescription3.textContent = "Enjoy our Premium Dinner";
    dinnerBtn.textContent = "View Menu";

    menuHeading4.textContent = "Desert Deluxe";
    menuDescription4.textContent = "Enjoy our Premium Breakfasts";
    desertBtn.textContent = "View Menu";
     

     // classList attributes for styling
     breakfast.classList = "menu-section1";
     menuHeading1.classList = "menu-header1";
     breakfastImg.classList = "break-img";
     menuDescription1.classList = "menu-desc1";
     breakfastBtn.classList = "break-button";

     lunch.classList = "menu-section2";
     menuHeading2.classList = "menu-header2";
     lunchImg.classList = "lunch-img";
     menuDescription2.classList = "menu-desc2";
     lunchBtn.classList = "lunch-button";

     dinner.classList = "menu-section3";
     menuHeading3.classList = "menu-header3";
     dinnerImg.classList = "break-img";
     menuDescription3.classList = "menu-desc3";
     dinnerBtn.classList = "dinner-button";

     desert.classList = "menu-section";
     menuHeading4.classList = "menu-header4";
     desertImg.classList = "desert-img";
     menuDescription4.classList = "menu-desc4";
     desertBtn.classList = "desert-button";


     // appending elements to parent div
    breakfast.appendChild(menuHeading1);
    breakfast.appendChild(breakfastImg);
    breakfast.appendChild(menuDescription1);
    breakfast.appendChild(breakfastBtn);
    lunch.appendChild(menuHeading2);
    lunch.appendChild(lunchImg);
    lunch.appendChild(menuDescription2)
    lunch.appendChild(lunchBtn);
    dinner.appendChild(menuHeading3);
    dinner.appendChild(dinnerImg);
    dinner.appendChild(menuDescription3);
    dinner.appendChild(dinnerBtn);
    desert.appendChild(menuHeading4);
    desert.appendChild(lunchImg);
    desert.appendChild(menuDescription4)
    desert.appendChild(desertBtn);
    menuContent.appendChild(breakfast);
    menuContent.appendChild(lunch);
    menuContent.appendChild(dinner);
    menuContent.appendChild(desert);
    return menuContent;
  }
  return { menuCategories };
})();

export default Menu



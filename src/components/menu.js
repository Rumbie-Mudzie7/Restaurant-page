const Menu = (() => {

  const menuCategories = () => {
    const content = document.getElementById('content');

    // creating DOM elements
    const breakfast = document.createElement('div');
    const menuHeading = document.createElement('h1');
    const breakfastImg = document.createElement('div');
    const menuDescription = document.createElement('p')
    const breakfastBtn= document.createElement('button');

    const lunch = document.createElement('div');
    const menuHeading = document.createElement('h1');
    const lunchImg = document.createElement('div');
    const menuDescription = document.createElement('p')
    const breakfastBtn= document.createElement('button');

    const dinner = document.createElement('div');
    const menuHeading = document.createElement('h1');
    const dinnerImg = document.createElement('div');
    const menuDescription = document.createElement('p')
    const breakfastBtn= document.createElement('button');

    const desert = document.createElement('div');
    const menuHeading = document.createElement('h1');
    const desertImg = document.createElement('div');
    const menuDescription = document.createElement('p')
    const breakfastBtn= document.createElement('button');

     // assigning text to element variables
     menuHeading.textContent = "";
     menuPara.textContent ="";

     // classList attributes for styling
     banner.classList = "menuSection";
     menuHeading.classList = "menuHeader";
     menuPara.classList = "menuPara";

     // appending elements to parent div

  }
  return { menuCategories };
})();

export default Menu
const dishes = [
  {
    name: 'Dish 1',
    description: 'Description 1',
    'image URL': '../src/restaurant_logo.png'
  },
  {
    name: 'Dish 1',
    description: 'Description 1',
    'image URL': '../src/restaurant_logo.png'
  },
  {
    name: 'Dish 1',
    description: 'Description 1',
    'image URL': '../src/restaurant_logo.png'
  }
]

function populateMenu(menuSection, dishesArray) {
  for (let i = 0; i < dishesArray.length; i += 1) {
    let card = document.createElement('div');
    card.classList.add('card');
    
    let cardImage = document.createElement('img');
    cardImage.classList.add('card-image');
    cardImage.src = dishesArray[i]['image URL'];
    
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = dishesArray[i].name;
    
    let cardBody = document.createElement('p');
    cardBody.classList.add('card-body');
    cardBody.innerText = dishesArray[i].description;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);

    menuSection.appendChild(card);
  }
}

export default function generateMenu() {
  var menuSection = document.createElement("section");
  menuSection.classList.add("landing-page-section", "container-fluid");
  menuSection.id = 'landing-page-section';

  populateMenu(menuSection, dishes);
  return menuSection;
}
function generateNavBar () {
  var navBar = document.createElement("nav");

  navBar.classList.add("nav-bar");

  const logoContainer = generateLogoContainer();
  let linksContainer = generateLinksContainer();
  let accountContainer = generateAccountContainer();

  navBar.appendChild(logoContainer);
  navBar.appendChild(linksContainer);
  navBar.appendChild(accountContainer);

  return navBar;
}

function generateLogoContainer () {
  var logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container", "nav-bar-section");

  let image = document.createElement('img');
  image.src = "../src/restaurant_logo.png";
  logoContainer.appendChild(image);

  return logoContainer;
}

function generateLinksContainer () {
  var logoContainer = document.createElement("div");
  logoContainer.classList.add("links-container", "nav-bar-section");

  let list = document.createElement('ul');
  let linkNames = ["Casa", "Contacto", "Menú"]
  
  for (let i = 0; i < 3; i += 1) {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.textContent = linkNames[i];
    link.href = '#';
    listItem.appendChild(link);
    list.appendChild(listItem);
  }

  logoContainer.appendChild(list);

  return logoContainer;
}

function generateAccountContainer () {
  var logoContainer = document.createElement("div");
  logoContainer.classList.add("account-container", "nav-bar-section");

  let button = document.createElement("button");
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Haz tu reservación';

  logoContainer.appendChild(button);

  return logoContainer;
}

export { generateNavBar };
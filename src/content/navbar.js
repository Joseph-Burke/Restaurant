import generateHome from "./home";
import generateContact from "./contact";
import generateMenu from "./menu";

export default function generateNavBar() {
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

function generateLogoContainer() {
  var logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container", "nav-bar-section");

  let image = document.createElement("img");
  image.src = "../src/images/restaurant_logo.png";
  logoContainer.appendChild(image);

  return logoContainer;
}

function generateLinksContainer() {
  var logoContainer = document.createElement("div");
  logoContainer.classList.add("links-container", "nav-bar-section");

  let list = document.createElement("ul");
  let linkInfo = [
    { text: "Casa", 'on click': displayHomeView },
    { text: "Contacto", 'on click': displayContactView },
    { text: "Menú", 'on click': displayMenuView }
  ]

  for (let i = 0; i < linkInfo.length; i += 1) {
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = linkInfo[i].text;
    link.href = '#';
    link.addEventListener('click', function(event) {
      event.preventDefault();
      linkInfo[i]['on click']();
    })

    listItem.appendChild(link);
    list.appendChild(listItem);
  }

  logoContainer.appendChild(list);

  return logoContainer;
}

function generateAccountContainer() {
  var logoContainer = document.createElement("div");
  logoContainer.classList.add("account-container", "nav-bar-section");

  let button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Haz tu reservación";

  logoContainer.appendChild(button);

  return logoContainer;
}


function displayHomeView() {
  removeCurrentView();
  let home = generateHome();
  content.appendChild(home);
}

function displayContactView() {
  removeCurrentView();
  let contact = generateContact();
  content.appendChild(contact);
}

function displayMenuView() {
  removeCurrentView();
  let menu = generateMenu();
  content.appendChild(menu);
}

function removeCurrentView() {
  let currentSection = document.getElementById('landing-page-section')
  content.removeChild(currentSection);
}


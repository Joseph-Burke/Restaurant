import generateHome from './home';
import generateContact from './contact';
import generateMenu from './menu';

const generateLogoContainer = () => {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container', 'nav-bar-section');

  const image = document.createElement('img');
  image.src = '../src/images/restaurant_logo.png';
  logoContainer.appendChild(image);

  return logoContainer;
}

const generateAccountContainer = () => {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('account-container', 'nav-bar-section');

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Hacer una reservación';

  logoContainer.appendChild(button);

  return logoContainer;
}

const removeCurrentView = () => {
  const currentSection = document.getElementById('landing-page-section');
  content.removeChild(currentSection);
}

const displayHomeView = () => {
  removeCurrentView();
  const home = generateHome();
  content.appendChild(home);
}

const displayContactView = () => {
  removeCurrentView();
  const contact = generateContact();
  content.appendChild(contact);
}

const displayMenuView = () => {
  removeCurrentView();
  const menu = generateMenu();
  content.appendChild(menu);
}

const generateLinksContainer = () => {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('links-container', 'nav-bar-section');

  const list = document.createElement('ul');
  const linkInfo = [
    { text: 'Casa', 'on click': displayHomeView },
    { text: 'Contacto', 'on click': displayContactView },
    { text: 'Menú', 'on click': displayMenuView },
  ];

  for (let i = 0; i < linkInfo.length; i += 1) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = linkInfo[i].text;
    link.href = '#';
    link.addEventListener('click', (event) => {
      event.preventDefault();
      linkInfo[i]['on click']();
    });

    listItem.appendChild(link);
    list.appendChild(listItem);
  }

  logoContainer.appendChild(list);

  return logoContainer;
}

export default () => {
  const navBar = document.createElement('nav');

  navBar.classList.add('nav-bar');

  const logoContainer = generateLogoContainer();
  const linksContainer = generateLinksContainer();
  const accountContainer = generateAccountContainer();

  navBar.appendChild(logoContainer);
  navBar.appendChild(linksContainer);
  navBar.appendChild(accountContainer);

  return navBar;
}

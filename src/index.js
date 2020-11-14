import './index.scss';
import generateNavBar from './content/navbar';
import generateHome from './content/home';

const content = document.getElementById('content');

function insertInitialContent() {
  const navBar = generateNavBar();
  const landingPageSection = generateHome();

  content.appendChild(navBar);
  content.appendChild(landingPageSection);
}

insertInitialContent();
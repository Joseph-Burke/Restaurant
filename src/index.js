import './index.scss';
import generateNavBar from "./content/navbar";
import generateHome from './content/home';
import generateContact from './content/contact';
import generateMenu from './content/menu';

var content = document.getElementById('content');
var testDiv = document.createElement('div');

function insertInitialContent () {
  let navBar = generateNavBar();
  let landingPageSection = generateHome();

  content.appendChild(navBar);
  content.appendChild(landingPageSection);
};

insertInitialContent();
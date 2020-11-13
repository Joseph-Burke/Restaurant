import './index.scss';
import { 
  generateNavBar,
  generateLandingPageSection,
 } from "./content_generators.js";

var content = document.getElementById('content');
var testDiv = document.createElement('div');

function insertContent () {
  let navBar = generateNavBar();
  let landingPageSection = generateLandingPageSection();

  content.appendChild(navBar);
  content.appendChild(landingPageSection);
}

insertContent();
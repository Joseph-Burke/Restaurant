import './index.scss';
import { generateNavBar } from "./content_generators.js";

var content = document.getElementById('content');
var testDiv = document.createElement('div');

function insertContent () {
  let navBar = generateNavBar();
  content.appendChild(navBar);
}

insertContent();
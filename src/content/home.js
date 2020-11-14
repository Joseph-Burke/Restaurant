export default function generateHome() {
  var homeSection = document.createElement("section");
  homeSection.classList.add("landing-page-section", "home-tab", "container-fluid");
  homeSection.id = 'landing-page-section';
  
  const imageContainer = generateImageContainer();
  let textContainer = generateTextContainer();
  
  homeSection.appendChild(imageContainer);
  homeSection.appendChild(textContainer);
  
  return homeSection;
}

function generateImageContainer() {
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.src = "../src/plate.jpeg";
  imageContainer.appendChild(image);

  return imageContainer;
}

function generateTextContainer() {
  var textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  let title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = "Amigos";

  let subTitle = document.createElement("h4");
  subTitle.classList.add("sub-title");
  subTitle.innerText = "Comida y amigos; ¿Qué más podría querer alguién?";

  let button = document.createElement("button");
  button.classList.add('explore-button', 'btn', 'btn-primary');
  button.innerText = "Aprende más";

  textContainer.appendChild(title);
  textContainer.appendChild(subTitle);
  textContainer.appendChild(button);

  return textContainer;
}
const generateImageContainer = () => {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const image = document.createElement('img');
  image.src = '../src/images/plate.jpeg';
  imageContainer.appendChild(image);

  return imageContainer;
}

const generateTextContainer = () => {
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerText = 'Amigos';

  const subTitle = document.createElement('h4');
  subTitle.classList.add('sub-title');
  subTitle.innerText = 'Comida y amigos; ¿Qué más podría querer alguién?';

  const button = document.createElement('button');
  button.classList.add('explore-button', 'btn', 'btn-primary');
  button.innerText = 'Aprende más';

  textContainer.appendChild(title);
  textContainer.appendChild(subTitle);
  textContainer.appendChild(button);

  return textContainer;
}

export default () => {
  const homeSection = document.createElement('section');
  homeSection.classList.add('landing-page-section', 'home-tab', 'container-fluid');
  homeSection.id = 'landing-page-section';

  const imageContainer = generateImageContainer();
  const textContainer = generateTextContainer();

  homeSection.appendChild(imageContainer);
  homeSection.appendChild(textContainer);

  return homeSection;
}

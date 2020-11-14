export default function generateContact() {
  var contactSection = document.createElement("section");

  contactSection.classList.add("landing-page-section", "contact-tab", "container-fluid");
  contactSection.id = 'landing-page-section';

  contactSection.innerText = 'Hello, this is the contact section';

  return contactSection;
}
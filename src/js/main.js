"use strict";

//Bea - Preview
const namePreview = document.querySelector(".js-name-preview");
const jobPreview = document.querySelector(".js-job-preview");
const imagePreview = document.querySelector(".js-image-preview");
const phonePreview = document.querySelector(".js-phone-preview");
const mailPreview = document.querySelector(".js-mail-preview");
const linkedinPreview = document.querySelector(".js-linkedin-preview");
const githubPreview = document.querySelector(".js-github-preview");

//Form-fill
const nameInput = document.querySelector(".js-name");
const jobInput = document.querySelector(".js-job");
const imageInput = document.querySelector(".js-image");
const phoneInput = document.querySelector(".js-phone");
const mailInput = document.querySelector(".js-mail");
const linkedinInput = document.querySelector(".js-linkedin");
const githubInput = document.querySelector(".js-github");
const thumbnail = document.querySelector(".js-thumbnail");

//Desplegables
const headerDesign = document.querySelector(".js-design");
const headerFill = document.querySelector(".js-fill");
const headerShare = document.querySelector(".js-share");

//Arrows
const arrowDesign = document.querySelector(".js-arrow1"); // design
const arrowFill = document.querySelector(".js-arrow2"); // fill
const arrowShare = document.querySelector(".js-arrow3"); // share

//Containers
const containerDesign = document.querySelector(".js-design-container");
const containerFill = document.querySelector(".js-fill-container");
const containerShare = document.querySelector(".js-share-container");

const form = document.querySelector(".js-form");

const card = document.querySelector(".js-card");
const checkOne = document.querySelector(".js-checkOne");
const checkTwo = document.querySelector(".js-checkTwo");
const checkThree = document.querySelector(".js-checkThree");

const formReset = document.querySelector(".js-reset");
const mainForm = document.querySelector(".js-mainForm");

const createButton = document.querySelector('.js-create-button');
const cardLink = document.querySelector('.js-link');

let data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

function handleReset() {
  mainForm.reset();
  namePreview.innerHTML = "Nombre Apellido";
  jobPreview.innerHTML = "Front-end developer";
  mailPreview.href = "";
  phonePreview.href = "";
  linkedinPreview.href = "";
  githubPreview.href = "";
  imagePreview.style.backgroundImage =
    "url('https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg')";
  thumbnail.style.backgroundImage = "url('')";
  card.classList.remove("palette2", "palette3");
}

formReset.addEventListener("click", handleReset);

const checkForm = document.querySelector(".js-checkForm");

function colorPalettes() {
  if (checkOne.checked) {
    card.classList.remove("palette2", "palette3");
    data.palette = '1';
  } else if (checkTwo.checked) {
    card.classList.add("palette2");
    card.classList.remove("palette3");
    data.palette = '2';
  } else if (checkThree.checked) {
    card.classList.add("palette3");
    card.classList.remove("palette2");
    data.palette = '3';
  }
}

checkForm.addEventListener("click", colorPalettes);

const collapsableHeaders = document.querySelectorAll(".js-collapsable-header");

function handleCollapsable(event) {
  const clickHeader = event.currentTarget;

  // for (const collapsable of collapsableHeaders) {
  //   if (collapsable === clickHeader) {
  //     collapsable.classList.toggle("collapsable--close");
  //   } else {
  //     collapsable.classList.add("collapsable--close");
  //   }
  // }
}
for (let i = 0; i < 3; i++) {
  collapsableHeaders[i].addEventListener("click", handleCollapsable);
}

function handleInput(event) {
  const eventTarget = event.target.value;
  const idInput = event.target.id;
  data[idInput] = event.target.value;
  if (idInput === "name") {
    namePreview.innerHTML = eventTarget;
    data.name = eventTarget;
  } else if (idInput === "job") {
    jobPreview.innerHTML = eventTarget;
    data.job = eventTarget;
  } else if (idInput === "email") {
    mailPreview.href = "mailto:" + eventTarget;
    data.email = eventTarget;
  } else if (idInput === "phone") {
    phonePreview.href = "tel:" + eventTarget;
    data.phone = eventTarget;
  } else if (idInput === "linkedin") {
    linkedinPreview.href = eventTarget;
    data.linkedin = eventTarget;
  } else if (idInput === "github") {
    githubPreview.href = eventTarget;
    data.github = eventTarget;

  }
}
form.addEventListener("input", handleInput);
console.log(data);

const handleCreate = (event) => {
  event.preventDefault();
  data.photo = `${fr.result}`
  console.log(data)

  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'content-type': 'aplication/json'},
  })
  .then((response) => response.json())
  .then(data => {
    console.log(data)
  })
}

createButton.addEventListener('click', handleCreate)

import "./get-avatar.js";

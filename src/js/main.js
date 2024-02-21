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
const arrow1 = document.querySelector(".js-arrow1"); // design
const arrow2 = document.querySelector(".js-arrow2"); // fill
const arrow3 = document.querySelector(".js-arrow3"); // share

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
}

formReset.addEventListener("click", handleReset);

const checkForm = document.querySelector(".js-checkForm");

function colorPalettes() {
  if (checkOne.checked) {
    card.classList.remove("palette2", "palette3");
  } else if (checkTwo.checked) {
    card.classList.add("palette2");
    card.classList.remove("palette3");
  } else if (checkThree.checked) {
    card.classList.add("palette3");
    card.classList.remove("palette2");
  }
}

checkForm.addEventListener("click", colorPalettes);

function open(content) {
  content.classList.toggle("hidden");
  if (content.classList.contains("hidden")) {
    arrow1.classList.add("arrowDown");
  } else {
    arrow1.classList.remove("arrowDown");
  }
}

function close(content1, content2) {
  content1.classList.add("hidden");
  content2.classList.add("hidden");
  if (content1.classList.contains("hidden")) {
    arrow2.classList.add("arrowDown");
  } else {
    arrow2.classList.remove("arrowDown");
  }
  if (content2.classList.contains("hidden")) {
    arrow3.classList.add("arrowDown");
  } else {
    arrow3.classList.remove("arrowDown");
  }
}

const handleArrow1 = () => {
  open(containerDesign);
  close(containerFill, containerShare, containerDesign);
};

const handleArrow2 = () => {
  open(containerFill);
  close(containerDesign, containerShare);
};

const handleArrow3 = () => {
  open(containerShare);
  close(containerDesign, containerFill);
};

headerDesign.addEventListener("click", handleArrow1);
headerFill.addEventListener("click", handleArrow2);
headerShare.addEventListener("click", handleArrow3);

const object1 = {
  completeName: "",
  job: "",
  avatar: "",
  email: "",
  telephone: "",
  linkedin: "",
  github: "",
};

function handleInput(event) {
  const eventTarget = event.target.value;
  const idInput = event.target.id;
  object1[idInput] = event.target.value;
  if (idInput === "completeName") {
    namePreview.innerHTML = eventTarget;
  } else if (idInput === "job") {
    jobPreview.innerHTML = eventTarget;
  } else if (idInput === "email") {
    mailPreview.href = "mailto:" + eventTarget;
  } else if (idInput === "telephone") {
    phonePreview.href = "tel:" + eventTarget;
  } else if (idInput === "linkedin") {
    linkedinPreview.href = eventTarget;
  } else if (idInput === "github") {
    githubPreview.href = eventTarget;
  }
}
form.addEventListener("input", handleInput);

// function showContainer() {
//     containerFill.classList.remove('hidden');
// }
// function hideContainer() {
//     containerFill.classList.add('hidden');
// }

// headerFill.addEventListener('click', handleContainer);

function handleContainer(event) {
  event.preventDefault();
  if (containerFill.classList.contains("hidden")) {
    showContainer();
  } else {
    hideContainer();
  }
}

import "./get-avatar.js";

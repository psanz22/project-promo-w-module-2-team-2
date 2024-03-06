//Preview
const namePreview = document.querySelector(".js-name-preview");
const jobPreview = document.querySelector(".js-job-preview");
const imagePreview = document.querySelector(".js-image-preview");
const phonePreview = document.querySelector(".js-phone-preview");
const mailPreview = document.querySelector(".js-mail-preview");
const linkedinPreview = document.querySelector(".js-linkedin-preview");
const githubPreview = document.querySelector(".js-github-preview");

// Form
const form = document.querySelector(".js-form");
const card = document.querySelector(".js-card");
const checkOne = document.querySelector(".js-checkOne");
const checkTwo = document.querySelector(".js-checkTwo");
const checkThree = document.querySelector(".js-checkThree");
const thumbnail = document.querySelector(".js-thumbnail");

const formReset = document.querySelector(".js-reset");
const mainForm = document.querySelector(".js-mainForm");

//Share
const createButton = document.querySelector(".js-create-button");
const cardLink = document.querySelector(".js-link");
const twitterSection = document.querySelector(".js-twitter");
const twitterShareButton = document.querySelector(".js-twitter-share-button");

let localStorageData = JSON.parse(localStorage.getItem("localStorageData"));

let data = {
  palette: "1",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

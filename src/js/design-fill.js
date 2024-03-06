const checkForm = document.querySelector(".js-checkForm");

function colorPalettes() {
  if (checkOne.checked) {
    card.classList.remove("palette2", "palette3");
    data.palette = "1";
  } else if (checkTwo.checked) {
    card.classList.add("palette2");
    card.classList.remove("palette3");
    data.palette = "2";
  } else if (checkThree.checked) {
    card.classList.add("palette3");
    card.classList.remove("palette2");
    data.palette = "3";
  }
}

checkForm.addEventListener("click", colorPalettes);

const collapsableHeaders = document.querySelectorAll(".js-collapsable-header");
const collapsableParents = document.querySelectorAll(".js-form-box");

function handleCollapsable(event) {
  const clickHeader = event.currentTarget;
  const clickedParent = clickHeader.parentNode;

  for (const collapsableParent of collapsableParents) {
    if (collapsableParent === clickedParent) {
      collapsableParent.classList.toggle("collapsable--close");
    } else {
      collapsableParent.classList.add("collapsable--close");
    }
  }
}
for (const collapsableHeader of collapsableHeaders) {
  collapsableHeader.addEventListener("click", handleCollapsable);
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

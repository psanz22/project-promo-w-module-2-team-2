const handleCreate = (event) => {
  event.preventDefault();

  if (fr.result === null) {
    data.photo = localStorageData.photo;
  } else {
    data.photo = `${fr.result}`;
  }
  console.log("dataphoto ", data.photo);

  localStorage.setItem("localStorageData", JSON.stringify(data));
  console.log("localStorageData ", localStorageData);

  fetch("https://dev.adalab.es/api/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      cardLink.innerHTML = `${data.cardURL}`;
      cardLink.href = `${data.cardURL}`;
      twitterSection.classList.remove("hidden");
      twitterShareButton.href = `https://twitter.com/intent/tweet?text=${data.cardURL}`;
    });
};

createButton.addEventListener("click", handleCreate);

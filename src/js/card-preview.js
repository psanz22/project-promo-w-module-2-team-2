const renderCardPreview = () => {
  namePreview.innerHTML = data.name;
  jobPreview.innerHTML = data.job;
  mailPreview.href = data.email;
  phonePreview.href = data.phone;
  linkedinPreview.href = data.linkedin;
  githubPreview.href = data.github;
  imagePreview.style.backgroundImage = `url('${data.photo}')`;
  if (data.palette === '2') {
    card.classList.add('palette2');
  } else if (data.palette === '3') {
    card.classList.add('palette3');
  }
};

if (localStorageData !== null) {
  data = localStorageData;
  renderCardPreview();
} else {
  data = {
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };
}

function handleReset() {
  mainForm.reset();
  namePreview.innerHTML = 'Nombre Apellido';
  jobPreview.innerHTML = 'Front-end developer';
  mailPreview.href = '';
  phonePreview.href = '';
  linkedinPreview.href = '';
  githubPreview.href = '';
  imagePreview.style.backgroundImage =
    "url('https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg')";
  thumbnail.style.backgroundImage = "url('')";
  card.classList.remove('palette2', 'palette3');
  twitterSection.classList.add('hidden');
  localStorage.removeItem('localStorageData');
}

formReset.addEventListener('click', handleReset);

const i = document.querySelector(".js-name-preview"),
  u = document.querySelector(".js-job-preview"),
  S = document.querySelector(".js-image-preview"),
  d = document.querySelector(".js-phone-preview"),
  m = document.querySelector(".js-mail-preview"),
  p = document.querySelector(".js-linkedin-preview"),
  h = document.querySelector(".js-github-preview");
document.querySelector(".js-name");
document.querySelector(".js-job");
document.querySelector(".js-image");
document.querySelector(".js-phone");
document.querySelector(".js-mail");
document.querySelector(".js-linkedin");
document.querySelector(".js-github");
const j = document.querySelector(".js-thumbnail");
document.querySelector(".js-design");
document.querySelector(".js-fill");
document.querySelector(".js-share");
document.querySelectorAll(".js-header-collapsable");
document.querySelector(".js-arrow1");
document.querySelector(".js-arrow2");
document.querySelector(".js-arrow3");
document.querySelector(".js-design-container");
document.querySelector(".js-fill-container");
document.querySelector(".js-share-container");
const f = document.querySelector(".js-form"),
  c = document.querySelector(".js-card"),
  g = document.querySelector(".js-checkOne"),
  y = document.querySelector(".js-checkTwo"),
  q = document.querySelector(".js-checkThree"),
  b = document.querySelector(".js-reset"),
  v = document.querySelector(".js-mainForm"),
  k = document.querySelector(".js-create-button"),
  a = document.querySelector(".js-link"),
  w = document.querySelector(".js-twitter");
let s = JSON.parse(localStorage.getItem("localStorageData")),
  t = {
    palette: "1",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  };
s !== null
  ? (t = s)
  : (t = {
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
function L() {
  v.reset(),
    (i.innerHTML = "Nombre Apellido"),
    (u.innerHTML = "Front-end developer"),
    (m.href = ""),
    (d.href = ""),
    (p.href = ""),
    (h.href = ""),
    (S.style.backgroundImage =
      "url('https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg')"),
    (j.style.backgroundImage = "url('')"),
    c.classList.remove("palette2", "palette3"),
    localStorage.removeItem("localStorageData");
}
b.addEventListener("click", L);
const P = document.querySelector(".js-checkForm");
function T() {
  g.checked
    ? (c.classList.remove("palette2", "palette3"), (t.palette = "1"))
    : y.checked
    ? (c.classList.add("palette2"),
      c.classList.remove("palette3"),
      (t.palette = "2"))
    : q.checked &&
      (c.classList.add("palette3"),
      c.classList.remove("palette2"),
      (t.palette = "3"));
}
P.addEventListener("click", T);
const I = document.querySelectorAll(".js-collapsable-header"),
  H = document.querySelectorAll(".js-form-box");
function F(o) {
  const r = o.currentTarget.parentNode;
  console.log(r);
  for (const n of H)
    n === r
      ? n.classList.toggle("collapsable--close")
      : n.classList.add("collapsable--close");
}
for (const o of I) o.addEventListener("click", F);
function E(o) {
  const e = o.target.value,
    r = o.target.id;
  (t[r] = o.target.value),
    r === "name"
      ? ((i.innerHTML = e), (t.name = e))
      : r === "job"
      ? ((u.innerHTML = e), (t.job = e))
      : r === "email"
      ? ((m.href = "mailto:" + e), (t.email = e))
      : r === "phone"
      ? ((d.href = "tel:" + e), (t.phone = e))
      : r === "linkedin"
      ? ((p.href = e), (t.linkedin = e))
      : r === "github" && ((h.href = e), (t.github = e));
}
f.addEventListener("input", E);
const D = (o) => {
  o.preventDefault(),
    t.photo === null &&
      ((t.photo = `${l.result}`), console.log("data photo es ", t.photo)),
    console.log(t),
    (s = localStorage.setItem("localStorageData", JSON.stringify(t))),
    fetch("https://dev.adalab.es/api/card/", {
      method: "POST",
      body: JSON.stringify(t),
      headers: { "content-type": "application/json" },
    })
      .then((e) => e.json())
      .then((e) => {
        console.log(e),
          (a.innerHTML = `${e.cardURL}`),
          (a.href = `${e.cardURL}`),
          w.classList.remove("hidden");
      });
};
k.addEventListener("click", D);
const l = new FileReader(),
  O = document.querySelector(".js__profile-upload-btn"),
  R = document.querySelector(".js__profile-image"),
  _ = document.querySelector(".js__profile-preview");
function A(o) {
  const e = o.currentTarget.files[0];
  l.addEventListener("load", M), l.readAsDataURL(e);
}
function M() {
  (R.style.backgroundImage = `url(${l.result})`),
    (_.style.backgroundImage = `url(${l.result})`);
}
O.addEventListener("change", A);
//# sourceMappingURL=main.js.map

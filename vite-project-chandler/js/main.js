import "../style/style.css";
import { DOMselectors } from "./doms";
import { songs } from "./songs";

//CARD CREATOR
function createCard(arr) {
  arr.forEach((obj) => {
    const card = `
  <div class="card">
          <h4>${obj.name}</h4>
          <h5>${obj.artist}</h5>
        </div>
  `
    DOMselectors.container.insertAdjacentHTML("beforeend", card)
  });
};
createCard(songs);

//THEME CHANGER
DOMselectors.theme.addEventListener("click", function () {
  if (document.body.classList.contains("spotifyTheme")) {
    document.body.classList.add("appleTheme");
    document.body.classList.remove("spotifyTheme");
  } else {
    document.body.classList.add("spotifyTheme");
    document.body.classList.remove("appleTheme");
  }
}
);

//FILTER FUNCTION

DOMselectors.Rap.addEventListener("click", function () {
  const filteredArr = (songs.filter((songs) => songs.genre === "Rap"));
  DOMselectors.container.innerHTML = "";
  createCard(filteredArr);
  });
DOMselectors.Alternative.addEventListener("click", function () {
  const filteredArr = (songs.filter((songs) => songs.genre === "Alternative"));
  DOMselectors.container.innerHTML = "";
  createCard(filteredArr);
  });
DOMselectors.RandB.addEventListener("click", function () {
  const filteredArr = (songs.filter((songs) => songs.genre === "R&B"));
  DOMselectors.container.innerHTML = "";
  createCard(filteredArr);
  });
DOMselectors.Pop.addEventListener("click", function () {
  const filteredArr = (songs.filter((songs) => songs.genre === "Pop"));
  DOMselectors.container.innerHTML = "";
  createCard(filteredArr);
  });
DOMselectors.Kpop.addEventListener("click", function () {
  const filteredArr = (songs.filter((songs) => songs.genre === "K-Pop"));
  DOMselectors.container.innerHTML = "";
  createCard(filteredArr);
  });
DOMselectors.ChinesePop.addEventListener("click", function () {
  const filteredArr = (songs.filter((songs) => songs.genre === "Chinese Pop"));
  DOMselectors.container.innerHTML = "";
  createCard(filteredArr);
  });
DOMselectors.Instrumentals.addEventListener("click", function () {
  const filteredArr = (songs.filter((songs) => songs.genre === "Instrumentals"));
  DOMselectors.container.innerHTML = "";
  createCard(filteredArr);
  });
DOMselectors.All.addEventListener("click", function () {
  createCard(songs);
  });
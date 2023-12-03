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
DOMselectors.button.addEventListener("click", function () {
const filteredArr = songs.filter((song.genre) === "Rap" );
DOMselectors.container.innerHTML = "";
createCard(filteredArr);
});


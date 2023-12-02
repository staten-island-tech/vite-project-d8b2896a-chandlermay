import "../style/style.css";
import { DOMselectors } from "./doms";
import { songs } from "./songs";

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

DOMselectors.theme.addEventListener( "click", function(){
  if (document.body.classList.contains("spotifyTheme")) {
    document.body.classList.add("appleTheme");
    document.body.classList.remove("spotifyTheme");
  } else {
    document.body.classList.add("spotifyTheme");
    document.body.classList.remove("appleTheme");
  }
}
);
/* 
function filter(subject) {
  function x() {

  }
  DOMselectors.button.addEventListener("click", x())
}; */ 


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
DOMselectors.container.insertAdjacentHTML("afterbegin", card)
});
};
createCard(songs);
/* 
function filter(subject) {
  function x() {

  }
  DOMselectors.button.addEventListener("click", x())
}; */ 


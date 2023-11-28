import "../style/style.css";
import { DOMselectors } from "./doms";
import { songs } from "./songs";

function createCard(arr) {
  arr.forEach((el) =>
    DOMselectors.container.insertAdjacentElement("afterbegin", `
      <div class="card">
          <h4>${el.name}</h4>
          <h5>${el.artist}</h5>
          <img src=${el.image}>
        </div>
      `));
};
createCard(songs);
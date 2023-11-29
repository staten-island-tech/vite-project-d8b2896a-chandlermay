import "../style/style.css";
import { DOMselectors } from "./doms";
import { songs } from "./songs";

function createCard(songs) {
  songs.forEach((song) => {
    const card = `
  <div class="card">
          <h4>${song.name}</h4>
          <h5>${song.artist}</h5>
        </div>
  `
    DOMselectors.container.insertAdjacentHTML("afterbegin", card)
  });
};
  createCard(songs);

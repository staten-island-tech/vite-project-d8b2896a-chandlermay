import "../style/style.css";
import { DOMselectors } from "./doms";
import {songs} from "./songs";

function createCard(songs) {
  const card = `
  <div class="card">
        <h4>${songs.name}</h4>
        <img src=${songs.image}>
      </div>
  `
  songs.forEach(song => {
    DOMselectors.container.insertAdjacentElement("afterbegin",card)
  });
};
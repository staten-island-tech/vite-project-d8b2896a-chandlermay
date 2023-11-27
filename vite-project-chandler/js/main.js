import "../style/style.css";
import { DOMselectors } from "./doms";
import {songs} from "./songs";

function createCard(arr) {
    arr.forEach((el)=>
      DOMselectors.container.insertAdjacentElement("afterbegin",`
      <div class="card">
          <h4>${arr.name}</h4>
          <h5>${arr.artist}</h5>
          <img src=${arr.image}>
        </div>
      `));
  };
  createCard(songs);
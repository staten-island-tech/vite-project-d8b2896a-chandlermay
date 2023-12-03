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

//FILTER FUNCTION - my version that didnt work out right
/* DOMselectors.button.addEventListener("click", function () {
const filteredArr = songs.filter((song.genre) === "Pop" );
DOMselectors.container.innerHTML = "";
createCard(filteredArr);
});
DOMselectors.button.addEventListener("click", function () {
const filteredArr = songs.filter((song.genre) === "Rap" );
DOMselectors.container.innerHTML = "";
createCard(filteredArr);
});
DOMselectors.button.addEventListener("click", function () {
const filteredArr = songs.filter((song.genre) === "R&B" );
DOMselectors.container.innerHTML = "";
createCard(filteredArr);
});
DOMselectors.button.addEventListener("click", function () {
const filteredArr = songs.filter((song.genre) === "Alternative" );
DOMselectors.container.innerHTML = "";
createCard(filteredArr);
});
DOMselectors.button.addEventListener("click", function () {
const filteredArr = songs.filter((song.genre) === "K-Pop" );
DOMselectors.container.innerHTML = "";
createCard(filteredArr);
});
DOMselectors.button.addEventListener("click", function () {
const filteredArr = songs.filter((song.genre) === "Chinese Pop" );
DOMselectors.container.innerHTML = "";
createCard(filteredArr);
});
DOMselectors.button.addEventListener("click", function () {
const filteredArr = songs.filter((song.genre) === "K-Pop", "Chinese Pop", "Alternative" , "R&B" , "Pop" , "Rap" );
DOMselectors.container.innerHTML = "";
createCard(filteredArr);
});
 */

//Mr.Whalen's correct version
/* function filters() {
  DOMselectors.button.forEach((button) => button.addEventListener("click", function () {
    //obtain the button text to filter with
    let category = button.textContent.toLowerCase()
    //make a new array to be printed out
    let newArr = songs.filter((song) => song.genre.includes(category));
    //clear the old array off the screen
    DOMselectors.container.innerHTML = ""
    //print the new array
    createCard(newArr);
  }));
}
filters(); */

function filters() {
  DOMselectors.button.forEach((button) => button.addEventListener("click", function(){
    let category = button.textContent.toString()
    let newArr = songs.filter((song)=> song.genre.includes(category));
    DOMselectors.container.innerHTML=""
    createCard(newArr);
  }))
}
import "../style/style.css";

document.getElementById(".filters").insertAdjacentHTML("afterbegin" , `
<ul>
  <button class="button" id="all-selections">All Selections</button>
  <button class="button" id="chinese">Chinese</button>
  <button class="button" id="japanese">Japanese</button>
  <button class="button" id="korean">Korean</button>
  <button class="button" id="thai">Thai</button>
  <button class="button" id="vietnamese">Vietnamese</button>
</ul>
`);

console.log("whats good gang");
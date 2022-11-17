import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
import { idade } from "./dados/nome";

fetch("http://api.github.com/users/walberson")
  .then((response) => {
    return response.json();
  })
  .then((body) => (document.querySelector("#teste").innerText = body.name))
  .catch((e) => console.log("DEU UM ERRO MUITO GRANDE, MEU DEUS!"))
  .finally(() => console.log("deu"));

async function buscaNome() {
  try {
    const response = await fetch("http://api.github.com/users/walberson");
    const body = await response.json();
    console.log(body);
  } catch {
    console.log("ERRO MUITO GRANDE ACONTECEU");
  } finally {
    console.log("deu");
  }
}
buscaNome();

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>

    <h1>Temporário</h1>

  </div>
`;

setupCounter(document.querySelector("#counter"));

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#dominios").innerHTML = DomainGenerator();
};

let DomainGenerator = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominio = [".com", ".es", ".io"];
  let resultado = [];

  for (const i of pronoun) {
    for (const k of adj) {
      for (const o of noun) {
        for (const p of dominio) {
          resultado.push(`${i}${k}${o}${p}`);
        }
      }
    }
  }
  return resultado.join(", ");
};

console.log(DomainGenerator());

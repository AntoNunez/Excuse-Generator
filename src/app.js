/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  function generateExcuse() {
    let who = ["the dog", "my granma", "his turtle", "my bird"];
    let what = ["eat", "pissed", "crushed", "broked"];
    let when = [
      "before the class",
      "right in time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let whoEx = Math.floor(Math.random() * who.length);
    let whatEx = Math.floor(Math.random() * what.length);
    let whenEx = Math.floor(Math.random() * when.length);

    return who[whoEx] + " " + what[whatEx] + " " + when[whenEx];
  }

  console.log(generateExcuse());

  document.querySelector("#excuse").innerHTML = generateExcuse();
};

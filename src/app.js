/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomPinta());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  /*
  Si quisiera que cada segundo se eliminara la clase heart y por ejemplo se agregara la clase spade
  se hace la función setTimeout:
  setTimeout(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.add("spade");
  }, 1000);*/
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomPinta = () => {
  let pinta = ["heart", "spade", "diamond", "club"];
  let indexPinta = Math.floor(Math.random() * pinta.length);
  return pinta[indexPinta];
};

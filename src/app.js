import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronouns = ['the', 'our', 'their', 'its'];
  let adjectives = ['great', 'big', 'almighty', 'astronomical'];
  let nouns = ['jogger', 'racoon', 'protector', 'commander'];
  let domains = [".com", ".co", ".gov", ".es", ".net"]

  for (let i in pronoun) {
    for (let j in adjectives) {
      for (let k in nouns) {
        for (let l in domains) {
          console.log(pronouns[i] + adjectives[j] + nouns[k] + domains[l])
        }
      }
    }
  }
}
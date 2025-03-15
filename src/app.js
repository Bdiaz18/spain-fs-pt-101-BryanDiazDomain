import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronoun = ['the', 'our', 'their', 'its'];
  let adj = ['great', 'big', 'almighty', 'astronomical'];
  let noun = ['jogger', 'racoon', 'protector', 'commander'];
  let dom = [".com", ".co", ".gov", ".es", ".net"]

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in dom) {
          console.log(pronoun[i] + adj[j] + noun[k] + dom[l])
        }
      }
    }
  }
}
//vars
let plus = document.getElementsByClassName("fas fa-plus-circle");
let minus = document.getElementsByClassName("fas fa-minus-circle");
let qte = document.querySelectorAll(".qtt");
let price = document.querySelectorAll(".total");
let heart = document.querySelectorAll(".fa-heart");
let aprice = document.getElementsByClassName("price");
let yeet = document.querySelectorAll(".card mb-3");
var trash = document.querySelectorAll(".fa-trash");
//plus
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    totale();
  });
}
//minus
for (let i = 0; i < plus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      qte[i].innerHTML--;
    }
    totale();
  });
}
//total
function totale() {
  let q = document.querySelectorAll(".qtt");
  let p = document.getElementsByClassName("price");
  let somme = 0;
  for (let i = 0; i < plus.length; i++) {
    somme = somme + parseInt(q[i].innerHTML) * parseInt(p[i].innerHTML);
  }

  document.querySelector(".total").innerHTML = somme;
}
//remove
for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[
      i
    ].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    totale();
  });
}
//heart
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (heart[i].classList.contains("fas")) {
      heart[i].classList.remove("fas");
      heart[i].classList.add("far");
    } else {
      heart[i].classList.remove("far");
      heart[i].classList.add("fas");
    }
  });
}

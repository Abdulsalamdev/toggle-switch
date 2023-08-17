const out = document.querySelector(".check");
const inn = document.querySelector(".inner");
const main = document.querySelector(".main");

out.addEventListener("click", function () {
  if (inn.classList.toggle("move")) {
    inn.classList.remove("back");
    document.querySelector("body").style.background = "white";
    main.style.background = "black";
    main.style.color = "blue";
  } else if (inn.classList.toggle("back")) {
    inn.classList.remove("move");
    document.querySelector("body").style.background = "green";
    main.style.background = "white";
    main.style.color = "red";
  }
});

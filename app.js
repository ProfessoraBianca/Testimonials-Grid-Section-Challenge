    //Theme Toggler Button by: Bernardo Poggioni
const toggler = document.querySelector("#toggler");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".cards");

toggler.addEventListener("click", () => {
    //Seleciona o círculo;
    circle = toggler.querySelector(".circle");

    //Adiciona/Remove a classe "active";
    circle.classList.toggle("active");
    toggler.classList.toggle("active");

    //Muda a cor do Body
    body.classList.toggle("dark");
    cards.forEach((cards) => cards.classList.toggle("active"));
})
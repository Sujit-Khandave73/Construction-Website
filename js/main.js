// const menuToggle = document.getElementById("menuToggle");
// const navMenu = document.getElementById("navMenu");

// menuToggle.addEventListener("click", () => {
//   navMenu.style.display =
//     navMenu.style.display === "flex" ? "none" : "flex";
// });

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navMenu');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
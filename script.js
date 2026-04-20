// NAV cambia estilo al hacer scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");

  if (window.scrollY > 80) {
    nav.style.background = "rgba(0,0,0,0.6)";
    nav.style.backdropFilter = "blur(10px)";
  } else {
    nav.style.background = "transparent";
    nav.style.backdropFilter = "none";
  }
});

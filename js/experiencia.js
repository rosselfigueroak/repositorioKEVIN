/* =========================================================
   experiencia.js — experiencia.html (Experiencia laboral)
   ========================================================= */

const botonesFiltro = document.querySelectorAll(".filtro");
const items = document.querySelectorAll(".item-tiempo");
const contador = document.getElementById("contadorExp");

// ---------- AGREGAR O QUITAR CLASES: filtrar experiencias ----------
botonesFiltro.forEach(function (boton) {
  boton.addEventListener("click", function () {
    // 1) Cambiar el estilo de los botones (quitar/agregar clases de Bootstrap)
    botonesFiltro.forEach(function (b) {
      b.classList.remove("btn-primary");
      b.classList.add("btn-outline-primary");
    });
    boton.classList.replace("btn-outline-primary", "btn-primary");

    // 2) Mostrar u ocultar cada experiencia según su atributo data-tipo
    const filtro = boton.dataset.filtro;
    let visibles = 0;
    items.forEach(function (item) {
      if (filtro === "todos" || item.dataset.tipo === filtro) {
        item.classList.remove("oculto");
        visibles++;
      } else {
        item.classList.add("oculto");
      }
    });

    // 3) Cambiar contenido del contador
    contador.textContent = "Mostrando " + visibles +
      (visibles === 1 ? " experiencia" : " experiencias");
  });
});

// ---------- EVENTOS DEL MOUSE: mouseenter y mouseleave ----------
items.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    item.classList.add("destacado");
  });
  item.addEventListener("mouseleave", function () {
    item.classList.remove("destacado");
  });
});

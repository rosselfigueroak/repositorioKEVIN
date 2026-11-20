/* =========================================================
   perfil.js — perfil.html (Perfil profesional)
   ========================================================= */

// ---------- MODIFICAR ESTILOS CSS: tamaño de letra con element.style ----------
const textoPerfil = document.getElementById("textoPerfil");
let tamanio = 16;   // píxeles

function aplicarTamanio() {
  textoPerfil.style.fontSize = tamanio + "px";
}
document.getElementById("btnMas").addEventListener("click", function () {
  if (tamanio < 24) { tamanio += 2; aplicarTamanio(); }
});
document.getElementById("btnMenos").addEventListener("click", function () {
  if (tamanio > 12) { tamanio -= 2; aplicarTamanio(); }
});
document.getElementById("btnNormal").addEventListener("click", function () {
  tamanio = 16;
  textoPerfil.style.removeProperty("font-size");   // quitar un estilo en línea
});

// ---------- MODIFICAR ESTILOS: color de resaltado (evento input) ----------
document.getElementById("colorResaltado").addEventListener("input", function (e) {
  document.querySelectorAll(".resaltado").forEach(function (span) {
    span.style.backgroundColor = e.target.value;
  });
});

// ---------- AGREGAR O QUITAR CLASES: "Leer más" con classList.toggle ----------
const btnLeerMas = document.getElementById("btnLeerMas");
const textoExtra = document.getElementById("textoExtra");

btnLeerMas.addEventListener("click", function () {
  const visible = textoExtra.classList.toggle("visible");   // devuelve true/false
  btnLeerMas.innerHTML = visible
    ? 'Leer menos <i class="bi bi-chevron-up"></i>'
    : 'Leer más <i class="bi bi-chevron-down"></i>';
});

// ---------- ESTILOS + ATRIBUTOS data-*: animar barras de habilidades ----------
function animarBarras() {
  document.querySelectorAll(".habilidad").forEach(function (hab) {
    const valor = hab.dataset.valor;                 // lee data-valor
    const barra = hab.querySelector(".progress-bar");
    const texto = hab.querySelector(".porcentaje");
    barra.style.width = "0%";
    barra.style.transition = "width 1.2s ease";
    setTimeout(function () {
      barra.style.width = valor + "%";               // modifica el estilo width
      texto.textContent = valor + "%";               // cambia el contenido
      hab.querySelector(".progress").setAttribute("aria-valuenow", valor);
    }, 100);
  });
}
document.getElementById("btnAnimar").addEventListener("click", animarBarras);
window.addEventListener("load", animarBarras);       // evento load de la ventana

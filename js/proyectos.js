/* =========================================================
   proyectos.js — proyectos.html (Proyectos)
   ========================================================= */

const columnas = document.querySelectorAll(".col-proyecto");
const buscador = document.getElementById("buscador");
const botonesCat = document.querySelectorAll(".btn-cat");
const sinResultados = document.getElementById("sinResultados");
let categoriaActiva = "todos";

function filtrar() {
  const texto = buscador.value.toLowerCase().trim();
  let visibles = 0;
  columnas.forEach(function (col) {
    const nombre = col.querySelector(".card-title").textContent.toLowerCase();
    const okCat = categoriaActiva === "todos" || col.dataset.categoria === categoriaActiva;
    const okTexto = nombre.includes(texto);
    col.classList.toggle("oculto", !(okCat && okTexto));   // agrega o quita según condición
    if (okCat && okTexto) visibles++;
  });
  sinResultados.classList.toggle("d-none", visibles > 0);
}

// ---------- EVENTO input: búsqueda mientras se escribe ----------
buscador.addEventListener("input", filtrar);

// ---------- EVENTO click: filtros por categoría ----------
botonesCat.forEach(function (btn) {
  btn.addEventListener("click", function () {
    botonesCat.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    categoriaActiva = btn.getAttribute("data-cat");
    filtrar();
  });
});

// ---------- CONSULTAR Y MODIFICAR ATRIBUTOS: llenar el modal ----------
let proyectoActual = null;
const btnFavorito = document.getElementById("btnFavorito");

document.querySelectorAll(".btn-detalle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    proyectoActual = btn;
    document.getElementById("modalTitulo").textContent = btn.getAttribute("data-nombre");
    document.getElementById("modalTec").textContent = btn.dataset.tecnologias;
    document.getElementById("modalAnio").textContent = btn.dataset.anio;

    const img = document.getElementById("modalImg");
    img.setAttribute("src", btn.dataset.img);
    img.setAttribute("alt", "Proyecto " + btn.dataset.nombre);

    document.getElementById("modalRepo").setAttribute("href", btn.dataset.repo);
    actualizarBotonFavorito();
  });
});

// hasAttribute / setAttribute / removeAttribute
function actualizarBotonFavorito() {
  const esFav = proyectoActual.hasAttribute("data-favorito");
  btnFavorito.innerHTML = esFav
    ? '<i class="bi bi-star-fill"></i> Quitar favorito'
    : '<i class="bi bi-star"></i> Marcar favorito';
}

btnFavorito.addEventListener("click", function () {
  const card = proyectoActual.closest(".card");
  if (proyectoActual.hasAttribute("data-favorito")) {
    proyectoActual.removeAttribute("data-favorito");
    card.classList.remove("border", "border-warning", "border-3");
  } else {
    proyectoActual.setAttribute("data-favorito", "si");
    card.classList.add("border", "border-warning", "border-3");
  }
  actualizarBotonFavorito();
});

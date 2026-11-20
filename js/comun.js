/* =========================================================
   comun.js — Código compartido por TODAS las páginas
   ========================================================= */

// ---------- 1. Marcar en el menú la página actual (clases y atributos) ----------
const paginaActual = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navbar .nav-link").forEach(function (enlace) {
  if (enlace.getAttribute("href") === paginaActual) {
    enlace.classList.add("active");                 // agrega una clase
    enlace.setAttribute("aria-current", "page");    // agrega un atributo
  }
});

// ---------- 2. Año actual en el pie de página (cambiar contenido) ----------
document.getElementById("anio").textContent = new Date().getFullYear();

// ---------- 3. Modo oscuro (classList.toggle + localStorage) ----------
const btnTema = document.getElementById("btnTema");

function aplicarTema(oscuro) {
  document.body.classList.toggle("modo-oscuro", oscuro);
  // atributo de Bootstrap 5.3 para su tema oscuro nativo
  document.documentElement.setAttribute("data-bs-theme", oscuro ? "dark" : "light");
  btnTema.innerHTML = oscuro
    ? '<i class="bi bi-sun"></i> Modo claro'
    : '<i class="bi bi-moon-stars"></i> Modo oscuro';
}

let temaGuardado = false;
try { temaGuardado = localStorage.getItem("tema") === "oscuro"; } catch (e) {}
aplicarTema(temaGuardado);

// Forma 2 de escuchar eventos: propiedad on<evento> del elemento
btnTema.onclick = function () {
  const oscuro = !document.body.classList.contains("modo-oscuro");
  aplicarTema(oscuro);
  try { localStorage.setItem("tema", oscuro ? "oscuro" : "claro"); } catch (e) {}
};

// ---------- 4. Función usada por el atributo onclick del HTML (Forma 1) ----------
function volverArriba() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

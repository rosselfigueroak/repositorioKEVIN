/* =========================================================
   referencias.js — referencias.html (Referencias laborales)
   ========================================================= */

const itemsRef = document.querySelectorAll(".referencia-item");

// ---------- EVENTOS click y dblclick ----------
itemsRef.forEach(function (li) {
  li.addEventListener("click", function () {
    itemsRef.forEach(function (otro) { otro.classList.remove("seleccionada", "active"); });
    li.classList.add("seleccionada");
  });

  li.addEventListener("dblclick", function () {
    const badge = li.querySelector(".telefono");
    badge.textContent = li.getAttribute("data-telefono");   // contenido desde un atributo
    badge.classList.toggle("d-none");
  });
});

// ---------- EVENTOS DE TECLADO: keyup (contador) y keydown (atajo) ----------
const recTexto = document.getElementById("recTexto");
const contadorCar = document.getElementById("contadorCaracteres");
const formRec = document.getElementById("formRecomendacion");

recTexto.addEventListener("keyup", function () {
  const n = recTexto.value.length;
  contadorCar.textContent = n + " / 150";
  contadorCar.style.color = n > 130 ? "#dc3545" : "";       // estilo dinámico
});

recTexto.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "Enter") {
    formRec.requestSubmit();                                // dispara el evento submit
  }
});

// ---------- CREAR, INSERTAR Y ELIMINAR recomendaciones ----------
const contenedor = document.getElementById("recomendaciones");

formRec.addEventListener("submit", function (e) {
  e.preventDefault();
  const autor = document.getElementById("recAutor").value.trim();
  const texto = recTexto.value.trim();
  if (!autor || !texto) return;

  const tarjeta = document.createElement("div");
  tarjeta.className = "alert alert-light border d-flex justify-content-between align-items-start";

  const cuerpo = document.createElement("div");
  const p = document.createElement("p");
  p.className = "cita mb-1";
  p.textContent = "“" + texto + "”";
  const firma = document.createElement("small");
  firma.className = "fw-bold";
  firma.textContent = "— " + autor;
  cuerpo.append(p, firma);

  const cerrar = document.createElement("button");
  cerrar.className = "btn-close";
  cerrar.setAttribute("aria-label", "Eliminar recomendación");
  cerrar.addEventListener("click", function () {
    tarjeta.remove();                                       // eliminar elemento
  });

  tarjeta.append(cuerpo, cerrar);
  contenedor.prepend(tarjeta);                              // insertar al inicio
  formRec.reset();
  contadorCar.textContent = "0 / 150";
});

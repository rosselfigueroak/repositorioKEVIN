/* =========================================================
   formacion.js — formacion.html (Formación académica)
   ========================================================= */

const tbody = document.querySelector("#tablaCursos tbody");
const totalCursos = document.getElementById("totalCursos");

function actualizarTotal() {
  const n = tbody.children.length;
  totalCursos.textContent = n + (n === 1 ? " curso" : " cursos");
}

// ---------- CREAR ELEMENTOS: construir una fila nueva ----------
function crearFila(nombre, institucion, anio) {
  const fila = document.createElement("tr");          // crear <tr>
  fila.classList.add("fila-nueva");

  [nombre, institucion, anio].forEach(function (dato) {
    const celda = document.createElement("td");       // crear <td>
    celda.textContent = dato;
    fila.appendChild(celda);                          // insertar dentro de la fila
  });

  const celdaAccion = document.createElement("td");
  celdaAccion.className = "text-end";
  const btn = document.createElement("button");
  btn.className = "btn btn-sm btn-outline-danger btn-eliminar";
  btn.innerHTML = '<i class="bi bi-trash"></i>';
  celdaAccion.appendChild(btn);
  fila.appendChild(celdaAccion);
  return fila;
}

// ---------- INSERTAR ELEMENTOS: al final o al inicio de la tabla ----------
document.getElementById("formCurso").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("cursoNombre").value.trim();
  const inst = document.getElementById("cursoInst").value.trim();
  const anio = document.getElementById("cursoAnio").value;
  if (!nombre || !inst) return;

  const fila = crearFila(nombre, inst, anio);
  if (document.getElementById("cursoPosicion").value === "inicio") {
    tbody.insertBefore(fila, tbody.firstElementChild);   // insertar antes del primero
  } else {
    tbody.appendChild(fila);                              // insertar al final
  }
  actualizarTotal();
  this.reset();
  document.getElementById("cursoAnio").value = 2026;
});

// ---------- ELIMINAR ELEMENTOS: delegación de eventos + remove() ----------
tbody.addEventListener("click", function (e) {
  const boton = e.target.closest(".btn-eliminar");
  if (!boton) return;
  const fila = boton.closest("tr");
  fila.remove();                                          // eliminar del DOM
  actualizarTotal();
});

// ---------- CREAR LISTA COMPLETA DESDE UN ARREGLO ----------
const complementaria = [
  { titulo: "Inglés intermedio-alto (B2)", lugar: "Centro Boliviano Americano", icono: "bi-translate" },
  { titulo: "Taller de UX/UI", lugar: "Comunidad de diseño La Paz", icono: "bi-palette" },
  { titulo: "Seguridad en aplicaciones web (OWASP)", lugar: "Curso virtual", icono: "bi-shield-lock" },
];
const lista = document.getElementById("listaComplementaria");
const fragmento = document.createDocumentFragment();

complementaria.forEach(function (item) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center gap-3";
  li.innerHTML = '<i class="bi ' + item.icono + ' fs-4 text-primary"></i>' +
    "<div><strong></strong><br><small class='text-muted'></small></div>";
  li.querySelector("strong").textContent = item.titulo;
  li.querySelector("small").textContent = item.lugar;
  fragmento.append(li);
});
lista.append(fragmento);
actualizarTotal();

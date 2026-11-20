/* =========================================================
   inicio.js — index.html (Datos personales y contacto)
   ========================================================= */

// ---------- CAMBIAR CONTENIDO: saludo según la hora ----------
const saludo = document.getElementById("saludo");
const hora = new Date().getHours();
if (hora < 12) {
  saludo.textContent = "¡Buenos días! 👋 Soy";
} else if (hora < 19) {
  saludo.textContent = "¡Buenas tardes! 👋 Soy";
} else {
  saludo.textContent = "¡Buenas noches! 👋 Soy";
}

// ---------- CONSULTAR Y MODIFICAR ATRIBUTOS: cambiar la foto ----------
const foto = document.getElementById("fotoPerfil");

// Forma 3 de escuchar eventos: addEventListener
foto.addEventListener("click", function () {
  const srcActual = foto.getAttribute("src");          // consultar atributo
  if (srcActual === "img/perfil.svg") {
    foto.setAttribute("src", "img/perfil-casual.svg");  // modificar atributo
    foto.setAttribute("alt", "Fotografía casual de Kevin Rossel");
  } else {
    foto.setAttribute("src", "img/perfil.svg");
    foto.setAttribute("alt", "Fotografía formal de Kevin Rossel");
  }
  console.log("Atributo alt actual:", foto.alt);
});

// ---------- Copiar correo: consultar atributo href y cambiar texto del botón ----------
const btnCopiar = document.getElementById("btnCopiar");
btnCopiar.addEventListener("click", function () {
  const correo = document.getElementById("enlaceCorreo")
    .getAttribute("href").replace("mailto:", "");
  if (navigator.clipboard) {
    navigator.clipboard.writeText(correo).catch(function () {});
  }
  btnCopiar.innerHTML = '<i class="bi bi-check2"></i> ¡Copiado!';
  btnCopiar.disabled = true;                            // propiedad/atributo disabled
  setTimeout(function () {
    btnCopiar.innerHTML = '<i class="bi bi-clipboard"></i> Copiar correo';
    btnCopiar.disabled = false;
  }, 2000);
});

// ---------- Evento submit del formulario ----------
const form = document.getElementById("formContacto");
const respuesta = document.getElementById("respuestaForm");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();                       // evita que la página se recargue
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo.includes("@") || !mensaje) {
    form.classList.add("was-validated");         // clase de Bootstrap para validar
    respuesta.innerHTML =
      '<div class="alert alert-danger">Completa todos los campos correctamente.</div>';
    return;
  }
  form.classList.remove("was-validated");
  respuesta.innerHTML =
    '<div class="alert alert-success">Gracias, <strong></strong>. Tu mensaje fue registrado.</div>';
  respuesta.querySelector("strong").textContent = nombre;   // texto seguro
  form.reset();
});

# Sitio web "Perfil Profesional" – Manipulación del DOM con JavaScript

Sitio de 6 páginas sobre el perfil profesional de **Kevin Rossel Figueroa**,
hecho para mostrar cómo JavaScript cambia la página a través del DOM.

## Estructura

```
sitio-perfil/
├── index.html          → Datos personales, fotografía y contacto
├── perfil.html         → Perfil profesional
├── experiencia.html    → Experiencia laboral
├── formacion.html      → Formación académica
├── proyectos.html      → Proyectos personales/profesionales
├── referencias.html    → Referencias laborales
├── css/estilos.css     → Estilos propios (separados)
├── js/comun.js         → Código común: menú activo, modo oscuro, año
├── js/inicio.js … js/referencias.js → un archivo JS por página
├── img/                → Fotografías e imágenes (SVG)
└── vendor/             → Bootstrap 5.3 y Bootstrap Icons (copias locales)
```

## Qué demuestra cada página

| Tema del DOM | Dónde se ve |
|---|---|
| Cambiar el contenido (`textContent`, `innerHTML`) | index (saludo, formulario), formación (contador) |
| Modificar estilos CSS (`element.style`) | perfil (tamaño de letra, color de resaltado, barras) |
| Agregar o quitar clases (`classList`) | experiencia (filtros), perfil (leer más), modo oscuro |
| Consultar y modificar atributos (`getAttribute`, `setAttribute`, `dataset`, `removeAttribute`) | index (foto), proyectos (modal, favorito) |
| Escuchar eventos: 1) atributo `onclick`, 2) propiedad `onclick`, 3) `addEventListener` | pie de página, botón de modo oscuro, todas las páginas |
| Crear, insertar y eliminar elementos (`createElement`, `appendChild`, `insertBefore`, `prepend`, `remove`) | formación (tabla de cursos), referencias (recomendaciones) |

## Cómo verlo en tu computadora
Abre `index.html` con doble clic, o usa la extensión *Live Server* de VS Code.

## Cómo publicarlo

### Opción A: Netlify (la más fácil)
1. Entra a https://app.netlify.com/drop e inicia sesión (o crea una cuenta gratis).
2. Arrastra la carpeta `sitio-perfil` completa a la página.
3. Netlify te da un enlace como `https://nombre-aleatorio.netlify.app`.
4. En *Site configuration → Change site name* puedes ponerle un nombre, por ejemplo `perfil-kevin-rossel`.

### Opción B: GitHub Pages
1. Crea un repositorio público en GitHub, por ejemplo `perfil-profesional`.
2. Sube todos los archivos de la carpeta (*Add file → Upload files*). `index.html` debe quedar en la raíz.
3. Ve a *Settings → Pages*; en *Source* elige `Deploy from a branch`, rama `main`, carpeta `/ (root)` y guarda.
4. En 1 o 2 minutos el sitio estará en `https://TU-USUARIO.github.io/perfil-profesional/`.

### Opción C: InfinityFree
1. Crea una cuenta y un sitio gratuito en https://www.infinityfree.com.
2. Abre el *File Manager* y entra a la carpeta `htdocs`.
3. Sube todos los archivos y carpetas (borra antes el `index2.html` que trae por defecto).

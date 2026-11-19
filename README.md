# 🚀 Mi Sitio Web Personal & Blog

Un sitio web moderno, rápido, completamente responsivo y elegante para mostrar tu trayectoria profesional, logros más importantes, proyectos, hobbies y artículos de blog.

---

## 📁 Estructura del Proyecto

```text
personal-blog/
├── index.html           # Landing page principal (Hero, Sobre mí, Logros Bento Grid, Trabajo, Hobbies, Blog, Contacto)
├── blog.html            # Catálogo interactivo de todos los artículos con filtros por categoría
├── post-ejemplo.html    # Plantilla de lectura para artículos individuales
├── assets/
│   ├── css/
│   │   └── styles.css   # Estilos personalizados, efectos glassmorphism y scrollbar
│   └── js/
│       └── main.js      # Modo oscuro/claro, copia rápida de email, menú móvil y filtros
└── README.md            # Guía de personalización y despliegue
```

---

## ⚡ ¿Cómo abrir y ver el sitio?

### Opción 1: Directo en tu navegador (Sin instalar nada)
Haz doble clic sobre el archivo [index.html](file:///C:/Users/PenaM/.gemini/antigravity/scratch/personal-blog/index.html) o arrástralo a cualquier navegador web (Chrome, Edge, Firefox, Brave).

### Opción 2: Con servidor local (Recomendado para desarrollo)
Si tienes Python instalado, puedes ejecutar en una terminal dentro de esta carpeta:

```bash
python -m http.server 3000
```
Y abrir `http://localhost:3000` en tu navegador.

---

## 🛠️ Guía de Personalización

1. **Tu Nombre y Titular:**
   - Abre `index.html` y reemplaza `Tu Nombre`, `TuRol.dev` y el correo `hola@tunombre.com` con tus datos reales.
2. **Foto de Perfil:**
   - En `index.html` busca la etiqueta `<img>` en la sección Hero y cambia el enlace de la imagen o coloca una foto tuya en `assets/img/avatar.jpg`.
3. **Tus Logros (Bento Grid):**
   - En la sección `#logros` de `index.html`, personaliza las métricas clave (ej. "+100,000 Usuarios", "Premio a la Innovación", tus certificaciones de Google, AWS, etc.).
4. **Tus Proyectos:**
   - En la sección `#trabajo`, actualiza los títulos, descripciones, tecnologías usadas y enlaces a demostraciones en vivo o repositorios de GitHub.
5. **Tus Hobbies:**
   - En la sección `#hobbies`, edita las tarjetas para reflejar lo que realmente te gusta hacer (fotografía, deportes, lectura, música, viajes, etc.).
6. **Escribir un nuevo post en el Blog:**
   - Duplica el archivo `post-ejemplo.html`, renómbralo a tu gusto (ej. `mi-primer-post.html`), escribe tu contenido y añade el enlace en `blog.html` e `index.html`.

---

## 🌐 ¿Cómo publicarlo gratis en Internet?

Puedes publicar este sitio de forma 100% gratuita con cualquiera de estas opciones:

1. **GitHub Pages (Más popular):**
   - Sube esta carpeta a un repositorio en GitHub.
   - Ve a `Settings` > `Pages` > Selecciona la rama `main` y guarda. ¡Tu sitio estará en vivo en `https://tu-usuario.github.io/tu-repo/`!
2. **Vercel / Netlify:**
   - Arrastra y suelta la carpeta en el panel de Netlify o conecta tu repositorio en Vercel para despliegue instantáneo con dominio gratis `.vercel.app` o `.netlify.app`.

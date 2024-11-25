# Ceramic Website

Este proyecto es un sitio web diseñado para una empresa de cerámica, desarrollado con HTML, CSS y JavaScript. Su objetivo es proporcionar un diseño visualmente atractivo, interactivo y fácil de navegar, ideal para mostrar productos y servicios.

## Características

- **HTML**: Estructura bien organizada para presentar información de manera clara.
- **CSS**: Estilos personalizables para resaltar el diseño profesional y atractivo.
- **JavaScript**: Animaciones y funcionalidad dinámica para una experiencia de usuario mejorada.

## Secciones del Sitio

1. **Inicio**:
   - Introducción visual al negocio con un encabezado llamativo y un texto de bienvenida.
   - Uso de animaciones suaves al cargar elementos, como deslizamientos y desvanecidos.
   
2. **Productos**:
   - Galería interactiva de productos de cerámica con efectos de hover.

3. **Servicios**:
   - Listado de servicios ofrecidos, con efectos de deslizamiento.
   - Integración de íconos para mejorar la comprensión visual.

4. **Contacto**:
   - Formulario funcional con validación básica mediante JavaScript.
   - Animaciones de entrada para los campos del formulario.

## Animaciones con JavaScript

- **Deslizamiento de elementos**: Se utiliza para que el contenido aparezca desde los lados.
  ```javascript
  const elements = document.querySelectorAll('.slide-in');
  window.addEventListener('scroll', () => {
      elements.forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
              el.classList.add('visible');
          }
      });
  });

# Captio Privacy Landing Page

Sitio estático para Captio con información de producto, términos de uso, política de privacidad, contacto e idioma seleccionable.

## Estructura

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   └── captio-logo.svg
│   ├── data/
│   │   └── translations.json
│   └── js/
│       └── main.js
└── README.md
```

## Archivos principales

- `index.html`: estructura semántica de la página.
- `assets/css/styles.css`: estilos, responsive design y variables de color.
- `assets/data/translations.json`: textos traducidos en español, inglés y portugués.
- `assets/js/main.js`: cambio de idioma y navegación suave entre secciones.
- `assets/img/captio-logo.svg`: logo usado en la navegación y el hero.

## Cómo usar

Sirve la carpeta con un servidor local para que el navegador pueda cargar el archivo JSON de traducciones.

Con Python:

```bash
python -m http.server 8080
```

Luego visita:

```text
http://localhost:8080
```

## Personalización

- Cambia colores y espaciados desde las variables de `:root` en `assets/css/styles.css`.
- Edita textos y traducciones en `assets/data/translations.json`.
- Reemplaza `assets/img/captio-logo.svg` si necesitas usar una versión final del logo.

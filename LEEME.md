# Mundo de Fantasía

Landing estática en español. Ejecutar `node serve.cjs` y abrir http://127.0.0.1:4173. Sin dependencias de ejecución.

## Edición

- `dist/index.html`: estructura, textos, tarifas, logo, collage y vídeo.
- `dist/content.js`: servicios, contacto y fotos.
- `dist/styles.css`: diseño adaptable.
- `dist/hero-video.js`: reproducción única, pausa y repetición manual.
- `dist/media/`: medios de la web. `assets/` conserva los originales.
- `dist/style-tile.html`: muestra de identidad.
- `PROMPTS-MUNDO-DE-FANTASIA.md`: prompts entregados previamente.

## Vídeo

Original HEVC 1440 × 1440, 24 fps, 8,04 segundos. Copia web H.264 de 960 × 960, sin audio, 1,87 MB. Al cargar la página se solicita una única reproducción silenciosa; no hay loop, fijación de la sección ni interacción con scroll. Queda detenido al final y aparece Volver a reproducir. Durante la reproducción se puede pausar y continuar.

Si el navegador bloquea autoplay, o están activados movimiento reducido o ahorro de datos, se ofrece Reproducir vídeo. Poster visible desde HTML. Sin JavaScript quedan controles nativos. El recorrido y los fotogramas de scroll se retiraron conforme a la última petición.

## Medios y marca

Logo, seis fotos de servicios y collage aportados por el usuario. Logo sin regenerar; se ajusta su margen transparente mediante CSS. Collage completo, sin alterar sus píxeles ni emojis. La foto de cuentacuentos se sustituyó por la versión corregida: `dist/media/erase-una-fiesta-v2.webp`.

La franja usa `dist/media/actividades-ilustradas.png`, generada con la herramienta integrada de imágenes: mariposa, globo, paracaídas, manualidades y sol. Prompt: five distinct equally spaced children's activity icons in one horizontal transparent sprite; rounded tactile illustration; violet #56249B, pink #D72B78, yellow #FFCF47 and cream; butterfly, balloon dog, play parachute, craft scissors and paper, smiling sun; no text, no repeated stars. PNG de 2172 × 724; cada quinto se muestra como un icono mediante CSS.

## Contacto y precios

Dos animadores: 140 €, 2 horas. Gymkanas: 95/160 €, duración a consultar. Spa, disfraces y decoración: consultar. Formulario prepara un mensaje de WhatsApp; el visitante lo revisa y envía. Sin almacenamiento ni pagos. Google Fonts con respaldo local.

## Verificación final
JavaScript validado; reproducción automática sin loop comprobada; detenido al final en 8,04 s; botón de repetición vuelve al inicio y reproduce. Layout móvil revisado a 390 × 844 sin desbordamiento horizontal. Ruta de la foto corregida comprobada. Se mantiene la alternativa manual para movimiento reducido y bloqueo de autoplay.

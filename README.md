# Volver a Empezar

Sitio estático (HTML + CSS + JavaScript) de Norberto Timoteo Holubicki. No necesita compilar nada.

## Publicar en Cloudflare Pages

1. Cloudflare → Workers y Pages → Crear → Pages → Conectar con Git.
2. Elegí este repositorio (`volver-a-empezar`) y la rama `main`.
3. Configuración de compilación: preset **None**, comando de compilación **vacío**, directorio de salida **/** (la raíz).
4. Guardar y desplegar.

## Video propio

Si subís `video/presentacion.mp4`, la página lo muestra en lugar del video de versículos.

## Asistente de apoyo con IA (opcional)

El asistente funciona solo en modo guiado (sin IA) hasta que actives la función `functions/api/chat.js`:

1. Creá una clave de API en la consola de Anthropic.
2. En Cloudflare: tu proyecto de Pages → **Configuración** → **Variables y secretos** → **Agregar**.
3. Nombre `ANTHROPIC_API_KEY`, tipo **Secreto**, pegá la clave. Guardá.
4. Volvé a desplegar (Implementaciones → Reintentar la última). El asistente pasa solo a modo IA.

Opcional: la variable `MODEL` cambia el modelo (por defecto `claude-haiku-5-5`).

Notas: cada mensaje con IA tiene un costo bajo en tu cuenta de Anthropic. La función limita 30 mensajes por hora por visitante. Para un límite más firme, agregá una regla de **Rate Limiting** de Cloudflare sobre `/api/chat`.

# Volver a Empezar

Sitio estático (HTML + CSS + JavaScript) de Norberto Timoteo Holubicki. No necesita compilar nada.

## Publicar en Cloudflare

Funciona con las dos pantallas de Cloudflare. No hace falta compilar nada.

**Opción A: Workers y Pages → Crear → Importar un repositorio** (la que ofrece Cloudflare hoy)
1. Elegí este repositorio (`volver-a-empezar`) y la rama `main`.
2. Nombre del proyecto: `volver-a-empezar` (tiene que coincidir con el `name` de `wrangler.jsonc`).
3. Comando de compilación: vacío. Comando de implementación: `npx wrangler deploy`.
4. Guardar e implementar.

**Opción B: Pages → Conectar con Git**
1. Elegí este repositorio y la rama `main`.
2. Preset **None**, comando de compilación vacío, directorio de salida **/**.

## Video propio

Si subís `video/presentacion.mp4`, la página lo muestra en lugar del video de versículos.

## Asistente de apoyo con IA (opcional)

El asistente funciona solo en modo guiado (sin IA) hasta que actives la función `functions/api/chat.js`:

1. Creá una clave de API en la consola de Anthropic.
2. En Cloudflare: tu proyecto → **Configuración** → **Variables y secretos** → **Agregar**.
3. Nombre `ANTHROPIC_API_KEY`, tipo **Secreto**, pegá la clave. Guardá.
4. Volvé a desplegar (reintentá la última implementación). El asistente pasa solo a modo IA.

Opcional: la variable `MODEL` cambia el modelo (por defecto `claude-haiku-5-5`).

Notas: cada mensaje con IA tiene un costo bajo en tu cuenta de Anthropic. La función limita 30 mensajes por hora por visitante. Para un límite más firme, agregá una regla de **Rate Limiting** de Cloudflare sobre `/api/chat`.

# Portfolio de Douglas Guerrero

Portfolio personal desarrollado con Astro, Three.js y Tailwind CSS. Incluye una escena 3D adaptativa y un asistente conversacional que responde con información verificada del portfolio mediante la API de Groq.

## Páginas

- `/`: inicio, portada 3D, asistente y proyectos destacados.
- `/projects`: catálogo completo de proyectos.
- `/resume`: perfil, habilidades técnicas y certificados.

El selector del encabezado permite alternar entre los temas light y dark y conserva la preferencia en el navegador.

## Desarrollo local

```sh
npm install
```

Antes de iniciar el proyecto, copia `.env.example` como `.env` y añade una API key de Groq:

```sh
GROQ_API_KEY=tu_api_key
GROQ_MODEL=openai/gpt-oss-120b
AI_CLIENT_ID_SALT=un_secreto_largo_y_aleatorio
UPSTASH_REDIS_REST_URL=tu_url_rest_de_upstash
UPSTASH_REDIS_REST_TOKEN=tu_token_rest_de_upstash
```

El chat asigna 40 créditos diarios por visitante y reinicia el saldo a medianoche de Bogotá. En desarrollo puede usar un contador local; en producción las dos variables de Upstash son obligatorias para mantener una cuota compartida y atómica entre instancias.

Después inicia el servidor:

```sh
npm run dev
```

## Verificación

```sh
npm run check
npm run build
```

## Estructura principal

- `src/pages`: páginas del sitio.
- `src/components`: componentes visuales reutilizables.
- `src/data`: información verificada que utiliza el asistente.
- `src/assets`: imágenes procesadas y optimizadas por Astro.
- `public`: iconos, documentos y archivos estáticos.

## Ejecución en producción

El chat necesita un entorno Node.js porque la API key permanece en el servidor. Después de compilar, inicia la salida standalone con:

```sh
node dist/server/entry.mjs
```

# Reelize Portfolio

Landing page de Reelize, estudio de publicidad para redes sociales.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí http://localhost:3000.

## Build de producción

```bash
npm run build
npm start
```

## Estructura

- `app/` — rutas y layout
- `components/` — componentes de cada sección
- `components/ui/` — primitivos reutilizables (GlassCard, GradientOrb, etc.)
- `lib/data.ts` — toda la data estática (planes, FAQ, videos)

## Actualizar contenido

Para cambiar precios, videos o FAQ, editar `lib/data.ts`. Para cambiar copy de las secciones, editar el componente correspondiente en `components/`.

## Deploy

Deploy a Vercel (ver plan de implementación para pasos detallados).
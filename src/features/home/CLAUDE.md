# CLAUDE.md — feature: home

Contexto de la feature `home`, que contiene todos los componentes de la landing page principal.

## Qué hace esta feature

Renderiza la página de presentación personal: foto, nombre, rol, hobbies y enlaces sociales.

## Componentes

| Componente     | Descripción                                                      |
| -------------- | ---------------------------------------------------------------- |
| `Hero`         | Sección principal: foto de perfil, nombre animado, rol y hobbies |
| `AnimatedText` | Texto con animación letra a letra (usado en Hero)                |
| `SocialLinks`  | Lista de enlaces externos: LinkedIn, GitHub, email               |

## Tipos

- `SocialLink` — `{ label, href, external }` — usado en `SocialLinks`

## Traducciones (`en.json`)

```
home.hero.role          → Título profesional
home.hero.hobbyList     → Lista de hobbies (texto plano)
home.social.navLabel    → aria-label del nav de redes
home.social.linkedin    → Label del enlace LinkedIn
home.social.github      → Label del enlace GitHub
home.social.email       → Label del enlace email
```

## Dependencias externas

- `brand` de `@/shared/config/brand` → nombre, links (LinkedIn, GitHub, email)
- `next/image` para la foto de perfil (`/mikel_photo_NB.png` en `public/`)

## Exportaciones

Todo se exporta a través de `index.ts`. Nunca importar directamente desde los archivos internos.

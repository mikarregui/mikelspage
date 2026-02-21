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

## Strings (EN hardcodeados)

- `Hero`: `"Senior Product Manager"`, `"Athlete · Traveler · Simple things lover"`
- `SocialLinks`: `aria-label="Social links"`, labels: `"LinkedIn"` / `"GitHub"` / `"Email"`
- `metadata` (en `src/app/page.tsx`): viene de `brand.seo.title` / `brand.seo.description`

## Dependencias externas

- `brand` de `@/shared/config/brand` → nombre, links (LinkedIn, GitHub, email), seo
- `next/image` para la foto de perfil (`/mikel_photo_NB.png` en `public/`)

## Exportaciones

Todo se exporta a través de `index.ts`. Nunca importar directamente desde los archivos internos.

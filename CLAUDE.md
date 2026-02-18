# CLAUDE.md — mikelspage

Instrucciones y convenciones para trabajar en este proyecto con Claude Code.

## Flujo de trabajo con Git

**Regla principal: nunca trabajar directamente en `dev` ni en `master`.**

Antes de cualquier cambio de código:

1. Asegurarse de estar en `dev` y tenerla actualizada (`git pull`)
2. Crear una rama nueva desde `dev` con un nombre descriptivo:
   - `feat/nombre-feature` para nuevas funcionalidades
   - `fix/nombre-bug` para correcciones
   - `chore/descripcion` para tareas de mantenimiento
3. Aplicar los cambios en esa rama
4. Esperar confirmación del usuario de que ha probado los cambios en local antes de mergear o hacer PR

Solo hacer commit cuando el usuario lo pida explícitamente.

## Arquitectura: Vertical Slice Architecture (VSA)

El proyecto sigue VSA: cada feature es un módulo **independiente y autocontenido**.

```
src/features/<nombre>/
  components/       # Componentes propios de la feature
  types/            # Tipos e interfaces
  hooks/            # Hooks propios (si los hay)
  index.ts          # Barrel export — única puerta de entrada
  CLAUDE.md         # Contexto específico de la feature
```

**Reglas:**

- Las features no se importan entre sí directamente. Si algo se comparte, va a `src/shared/`
- Cada feature tiene su propio `CLAUDE.md` con contexto específico: qué hace, qué componentes tiene, qué traducciones usa, etc.
- Al crear una feature nueva, crear su `CLAUDE.md` desde el inicio

## Stack técnico

- **Framework**: Next.js 16 con App Router
- **UI**: React 19, Tailwind CSS v4, shadcn/ui (Radix UI), Lucide React
- **Lenguaje**: TypeScript estricto
- **i18n**: next-intl (por ahora solo inglés, `en.json`)
- **Tests**: Vitest + Testing Library, tests colocados junto al componente (`.test.tsx`)
- **Calidad de código**: ESLint + Prettier, Husky + lint-staged en cada commit

## Estructura general del proyecto

```
src/
  app/                        # App Router de Next.js
    [locale]/
      (landing)/
        copies/en.json        # Traducciones de la landing
        page.tsx              # Página principal
  features/                   # Features independientes (VSA)
  shared/
    components/               # Componentes reutilizables entre features
    config/                   # Configuración global (brand, etc.)
    lib/                      # Utilidades
  i18n/                       # Configuración de next-intl
```

## Convenciones de código

- Componentes en PascalCase, archivos en PascalCase (`Hero.tsx`)
- Exportaciones siempre a través del `index.ts` de cada feature, nunca import directo a un componente interno
- Traducciones siempre via `useTranslations` de next-intl, nunca strings hardcodeados
- No añadir complejidad innecesaria: sin abstracciones prematuras, sin manejo de errores para casos imposibles

## Comandos útiles

```bash
npm run dev          # Servidor de desarrollo (Turbopack)
npm run build        # Build de producción
npm run lint         # Lint
npm run type-check   # Verificación de tipos TypeScript
npm run test         # Tests en modo watch
npm run test:ci      # Tests en modo CI (una sola pasada)
```

## Ramas

- `master`: producción
- `dev`: rama de integración — base para todas las ramas de trabajo

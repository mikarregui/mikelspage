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

## Protocolo de commit para Claude Code

**La salida de los hooks de Husky no es visible en el Bash tool de Claude Code.** Ejecutar `git commit` directamente sin preparación previa provoca confusión: Claude no sabe si el commit fue exitoso, reintenta, re-stagea archivos ya commiteados y puede crear commits duplicados.

### Secuencia obligatoria antes de cada `git commit`

Ejecutar cada paso como una llamada Bash separada, verificar que pasa antes de continuar:

**Paso 1 — Type check**
```bash
npm run type-check
```
Si falla: corregir los errores de TypeScript antes de continuar.

**Paso 2 — Lint y formato**
```bash
npx lint-staged
```
`lint-staged` aplica auto-fixes (`eslint --fix`, `prettier --write`) sobre los archivos staged. Estas modificaciones quedan en disco pero **no se re-stagean automáticamente**.

**Paso 3 — Re-stagear auto-fixes si los hubo**
```bash
git diff --name-only
```
Si la salida lista archivos (lint-staged los modificó), re-stagear:
```bash
git add <archivos listados>
```
Si no hay salida, continuar al paso 4.

**Paso 4 — Tests**
```bash
npm run test:ci
```
Si falla: corregir los tests antes de continuar.

**Paso 5 — Commit**
```bash
git commit -m "..."
```
En este punto Husky re-ejecuta los tres checks; pasan al instante porque el código ya está limpio. **Nunca usar `--no-verify`.**

**Paso 6 — Verificar estado**
```bash
git log --oneline -1
git status
```
Confirmar que el commit existe y el working tree está limpio.

### Si el paso 5 falla igualmente

No hacer un segundo intento de commit. Leer el error, corregir el problema, y volver al paso que corresponda.

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

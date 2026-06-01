# Contributing to NexUI

Thank you for your interest in contributing! This guide covers the development workflow.

## Prerequisites

- Node.js ≥ 18
- pnpm ≥ 8 (`npm install -g pnpm`)

## Setup

```bash
git clone https://github.com/your-org/nexui.git
cd nexui
pnpm install
pnpm build
```

## Development workflow

```bash
# Start all packages in watch mode
pnpm dev

# Run tests
pnpm test

# Lint
pnpm lint

# Type check
pnpm typecheck
```

## Adding a new component

1. Create `packages/core/src/components/MyComponent/`
2. Add `MyComponent.tsx`, `MyComponent.module.css`, `index.ts`
3. Export from `packages/core/src/index.ts`
4. Add a story in `packages/core/src/components/MyComponent/MyComponent.stories.tsx`
5. Write tests in `MyComponent.test.tsx`

## Commit conventions

We use [Conventional Commits](https://www.conventionalcommits.org):

```
feat(button): add `isLoading` prop
fix(input): prevent layout shift on error state
docs(readme): update installation instructions
```

## Pull requests

- Branch off `dev`, target `dev`
- Include a changeset: `pnpm changeset`
- All CI checks must pass before merge

## Code of Conduct

Be kind. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

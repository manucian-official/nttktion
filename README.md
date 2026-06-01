# NexUI

> Cross-platform UI library for Web, React Native & Desktop — one API, every surface.

[![CI](https://github.com/your-org/nexui/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/nexui/actions)
[![npm version](https://img.shields.io/npm/v/@nexui/core)](https://www.npmjs.com/package/@nexui/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| `@nexui/core` | React component library for Web | ![npm](https://img.shields.io/npm/v/@nexui/core) |
| `@nexui/themes` | Design tokens, `createTheme`, `NexProvider` | ![npm](https://img.shields.io/npm/v/@nexui/themes) |
| `@nexui/native` | React Native adapters | ![npm](https://img.shields.io/npm/v/@nexui/native) |

---

## Quick start

```bash
pnpm add @nexui/core @nexui/themes
```

```tsx
import { NexProvider } from '@nexui/themes'
import { Button, Card, Badge } from '@nexui/core'

export default function App() {
  return (
    <NexProvider theme="dark">
      <Card radius="lg">
        <Badge color="primary">New</Badge>
        <Button variant="solid" color="primary">
          Get started
        </Button>
      </Card>
    </NexProvider>
  )
}
```

## Custom theme

```tsx
import { createTheme, NexProvider } from '@nexui/themes'

const myTheme = createTheme({
  colors: {
    primary:   '#7c6dfa',
    secondary: '#3ecfb2',
  },
  radius: {
    lg: '16px',
  },
  fonts: {
    sans: '"Outfit", sans-serif',
  },
})

<NexProvider tokens={myTheme}>...</NexProvider>
```

## React Native

```bash
pnpm add @nexui/native @nexui/themes
```

```tsx
import { Button } from '@nexui/native'
import { NexProvider } from '@nexui/themes'

export default function Screen() {
  return (
    <NexProvider>
      <Button label="Tap me" variant="solid" onPress={() => {}} />
    </NexProvider>
  )
}
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run all tests
pnpm test

# Start dev watch mode
pnpm dev

# Lint & typecheck
pnpm lint && pnpm typecheck
```

## Project structure

```
nexui/
├── packages/
│   ├── core/          # @nexui/core — React web components
│   │   └── src/
│   │       ├── components/
│   │       │   ├── Button/
│   │       │   ├── Card/
│   │       │   ├── Badge/
│   │       │   ├── Input/
│   │       │   ├── Toggle/
│   │       │   └── Modal/
│   │       └── utils/
│   ├── themes/        # @nexui/themes — tokens + NexProvider
│   └── native/        # @nexui/native — React Native adapters
├── .github/
│   └── workflows/ci.yml
├── turbo.json
├── tsconfig.json
├── .eslintrc.cjs
└── package.json
```

## License

MIT © NexUI Contributors

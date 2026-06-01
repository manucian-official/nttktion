# Changelog

All notable changes to NexUI packages are documented here.
This project follows [Semantic Versioning](https://semver.org).

---

## [2.4.0] — 2025-05-31

### Added
- `@nexui/native` package — React Native adapters for Button, Card, Badge
- `Toggle` component with controlled/uncontrolled modes and `onValueChange`
- `Input` component with `startContent`, `endContent`, `errorMessage`, `description`
- `createTheme()` now accepts `transitions` and `shadows` token groups
- `NexProvider` injects CSS custom properties on mount for zero-config usage
- Full TypeScript strict mode across all packages

### Changed
- `Button`: replaced `disabled` prop with `isDisabled` for API consistency
- `Card`: new `glass` variant; `variant="elevated"` is now default
- `Badge`: added `isDot` and `isAnimated` props for status indicators
- Monorepo migrated from Yarn Workspaces → pnpm + Turborepo

### Fixed
- `Button` spinner no longer shifts layout width
- `Card` with `isPressable` now correctly sets `role="button"` and `tabIndex`
- Theme CSS variables now update on hot-reload in development

---

## [2.3.1] — 2025-04-14

### Fixed
- Resolved peer dependency warning with React 18.3

---

## [2.3.0] — 2025-03-20

### Added
- `Modal` component with focus trap and scroll lock
- `lightTheme` export from `@nexui/themes`

### Changed
- `Input` variant `underlined` now animates the border on focus

---

## [2.0.0] — 2024-11-01

### Breaking
- Renamed package from `@prism-ui/core` → `@nexui/core`
- `ThemeProvider` renamed to `NexProvider`
- `theme` prop now accepts `'dark' | 'light' | 'system'`

### Added
- Full Turborepo monorepo setup
- Storybook 7 integration
- Automated releases via Changesets + GitHub Actions

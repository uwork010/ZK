# Tests

## Stack and commands

The project uses Vitest 4 with the `vmForks` pool, jsdom, V8 coverage, and
Testing Library. Tests run serially to keep module mocks deterministic.

```bash
npm test               # One-shot test run
npm run test:watch     # Watch mode
npm run test:coverage  # Test run with V8 coverage
```

## Coverage

Test suites cover contact validation and email handling, content data, SEO URL
generation, navigation, shared layout, forms, and selected page components.
Coverage output is generated under `coverage/` and is not committed.

The component tests use jsdom and mock browser- or animation-specific APIs where
needed. They do not replace browser testing: real WebGL rendering, responsive
visual checks, keyboard interaction across viewports, and production email
delivery still require separate verification.

## Test layout

```text
tests/
├── api/                 # Contact route behavior
├── components/
│   ├── company/         # Agency, service, solution, and industry views
│   ├── insights/        # Article and insights views
│   ├── layout/          # Navigation and footer
│   ├── sections/        # Home sections and project inquiry form
│   ├── three/           # Mocked Three.js component behavior
│   └── ui/              # Shared UI components
├── hooks/               # Custom hooks
└── lib/                 # Content, validation, email, SEO, and utilities
```

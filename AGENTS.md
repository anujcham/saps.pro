<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Development Instructions

## Architecture and Folder Structure

- Use idiomatic React and Next.js features. Prefer Server Components by default and add `"use client"` only when a component needs browser APIs, state, effects, event handlers, or animation runtime access.
- Keep each page's components together in that page's folder. A page-specific component should not be placed in a global folder merely for convenience.
- Put genuinely shared, reusable components in `common/` (for example, shared UI primitives, site chrome, and utilities). Keep feature-specific components out of `common/`.
- Keep `header` and `footer` in the root layout so they are rendered consistently across the application. Page content belongs in route segments and page-specific components.
- Prefer a clear feature-oriented structure such as the following:

```text
app/
	layout.tsx
	common/
		components/
		lib/
	(page-route)/
		page.tsx
		components/
		lib/
```

- Use path aliases and small focused modules when they improve readability. Avoid catch-all folders and overly deep nesting.

## Component and Rendering Practices

- Build reusable components with explicit, minimal prop contracts. Do not duplicate markup when a focused component or data-driven rendering removes meaningful repetition.
- Keep state as close as possible to the component that owns it. Lift state only when multiple consumers genuinely need it.
- Avoid unnecessary renders: do not add `useMemo`, `useCallback`, or `React.memo` automatically; use them only when profiling or a clear prop/reference stability issue justifies them.
- Avoid unnecessary effects. Derive values during render where possible, and use event handlers for user actions instead of effects.
- Use stable keys for lists, avoid index keys for reorderable or dynamic collections, and preserve accessibility semantics.
- Prefer Next.js primitives such as `next/image`, `next/link`, metadata, route handlers, and server-side data fetching where appropriate.

## Styling

- Use Tailwind CSS for styling and follow the existing Tailwind configuration. Avoid introducing separate CSS or inline style objects unless a dynamic value or animation genuinely requires them.
- Keep responsive behavior, focus states, reduced-motion behavior, and accessible contrast in mind for every UI component.

## Animation and 3D

- Use GSAP, Three.js, or another established animation library for meaningful 3D or complex motion work. Select the smallest appropriate library for the interaction and add the dependency when the feature requires it.
- Keep animation code in client components, initialize it in lifecycle-safe effects, and clean up contexts, timelines, listeners, and render loops on unmount.
- Respect `prefers-reduced-motion`, avoid animation that blocks core workflows, and keep animation logic separate from presentational markup where practical.

## Validation

- Before considering a change complete, run the narrowest relevant check and then the project lint/build checks when practical (`npm run lint`, `npm run build`).
- Keep changes focused, preserve existing conventions, and do not modify generated files or unrelated code.

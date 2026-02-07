---
name: create-component
description: Create Component
disable-model-invocation: true
---

# Create Component: $ARGUMENTS

You are creating a new compose-ui component. Follow the guidelines in @component.mdc and complete all steps below.

## Pre-requisites

Before creating the component:

1. **Review existing components** in `packages/compose-ui/src/components/` for patterns and conventions
2. **Review the Badge component** (`packages/compose-ui/src/components/badge.tsx`) as a reference for custom component structure

## Files to Create

### 1. Component File

**Location**: `packages/compose-ui/src/components/$ARGUMENTS.tsx`

Structure:

- Add `'use client'` directive at the top (if using React hooks or client features)
- Import `cva` from `class-variance-authority` if you need variants
- Import `cn` utility: `import { cn } from '../lib/utils'`
- **NEVER import icon libraries** (like `lucide-react`) in component files - users may use different icon libraries. Icons should only be used in documentation examples.
- Create component variants using `cva` if needed
- Create each sub-component with proper typing, styling, and displayName
- Export all components and types at the bottom

Use this pattern for variants:

```tsx
const componentVariants = cva(
  [
    // Base classes
  ],
  {
    variants: {
      variant: {
        default: '',
        // ... other variants
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)
```

Use this pattern for components:

```tsx
type {ComponentName}Props = React.ComponentProps<'element'> & {
  /** Prop description */
  variant?: {ComponentName}Variant
  size?: {ComponentName}Size
}

const {ComponentName} = ({ className, variant, size, ...props }: {ComponentName}Props) => {
  return (
    <element
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    />
  )
}

{ComponentName}.displayName = '{ComponentName}'
```

### 2. Hooks Architecture

Some components require companion hooks for state management (e.g., `useTable`, `useCombobox`). Follow this pattern for hooks:

### Component-Specific Hooks

Hooks that are tightly coupled to a component live alongside that component:

```
packages/compose-ui/src/components/
├── table/
│   ├── index.ts              # Exports primitives + hook
│   ├── primitives.tsx        # Table, TableRow, TableHead, etc.
│   ├── use-table.ts          # Component-specific hook
│   ├── table-pagination.tsx  # Related sub-components
│   ├── table-search.tsx
│   ├── types.ts              # Shared types
│   └── utils.ts              # Internal utilities
```

**Export structure for `table/index.ts`:**

```tsx
export * from './primitives'
export { useTable } from './use-table'
export type * from './types'
```

**Subpath exports in `package.json`:**

```json
"./table": {
  "import": "./dist/table/index.js",
  "types": "./dist/table/index.d.ts"
},
"./table/use-table": {
  "import": "./dist/table/use-table.js",
  "types": "./dist/table/use-table.d.ts"
}
```

**Consumer import patterns:**

```tsx
// All table exports (primitives + hook)
import { Table, TableRow, useTable } from '@lglab/compose-ui/table'

// Hook only
import { useTable } from '@lglab/compose-ui/table/use-table'

// Primitives only (if needed)
import { Table, TableRow } from '@lglab/compose-ui/table'
```

### Generic Hooks

Hooks that are reusable across multiple components live in a top-level `/hooks` folder:

```
packages/compose-ui/src/
├── hooks/
│   ├── index.ts              # Barrel export
│   ├── use-disclosure.ts     # Open/close state management
│   ├── use-controllable.ts   # Controlled/uncontrolled pattern
│   └── use-media-query.ts    # Responsive breakpoints
```

**Subpath exports in `package.json`:**

```json
"./hooks": {
  "import": "./dist/hooks/index.js",
  "types": "./dist/hooks/index.d.ts"
},
"./hooks/use-disclosure": {
  "import": "./dist/hooks/use-disclosure.js",
  "types": "./dist/hooks/use-disclosure.d.ts"
}
```

**Consumer import patterns:**

```tsx
// All generic hooks
import { useDisclosure, useControllable } from '@lglab/compose-ui/hooks'

// Specific hook
import { useDisclosure } from '@lglab/compose-ui/hooks/use-disclosure'
```

### Hook Naming Convention

- File names: `use-kebab-case.ts`
- Export names: `useCamelCase`
- Types: `Use{HookName}Options`, `Use{HookName}Return`

### When to Create a Hook

Create a component-specific hook when:

- Component has complex state logic (sorting, filtering, pagination)
- State needs to be shared across multiple sub-components
- Logic would otherwise require "prop drilling"

Create a generic hook when:

- Logic is reusable across unrelated components
- Pattern is common (disclosure, controllable, media queries)

### Hook File Structure

```tsx
// use-table.ts
import { useCallback, useMemo, useState } from 'react'

import type { UseTableOptions, UseTableReturn } from './types'

export function useTable<T>(data: T[], options: UseTableOptions<T>): UseTableReturn<T> {
  // Implementation
}
```

### Adding Hook to tsdown Config

For component-specific hooks, add the component folder to the `components` array:

```ts
// tsdown.config.ts
const components = [
  // ... existing components
  'table', // This will include table/index.ts, table/use-table.ts, etc.
]
```

For generic hooks, ensure the hooks folder is included:

```ts
const hooks = [
  'use-disclosure',
  'use-controllable',
  // ... other generic hooks
]
```

### 3. Test File

**Location**: `packages/compose-ui/src/components/$ARGUMENTS.test.tsx`

- Test composed components as library users would use them
- Get elements by accessible roles
- Use userEvent for interactions
- No comments in test code

### 4. Export from Index

**Location**: `packages/compose-ui/src/index.ts`

Add exports for all component parts and their types.

### 5. Documentation Page

**Location**: `apps/docs/app/(docs)/components/$ARGUMENTS/page.mdx`

Create the MDX page with examples. **IMPORTANT**: Export metadata for SEO:

```mdx
import { ApiSection, ApiTable, ComponentPage, ExampleLoader } from '@/components/mdx'

import DefaultExample from './examples/default'

export const metadata = {
  title: '{Component Name}',
  description: 'Brief description of the component.',
}

<ComponentPage
  title={metadata.title}
  description={metadata.description}
  component="$ARGUMENTS"
>

<ExampleLoader
  title='Default'
  filePath='app/(docs)/components/$ARGUMENTS/examples/default.tsx'
>
  <DefaultExample />
</ExampleLoader>

## API Reference

<ApiSection
  title='{ComponentName}'
  description='Brief description of the component.'
>
  <ApiTable
    data={[
      {
        name: 'variant',
        type: "'default' | 'secondary'",
        default: "'default'",
        description: 'Visual style variant',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: 'Size of the component',
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes',
      },
      {
        name: '...props',
        type: 'React.ComponentProps<"element">',
        description: 'Standard element props',
      },
    ]}
  />
</ApiSection>

</ComponentPage>
```

**Note**: Add one `<ApiSection>` per sub-component with its own `<ApiTable>`. For hooks, use `showRequired` on the `<ApiTable>` and add `required: true` to required props. See the Group or Pagination docs for reference.

### 6. Example Files

**Location**: `apps/docs/app/(docs)/components/$ARGUMENTS/examples/`

Create at least a `default.tsx` example. Use `lucide-react` icons in examples (not inline SVGs).

**IMPORTANT**: For form input components (Input, Textarea, Select, etc.), always use the Field component (`FieldRoot`, `FieldLabel`, `FieldDescription`, `FieldError`) to build examples instead of raw HTML labels. This ensures proper accessibility and consistent styling.

**IMPORTANT**: Use subpath imports for better tree-shaking. Import components from their specific subpath:

```tsx
import { ComponentPart, ComponentRoot } from '@lglab/compose-ui/$ARGUMENTS'
import { SomeIcon } from 'lucide-react'

export default function DefaultExample() {
  return (
    <ComponentRoot>
      <SomeIcon />
      <ComponentPart />
    </ComponentRoot>
  )
}
```

If importing from multiple components, use separate import statements:

```tsx
import { ComponentPart, ComponentRoot } from '@lglab/compose-ui/$ARGUMENTS'
import { Button } from '@lglab/compose-ui/button'
import { SomeIcon } from 'lucide-react'
```

Note: The barrel file import (`@lglab/compose-ui`) still works, but subpath imports are recommended for optimal tree-shaking.

### 7. Add Subpath Export to package.json

**Location**: `packages/compose-ui/package.json`

Add the component to the `exports` field in alphabetical order. This enables subpath imports (e.g., `@lglab/compose-ui/$ARGUMENTS`):

```json
"./$ARGUMENTS": {
  "import": "./dist/$ARGUMENTS.js",
  "types": "./dist/$ARGUMENTS.d.ts"
},
```

### 8. Add to tsdown Config

**Location**: `packages/compose-ui/tsdown.config.ts`

Add the component to the `components` array in alphabetical order. This is needed for the build to generate the subpath entry point:

```ts
const components = [
  // ... existing components
  '$ARGUMENTS',
  // ... rest of components
]
```

### 9. Add to Navigation

**Location**: `apps/docs/lib/navigation.ts`

Add the component to the Components section in alphabetical order:

```ts
{ name: '{Component Name}', href: '/components/$ARGUMENTS' },
```

## Styling Guidelines

- **Colors**: Use design tokens instead of hardcoded colors:
  - `bg-background`, `bg-muted`, `bg-primary`
  - `text-foreground`, `text-muted-foreground`, `text-primary`
  - `border-border`
- **Variants**: Use `cva` (class-variance-authority) for component variants
- **States**: Use data attributes for states when needed: `data-[selected]:`, `data-[disabled]:`, `data-[checked]:`
- **Focus/Disabled**: Do not repeat focus ring and disabled styles - these are globally applied in `styles/default.css`:
  - `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
  - `data-disabled:pointer-events-none data-disabled:opacity-70`
- Review similar components (like Badge) for consistent styling patterns

## Checklist

- [ ] Component file with all parts
- [ ] Test file with comprehensive tests
- [ ] Exports added to index.ts
- [ ] Subpath export added to package.json exports field
- [ ] Component added to tsdown.config.ts components array
- [ ] Documentation page created
- [ ] At least one example created
- [ ] API Reference section added (for components with variants/custom props)
- [ ] Navigation updated
- [ ] Run tests to verify: `pnpm test`
- [ ] No lint errors in any file

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

### 2. Test File

**Location**: `packages/compose-ui/src/components/$ARGUMENTS.test.tsx`

- Test composed components as library users would use them
- Get elements by accessible roles
- Use userEvent for interactions
- No comments in test code

### 3. Export from Index

**Location**: `packages/compose-ui/src/index.ts`

Add exports for all component parts and their types.

### 4. Documentation Page

**Location**: `apps/docs/app/(docs)/components/$ARGUMENTS/page.mdx`

Create the MDX page with examples:

```mdx
import { ComponentPage, ExampleLoader } from '@/components/mdx'

import DefaultExample from './examples/default'

<ComponentPage
  title="{Component Name}"
  description="Brief description of the component."
  component="$ARGUMENTS"
>

<ExampleLoader
  title='Default'
  filePath='app/(docs)/components/$ARGUMENTS/examples/default.tsx'
>
  <DefaultExample />
</ExampleLoader>

</ComponentPage>
```

### 5. Example Files

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

### 6. Add Subpath Export to package.json

**Location**: `packages/compose-ui/package.json`

Add the component to the `exports` field in alphabetical order. This enables subpath imports (e.g., `@lglab/compose-ui/$ARGUMENTS`):

```json
"./$ARGUMENTS": {
  "import": "./dist/$ARGUMENTS.js",
  "types": "./dist/$ARGUMENTS.d.ts"
},
```

### 7. Add to tsdown Config

**Location**: `packages/compose-ui/tsdown.config.ts`

Add the component to the `components` array in alphabetical order. This is needed for the build to generate the subpath entry point:

```ts
const components = [
  // ... existing components
  '$ARGUMENTS',
  // ... rest of components
]
```

### 8. Add to Navigation

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
- [ ] Navigation updated
- [ ] Run tests to verify: `pnpm test`
- [ ] No lint errors in any file

# Create Component: $ARGUMENTS

You are creating a new compose-ui component. Follow the guidelines in @component.mdc and complete all steps below.

## Pre-requisites

Before creating the component:

1. **Read the Base UI markdown documentation** by fetching `https://base-ui.com/react/components/$ARGUMENTS.md`
   - **IMPORTANT**: Read/fetch the `.md` file directly - do NOT navigate the HTML page or take screenshots
   - The markdown contains the full component API, all sub-components, and example code in a readable format
   - **CRITICAL**: Copy the exact animation/transform styles from Base UI's examples, especially:
     - `origin-[var(--transform-origin)]` for proper transform origin
     - `transition-[transform,scale,opacity]` or similar specific transitions (not `transition-all`)
     - `data-[starting-style]` and `data-[ending-style]` classes for animations
     - Scale and opacity values (e.g., `scale-90`, `opacity-0`)
   - Adapt colors to use design tokens (`bg-background`, `text-foreground`, `border-border`) instead of Base UI's color values
2. **Review existing components** in `packages/compose-ui/src/components/` for patterns and conventions

## Files to Create

### 1. Component File

**Location**: `packages/compose-ui/src/components/$ARGUMENTS.tsx`

Structure:

- Add `'use client'` directive at the top (if using React hooks or client features)
- Import from Base UI: `import { Component } from '@base-ui/react/$ARGUMENTS'`
- Import `cn` utility: `import { cn } from '../lib/utils'`
- Create each sub-component with proper typing, styling, and displayName
- Export all components and types at the bottom

Use this pattern for each part:

```tsx
type {ComponentName}{Part}Props = React.ComponentProps<typeof Base{ComponentName}.{Part}>

const {ComponentName}{Part} = ({ className, ...props }: {ComponentName}{Part}Props) => {
  return (
    <Base{ComponentName}.{Part}
      className={cn(
        // Tailwind classes using design tokens
        className,
      )}
      {...props}
    />
  )
}

{ComponentName}{Part}.displayName = '{ComponentName}{Part}'
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
**Examples**: create all examples from `https://base-ui.com/react/components/$ARGUMENTS.md`

Create the MDX page with examples:

```mdx
import { ComponentPage, ExampleLoader } from '@/components/mdx'

import DefaultExample from './examples/default'

<ComponentPage
  title="{Component Name}"
  description="Brief description of the component."
  component="$ARGUMENTS"
  baseUiComponent="$ARGUMENTS"
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

Create at least a `default.tsx` example. Use `lucide-react` icons in examples (not inline SVGs):

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

### 6. Add to Navigation

**Location**: `apps/docs/lib/navigation.ts`

Add the component to the Components section in alphabetical order:

```ts
{ name: '{Component Name}', href: '/components/$ARGUMENTS' },
```

## Styling Guidelines

- **Animation/Transform Styles**: Copy Base UI's exact animation and transform styles, then fix Tailwind lint errors:
  - Transform origin: Use `origin-(--transform-origin)` (Tailwind lint prefers this over `origin-[var(--transform-origin)]`)
  - Transitions: Use specific properties like `transition-[transform,scale,opacity]` instead of `transition-all`
  - Animation states: Use `data-starting-style:` and `data-ending-style:` (Tailwind lint prefers this over `data-[starting-style]:` and `data-[ending-style]:`)
  - Scale/opacity values: Match Base UI's values (e.g., `scale-90`, `opacity-0`)
- **Colors**: Adapt Base UI's colors to use design tokens:
  - `bg-[canvas]` → `bg-background`
  - `text-gray-900` → `text-foreground`
  - `outline-gray-200` → `outline-border`
  - `shadow-gray-200` → Keep as-is or adapt to design tokens if available
- **Data Attributes**: Use Base UI data attributes for states: `data-[selected]:`, `data-[disabled]:`, `data-[checked]:`, `data-highlighted:`
- Review similar components for consistent styling patterns, but prioritize Base UI's animation/transform styles

## Checklist

- [ ] Component file with all parts
- [ ] Test file with comprehensive tests
- [ ] Exports added to index.ts
- [ ] Documentation page created
- [ ] At least one example created
- [ ] Navigation updated
- [ ] Fix all Tailwind lint errors (use cleaner syntax: `data-ending-style:` instead of `data-[ending-style]:`, `origin-(--var)` instead of `origin-[var(--var)]`)
- [ ] Run tests to verify: `pnpm test`

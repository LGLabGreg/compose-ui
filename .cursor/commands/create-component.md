# Create Component: $ARGUMENTS

You are creating a new compose-ui component. Follow the guidelines in @component.mdc and complete all steps below.

## Pre-requisites

Before creating the component:

1. **Check Base UI documentation** at `https://base-ui.com/react/components/$ARGUMENTS.md` to understand the available parts and API
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

Create at least a `default.tsx` example:

```tsx
import { ComponentPart, ComponentRoot } from '@lglab/compose-ui'

export default function DefaultExample() {
  return (
    <ComponentRoot>
      <ComponentPart />
    </ComponentRoot>
  )
}
```

### 6. Add to Navigation

**Location**: `apps/docs/lib/navigation.ts`

Add the component to the Components section in alphabetical order:

```ts
{ name: '{Component Name}', href: '/components/$ARGUMENTS' },
```

## Styling Guidelines

- Use Tailwind classes with design tokens: `bg-muted`, `text-foreground`, `border-border`
- Use Base UI data attributes for states: `data-[selected]:`, `data-[disabled]:`, `data-[checked]:`
- Review similar components for consistent styling patterns

## Checklist

- [ ] Component file with all parts
- [ ] Test file with comprehensive tests
- [ ] Exports added to index.ts
- [ ] Documentation page created
- [ ] At least one example created
- [ ] Navigation updated
- [ ] Run tests to verify: `pnpm test`

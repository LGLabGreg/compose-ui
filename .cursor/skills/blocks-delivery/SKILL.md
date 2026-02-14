---
name: blocks-delivery
description: Drive sequential implementation of docs blocks from .blocks/plan.md with strict progress tracking and design quality gates. Use when the user asks to build dashboard blocks, implement the next block, iterate through blocks, or enforce block-by-block workflow and status updates.
---

# Blocks Delivery

## Purpose

Use this skill to implement blocks one-by-one while preserving:

- Design quality (inspiration-led, not copied)
- Delivery discipline (single active block)
- Transparent tracking (board + completion log)

## Required Inputs

- Backlog source: `.blocks/plan.md`
- Tracker: `.blocks/board.md`
- Completion history: `.blocks/done-log.md`
- Design standards: `.blocks/design-rules.md`
- Per-block checklist/template: `.blocks/block-template.md`

## Non-Negotiable Rules

1. Only one block can be `IN_PROGRESS` at any time.
2. A block cannot move to `DONE` unless it has:
   - inspiration references,
   - implementation file paths,
   - quality checklist completed (including semantics/a11y checks).
3. Do not skip phase order unless the user explicitly reprioritizes.
4. Use design inspiration as direction, never direct copying.
5. Update tracking files in the same turn as implementation.
6. If a previously `DONE` block is revised, append a maintenance entry in `.blocks/done-log.md`.
7. **Always prefer Compose UI components over raw HTML.** Blocks are a showcase of the library — every visual element that has a matching component (Progress, Meter, Badge, Separator, etc.) must use it. Never build custom divs for progress bars, meters, badges, or any pattern already covered by the component library. When unsure, check `packages/compose-ui/src/components/` for available primitives before writing raw markup.

## Status Lifecycle

Use these statuses in `.blocks/board.md`:

- `TODO`
- `IN_PROGRESS`
- `DONE`
- `BLOCKED`

Transition policy:

- `TODO -> IN_PROGRESS`: when the block is selected for implementation.
- `IN_PROGRESS -> DONE`: after implementation + quality checks + done-log entry.
- `IN_PROGRESS -> BLOCKED`: if external input is required.
- `BLOCKED -> TODO` or `BLOCKED -> IN_PROGRESS`: when unblocked.

## Execution Workflow (Per Block)

1. Select next `TODO` block based on phase and section order.
2. Gather inspiration:
   - Prefer Dribbble first.
   - Add fallback sources if needed (Behance, Mobbin, Pinterest).
3. Create a short design brief:
   - layout pattern,
   - hierarchy and density,
   - color emphasis strategy,
   - one "wow detail".
4. Implement docs block files and examples.
5. Run quality pass using `.blocks/design-rules.md`.
6. Update `.blocks/board.md` entry:
   - status,
   - references,
   - files,
   - QA checklist.
7. Append completed record to `.blocks/done-log.md`.
8. Pick the next block.

## Execution Workflow (Maintenance Pass on Existing Blocks)

Use this workflow when the request is to refine already shipped blocks (for example, semantics, accessibility, responsiveness, or consistency updates):

1. Keep board status unchanged unless scope expands into a net-new block.
2. Implement fixes directly in existing block files.
3. Re-run quality pass with emphasis on semantics/a11y and regression checks.
4. Append a dated maintenance entry to `.blocks/done-log.md` capturing:
   - affected block(s),
   - files updated,
   - checks performed,
   - reusable pattern learned.

## Layout Variety Rule

Blocks within the same section must use **structurally different layouts**. Never repeat the same card anatomy across blocks.

Before implementing a block, check `.blocks/plan.md` for the assigned layout pattern. If no pattern is assigned yet, pick one that differs from all other blocks in the section. Variety includes:

- **Card proportions**: full-width, half-width, compact/square, tall-narrow.
- **Content arrangement**: top-to-bottom, side-by-side split, chart-as-background overlay, embedded metric in chart, tabbed multi-view, horizontal progress list, etc.
- **Chart role**: hero (chart dominates), decorative (sparkline/background), balanced (chart + stats equal weight).

## Design Quality Gates

Before marking a block as `DONE`, verify:

### Visual
- **Every visual element uses a Compose UI component when one exists** (blocks showcase the library — no raw divs for bars, badges, meters, separators, etc.).
- Clear visual hierarchy and readable metric emphasis.
- Spacing rhythm is consistent and intentional.
- Contrast-safe text and semantic color usage.
- Responsive behavior included.
- Realistic content/data states included.
- At least one polish detail beyond baseline layout.
- **Layout is structurally distinct** from other blocks in the same section.

### Semantics & Accessibility (mandatory — check every item)
- `<section>` wrapper has `aria-labelledby` pointing to the `CardTitle` id.
- `<data>` elements include the `value` attribute with the raw numeric value (e.g., `<data value={88600}>88.6K</data>`).
- Decorative icons, color dots, and accent bars use `aria-hidden="true"`.
- Trend badges have `aria-label` with full context (e.g., `aria-label="Traffic increased 23.1% year over year"`).
- Change/trend text spans have `aria-label` (e.g., `aria-label="Change: +23.1%"`) — a bare "+23.1%" is ambiguous.
- Non-chart content panels (side panels, breakdown lists) use `role="group"` with `aria-label` for screen-reader discoverability.
- Charts use `accessibilityLayer` prop (Recharts) or are `aria-hidden` with a text equivalent nearby.
- Color is never the only means of conveying information — always pair with `+`/`-` prefix, arrow icon, or text label.

## Cadence

- Work one block at a time.
- Every completion must produce:
  - board status update,
  - done-log entry,
  - short retrospective note.
- After every 5 completed blocks:
  - run a consistency pass,
  - refactor repeated visual patterns if needed.

## Output Contract For Each Block

When reporting completion, include:

1. Block name and section
2. Inspiration links used
3. Files created/updated
4. Quality checks completed
5. Accessibility/semantics checks completed
6. Reusable design pattern learned

## Common Mistakes to Avoid

These are real mistakes caught during implementation. Check for them before marking any block `DONE`:

1. **Hand-rolling bars/indicators instead of using Compose UI Meter or Progress.** Share bars, capacity bars, and similar visualizations must use `MeterRoot`/`MeterTrack`/`MeterIndicator` (value-in-range) or `ProgressRoot`/`ProgressTrack`/`ProgressIndicator` (goal progress). Never use raw `<div>` with `style={{ width }}`.

2. **`<data>` without `value` attribute.** Every `<data>` element must have `value` with the machine-readable number: `<data value={78600}>$78.6K</data>`. The display text is the formatted string; `value` is the raw number.

3. **Bare `<section>` wrapper without accessible name.** Always add `aria-labelledby` pointing to the card title: `<section aria-labelledby="my-card-title">` + `<CardTitle id="my-card-title">`.

4. **Repeating the same layout pattern across blocks in a section.** Each block must be structurally distinct. Check `.blocks/plan.md` for assigned layout patterns before implementing.

5. **Change/trend text without context.** A standalone "+23.1%" is ambiguous to screen readers. Add `aria-label="Change: +23.1%"` or wrap in a descriptive structure.

6. **Side panels / breakdown sections without landmarks.** Non-chart panels within a card need `role="group" aria-label="..."` so screen reader users can discover them.

## Established Code Patterns

Reference these when implementing new blocks:

### Section + Card wrapper
```tsx
<section aria-labelledby='block-id-title'>
  <CardRoot>
    <CardHeader>
      <CardTitle id='block-id-title'>Title</CardTitle>
    </CardHeader>
    ...
  </CardRoot>
</section>
```

### Metric with `<data>`
```tsx
<data value={88600} className='text-lg font-semibold tracking-tight'>88.6K</data>
```

### Trend badge
```tsx
<Badge variant='success' appearance='light' size='sm' shape='pill'
  aria-label='Revenue increased 23.1% year over year'>
  <ArrowUp className='size-3' aria-hidden='true' />
  +23.1% YoY
</Badge>
```

### Change span
```tsx
<span className='text-xs font-medium text-success' aria-label='Change: +23.1%'>+23.1%</span>
```

### Category share meter (not raw divs)
```tsx
<MeterRoot value={47} aria-label='Electronics revenue share' animated>
  <MeterTrack className='h-1.5 bg-violet-500/15'>
    <MeterIndicator className='bg-violet-500' />
  </MeterTrack>
</MeterRoot>
```

### Grouped panel landmark
```tsx
<div role='group' aria-label='Category breakdown'>
  ...
</div>
```

### Chart with accessibility
```tsx
<BarChart data={data} accessibilityLayer>
  ...
</BarChart>
```

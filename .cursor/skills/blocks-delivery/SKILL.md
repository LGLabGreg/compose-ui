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
   - quality checklist completed.
3. Do not skip phase order unless the user explicitly reprioritizes.
4. Use design inspiration as direction, never direct copying.
5. Update tracking files in the same turn as implementation.

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

## Design Quality Gates

Before marking a block as `DONE`, verify:

- Clear visual hierarchy and readable metric emphasis.
- Spacing rhythm is consistent and intentional.
- Contrast-safe text and semantic color usage.
- Responsive behavior included.
- Realistic content/data states included.
- At least one polish detail beyond baseline layout.

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
5. Reusable design pattern learned

import type { SortDirection } from './types'

export function compareValues(a: unknown, b: unknown, direction: SortDirection): number {
  // Nulls always sort to end regardless of direction
  if (a == null && b == null) return 0
  if (a == null) return 1
  if (b == null) return -1

  const multiplier = direction === 'asc' ? 1 : -1

  // Number comparison
  if (typeof a === 'number' && typeof b === 'number') {
    return (a - b) * multiplier
  }

  // Boolean comparison (true > false)
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return (Number(a) - Number(b)) * multiplier
  }

  // Date comparison
  if (a instanceof Date && b instanceof Date) {
    return (a.getTime() - b.getTime()) * multiplier
  }

  // String comparison (case-insensitive)
  const strA = String(a).toLowerCase()
  const strB = String(b).toLowerCase()
  return strA.localeCompare(strB) * multiplier
}

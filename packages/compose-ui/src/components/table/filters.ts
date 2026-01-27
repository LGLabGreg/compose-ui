import type { FilterPredicate } from './types'

/**
 * Multi-select filter: row value is included in selected array.
 * Returns true if no values are selected (empty array or undefined).
 */
export function includesFilter<T, K extends keyof T>(key: K): FilterPredicate<T, T[K][]> {
  return (row: T, value: T[K][]) => {
    if (!value || value.length === 0) return true
    return value.includes(row[key])
  }
}

/**
 * Range filter: numeric row value is within [min, max] bounds.
 * Returns true if range is undefined.
 */
export function rangeFilter<T, K extends keyof T>(
  key: K,
): FilterPredicate<T, [number, number]> {
  return (row: T, value: [number, number]) => {
    if (!value) return true
    const [min, max] = value
    const rowValue = row[key] as number
    return rowValue >= min && rowValue <= max
  }
}

/**
 * Contains filter: string row value contains search term (case-insensitive).
 * Returns true if search term is empty or undefined.
 */
export function containsFilter<T, K extends keyof T>(key: K): FilterPredicate<T, string> {
  return (row: T, value: string) => {
    if (!value) return true
    return String(row[key]).toLowerCase().includes(value.toLowerCase())
  }
}

/**
 * Equals filter: row value strictly equals filter value.
 * Returns true if filter value is undefined.
 */
export function equalsFilter<T, K extends keyof T>(key: K): FilterPredicate<T, T[K]> {
  return (row: T, value: T[K]) => {
    if (value === undefined) return true
    return row[key] === value
  }
}

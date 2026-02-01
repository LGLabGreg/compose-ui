export interface FuzzyMatchResult<T> {
  item: T
  score: number
}

/**
 * Calculate a fuzzy match score between a query and a target string.
 * Returns a score from 0 to 1, where 1 is a perfect match.
 */
export function fuzzyScore(query: string, target: string): number {
  const q = query.toLowerCase()
  const t = target.toLowerCase()

  // Exact match
  if (q === t) return 1.0

  // Target starts with query
  if (t.startsWith(q)) return 0.9

  // Target contains query as substring
  if (t.includes(q)) return 0.7

  // Check if all query characters appear in order
  let queryIndex = 0
  let matchCount = 0

  for (const char of t) {
    if (queryIndex < q.length && char === q[queryIndex]) {
      matchCount++
      queryIndex++
    }
  }

  // All query characters found in order
  if (queryIndex === q.length) {
    // Score based on how much of the query matched vs target length
    return 0.3 + (matchCount / t.length) * 0.3
  }

  // Partial character match - calculate Levenshtein-like similarity
  const commonChars = new Set([...q].filter((c) => t.includes(c)))
  const similarity = commonChars.size / Math.max(q.length, t.length)

  return similarity * 0.3
}

/**
 * Search items using fuzzy matching.
 * Returns items sorted by match score (highest first).
 */
export function fuzzySearch<T>(
  query: string,
  items: T[],
  getSearchableText: (item: T) => string,
  minScore = 0.1,
): FuzzyMatchResult<T>[] {
  const results: FuzzyMatchResult<T>[] = []

  for (const item of items) {
    const text = getSearchableText(item)
    const score = fuzzyScore(query, text)

    if (score >= minScore) {
      results.push({ item, score })
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score)

  return results
}

/**
 * Find the best fuzzy match for a query.
 * Returns the best match if score is above minScore, otherwise null.
 */
export function findBestMatch<T>(
  query: string,
  items: T[],
  getSearchableText: (item: T) => string,
  minScore = 0.3,
): FuzzyMatchResult<T> | null {
  const results = fuzzySearch(query, items, getSearchableText, minScore)
  return results.length > 0 ? results[0] : null
}

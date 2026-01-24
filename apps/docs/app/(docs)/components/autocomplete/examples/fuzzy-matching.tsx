'use client'

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
} from '@lglab/compose-ui/autocomplete'
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { matchSorter } from 'match-sorter'
import type { ReactNode } from 'react'

interface Movie {
  id: string
  title: string
  year: number
}

function highlightText(text: string, query: string): ReactNode {
  const trimmed = query.trim()
  if (!trimmed) {
    return text
  }

  const limited = trimmed.slice(0, 100)
  const escaped = limited.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'gi')

  return text.split(regex).map((part, idx) =>
    regex.test(part) ? (
      <mark key={idx} className='bg-transparent font-bold text-primary'>
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

function fuzzyFilter(item: Movie, query: string): boolean {
  if (!query) {
    return true
  }

  const results = matchSorter([item], query, {
    keys: [
      'title',
      { key: 'title', threshold: matchSorter.rankings.CONTAINS },
      { key: 'year', threshold: matchSorter.rankings.CONTAINS },
    ],
  })

  return results.length > 0
}

const movies: Movie[] = [
  { id: '1', title: 'The Shawshank Redemption', year: 1994 },
  { id: '2', title: 'The Godfather', year: 1972 },
  { id: '3', title: 'The Dark Knight', year: 2008 },
  { id: '4', title: 'The Godfather Part II', year: 1974 },
  { id: '5', title: '12 Angry Men', year: 1957 },
  { id: '6', title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { id: '7', title: "Schindler's List", year: 1993 },
  { id: '8', title: 'Pulp Fiction', year: 1994 },
  { id: '9', title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { id: '10', title: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: '11', title: 'Forrest Gump', year: 1994 },
  { id: '12', title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { id: '13', title: 'Fight Club', year: 1999 },
  { id: '14', title: 'Inception', year: 2010 },
  { id: '15', title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { id: '16', title: 'The Matrix', year: 1999 },
  { id: '17', title: 'Goodfellas', year: 1990 },
  { id: '18', title: 'Interstellar', year: 2014 },
  { id: '19', title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { id: '20', title: 'Se7en', year: 1995 },
  { id: '21', title: "It's a Wonderful Life", year: 1946 },
  { id: '22', title: 'The Silence of the Lambs', year: 1991 },
  { id: '23', title: 'Seven Samurai', year: 1954 },
  { id: '24', title: 'Saving Private Ryan', year: 1998 },
  { id: '25', title: 'City of God', year: 2002 },
  { id: '26', title: 'Life Is Beautiful', year: 1997 },
  { id: '27', title: 'The Green Mile', year: 1999 },
  { id: '28', title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { id: '29', title: 'Terminator 2: Judgment Day', year: 1991 },
  { id: '30', title: 'Back to the Future', year: 1985 },
  { id: '31', title: 'Spirited Away', year: 2001 },
  { id: '32', title: 'The Pianist', year: 2002 },
  { id: '33', title: 'Psycho', year: 1960 },
  { id: '34', title: 'Parasite', year: 2019 },
  { id: '35', title: 'Gladiator', year: 2000 },
  { id: '36', title: 'Leon: The Professional', year: 1994 },
  { id: '37', title: 'American History X', year: 1998 },
  { id: '38', title: 'The Departed', year: 2006 },
  { id: '39', title: 'Whiplash', year: 2014 },
  { id: '40', title: 'The Prestige', year: 2006 },
  { id: '41', title: 'Grave of the Fireflies', year: 1988 },
  { id: '42', title: 'The Usual Suspects', year: 1995 },
  { id: '43', title: 'Casablanca', year: 1942 },
  { id: '44', title: 'Harakiri', year: 1962 },
  { id: '45', title: 'The Lion King', year: 1994 },
  { id: '46', title: 'The Intouchables', year: 2011 },
  { id: '47', title: 'Modern Times', year: 1936 },
  { id: '48', title: 'The Lives of Others', year: 2006 },
  { id: '49', title: 'Once Upon a Time in the West', year: 1968 },
  { id: '50', title: 'Rear Window', year: 1954 },
]

export default function FuzzyMatchingExample() {
  return (
    <FieldRoot className='w-80'>
      <FieldLabel>Search movies</FieldLabel>
      <AutocompleteRoot
        items={movies}
        filter={fuzzyFilter}
        itemToStringValue={(item) => item.title}
      >
        <AutocompleteInput placeholder='e.g. Pulp Fiction or 1994' />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>
                No results found for &ldquo;
                <Autocomplete.Value />
                &ldquo;
              </AutocompleteEmpty>
              <AutocompleteList>
                {(movie: Movie) => (
                  <AutocompleteItem key={movie.id} value={movie}>
                    <Autocomplete.Value>
                      {(value) => (
                        <div className='flex w-full flex-col gap-0.5'>
                          <div className='font-medium'>
                            {highlightText(movie.title, value)}
                          </div>
                          <div className='text-xs text-muted-foreground'>
                            {highlightText(movie.year.toString(), value)}
                          </div>
                        </div>
                      )}
                    </Autocomplete.Value>
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>
    </FieldRoot>
  )
}

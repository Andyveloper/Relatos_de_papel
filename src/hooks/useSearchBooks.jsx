import { fakeApi } from '@src/services/fakeApi'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useSearchBooks = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState(fakeApi.docs)

  // Data original
  const allBooks = fakeApi.docs

  const handleSearch = useCallback(() => {
    const newResults = allBooks.filter((result) =>
      result.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    )
    setSearchResults(newResults)
  }, [searchInput, allBooks])

  useEffect(() => {
    handleSearch()
  }, [searchInput, handleSearch])

  return { searchInput, searchResults, setSearchInput }
}

export default useSearchBooks

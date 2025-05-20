import { Button } from '@src/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@src/components/ui/card'
import { Input } from '@src/components/ui/input'
import { fakeApi } from '@src/services/fakeApi'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

const Home = () => {
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

  return (
    <section className="py-25">
      <div className="z-20 flex flex-col container mx-auto items-center justify-center">
        <Input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="m-25"
        />
        <ul className="flex flex-wrap justify-around gap-6 container mx-auto items-stretch">
          {searchResults.map((result, index) => {
            return (
              <li key={result.title + index} className="w-full md:w-1/3 lg:w-1/4 flex mx-4">
                <Card className="flex flex-col justify-between flex-1">
                  <CardHeader className="text-center text-2xl">
                    <h2 className="font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#03a58f] via-[#03a58f] to-cyan-400">
                      {result.title}
                    </h2>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 items-center justify-center">
                    <img
                      src={`https://covers.openlibrary.org/b/olid/${result.cover_edition_key}-L.jpg`}
                      alt={result.title}
                      width={128}
                      height={128}
                      className="py-3 "
                    />
                    <p className="leading-7 [&:not(:first-child)]:mt-6">{result.appDescription}</p>
                  </CardContent>
                  <CardFooter className={"flex justify-center"}>
                    <Button variant={'outline'} asChild title="Ir al link externo">
                      <Link rel="noopener noreferrer" to={`/book/${result.cover_i}`}>
                        Ir a detalles
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Home

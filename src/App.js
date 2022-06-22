import fetchImage from './services/fetchImage'
import { SearchInput, ImageContainer } from './components'
import { useEffect, useState } from 'react'

const App = () => {
  const [search, setSearch] = useState('')
  const [resultImages, setResultImages] = useState([])

  useEffect(() => {
    fetchImage(search).then((res) => setResultImages(res))
  }, [search])

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold underline flex justify-center py-2'>Test React SNU</h1>
      <SearchInput search={search} setSearch={setSearch} />
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 mx-auto w-3/4'>
        {resultImages.map((resultImage) => {
          return <ImageContainer {...resultImage} />
        })}
      </div>
    </div>
  )
}

export default App

import fetchImage from './services/fetchImage'
import SearchInput from './components/SearchInput/SearchInput'
import { useEffect, useState } from 'react'
import ImageContainer from './components/ImageContainer/ImageContainer'

const App = () => {
  const [search, setSearch] = useState('')
  const [resultImages, setResultImages] = useState([])

  useEffect(() => {
    fetchImage(search).then((res) => setResultImages(res))
  }, [search])

  return (
    <div className='container mx-auto px-4 '>
      <h1 className='text-3xl font-bold underline flex justify-center py-2'>Test React SNU</h1>
      <SearchInput search={search} setSearch={setSearch} />
      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-3 w-2/3 mx-auto'>
        {resultImages.map((resultImage) => {
          return <ImageContainer {...resultImage} />
        })}
      </div>
    </div>
  )
}

export default App

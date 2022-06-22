import axios from 'axios'

export default async (userSearch) => {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q=${userSearch.replace(
        ' ',
        '+'
      )}&image_type=photo&pretty=true`
    )
    if (!data?.hits) return []
    return data.hits
  } catch (error) {
    console.log('error', error.message)
    return []
  }
}

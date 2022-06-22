import axios from 'axios'

export default async (userSearch) => {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_PIXABAY}&q=${userSearch.replace(
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

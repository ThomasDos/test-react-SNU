const ImageContainer = ({ webformatURL, tag }) => {
  return <img className='object-fill h-48 mx-auto' src={webformatURL} alt={tag} />
}

export default ImageContainer

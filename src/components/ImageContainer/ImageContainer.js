const ImageContainer = ({ webformatURL, tag }) => {
  return <img className='object-fill w-52 h-48' src={webformatURL} alt={tag} />
}

export default ImageContainer

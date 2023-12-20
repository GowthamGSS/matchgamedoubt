const ImageItem = props => {
  const {elem, imageClick} = props
  const {id, thumbnailUrl} = elem

  const imgClick = () => {
    imageClick(id)
  }
  return (
    <li className="imageItem">
      <button type="button" onClick={imgClick}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItem

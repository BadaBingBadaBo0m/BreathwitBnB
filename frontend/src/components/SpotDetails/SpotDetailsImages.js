import './spotDetailsImages.css'

const SpotDetailsImages = ({ spot }) => {
  const previewImage = spot.SpotImages.find((image) => image.preview === true);
  const spotImages = spot.SpotImages.filter(image => image.preview === false)
  let imageCount = 1;

  if (!previewImage) {
    return (
      <div id='imageContainer'>
      </div>
    )
  }

  return (
    <div id="imageContainer">
      <img alt={previewImage.url} key={previewImage.id} className="image1" id="previewImage" src={previewImage.url}></img>
      {spotImages.map(image => (
        <img key={image.id} className={`image${++imageCount} gridImage`} src={image.url}></img>
      ))}
    </div>
  );
};

export default SpotDetailsImages;
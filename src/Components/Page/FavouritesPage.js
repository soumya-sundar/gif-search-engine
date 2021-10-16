import React from 'react';
import './FavouritesPage.css';


function collectImagesFromLocalStorage(imagesCount) {
  let images = [];
  for(let i=1; i<=imagesCount; i++) {
    const imageObject = JSON.parse(localStorage.getItem(i));
    images.push(<li key={i} className="imageCard">
      <img src={imageObject.images.downsized.url} alt={imageObject.title} width={150} height={150}/>
    </li>);
  }
  return images;
}

function FavouritesPage(){
  let favourites = null;
  const imagesCount = localStorage.getItem("addToFavouritesCount");
  if(imagesCount) {
    const images = collectImagesFromLocalStorage(imagesCount);
    favourites=(
      <div className="favouritesDiv">
        <ul className="images">
          {images.map((image) => image)}
        </ul>
      </div>
    );
  } else {
      favourites=<div className="favouritesDiv"><p>You dont have any favourites yet :(</p></div>
  }
  return favourites;
}

export default FavouritesPage;
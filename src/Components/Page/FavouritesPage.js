import React from 'react';
import {useSelector} from 'react-redux';
import './FavouritesPage.css';

function BuildFavouritesJSX(favourites) {
  let images = [];
  for(let i=0; i<favourites.length; i++) {
    const imageObject = favourites[i];
    images.push(<li key={i} className="imageCard">
      <img src={imageObject.images.downsized.url} alt={imageObject.title} width={150} height={150}/>
    </li>);
  }
  return images;
}


function FavouritesPage(){
  const state = useSelector((state) => state)
  const favourites = state.favourites;
  let favouriteResults = null;
  if(favourites.length > 0) {
    const images = BuildFavouritesJSX(favourites);
    favouriteResults=(
      <div className="favouritesDiv">
        <ul className="images">
          {images.map((image) => image)}
        </ul>
      </div>
    );
  } else {
    favouriteResults=<div className="favouritesDiv"><p>You dont have any favourites yet :(</p></div>
  }
  return <div className="container">{favouriteResults}</div>;
}

export default FavouritesPage;
import React from 'react';
import './SearchResults.css';

function SearchResults(props){
  let images = [];

  async function addToFavourites(value) {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.addToFavouritesCount) {
        localStorage.addToFavouritesCount = Number(localStorage.addToFavouritesCount) + 1;
        localStorage.setItem(`${localStorage.addToFavouritesCount}`, JSON.stringify(value));
      } else {
        localStorage.setItem("addToFavouritesCount", 1)
        localStorage.setItem("1", JSON.stringify(value));
      }
    } else {
      console.log("Web storage not supported");
    }
  }


  for (const [key, value] of props.data.entries()) {
    images.push(<li key={key} className="imageCard">
      <img src={value.images.downsized.url} alt={value.title} width={150} height={100}/>
      <div style={{padding: 0, margin: 0}}> <button className="favourites" onClick={() => addToFavourites(value)}>Add to favourites</button></div>
      </li>
    )
  };
  return(
    <div className="searchResultsDiv">
      <ul className="images">
        {images.map((image) => image)}
      </ul>
    </div>
  );
}

export default SearchResults;
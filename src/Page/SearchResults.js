import React from 'react';
import './SearchResults.css';
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux';

function SearchResults(props){
  let images = [];
  const dispatch = useDispatch()
  const resultsArr = useSelector((state) => state.results)
  
  async function addToFavourites(value) {
    dispatch({type: 'addFavourites', payload: value});
  }

  if(resultsArr !== null){
    for (const [key, value] of resultsArr.entries()) {
      images.push(<li key={key} className="imageCard">
        <img src={value.images.downsized.url} alt={value.title} width={150} height={100}/>
        <div style={{padding: 0, margin: 0}}> 
          <button type="button" className="favourites" onClick={() => addToFavourites(value)}>
            Add to favourites
          </button>
        </div>
        </li>
      )
    };
  }

  return(
    <div className="searchResultsDiv">
      <ul className="images">
        {images.map((image) => image)}
      </ul>
    </div>
  );
}

export default SearchResults;
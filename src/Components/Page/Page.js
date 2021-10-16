import React from 'react';
import SearchPage from './SearchPage';
import FavouritesPage from './FavouritesPage';

function Page(props) {
  const display = props.page === 1  ? <SearchPage /> : <FavouritesPage />;
  return display;
}

export default Page;
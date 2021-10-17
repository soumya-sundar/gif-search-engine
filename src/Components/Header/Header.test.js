import { render, screen } from '@testing-library/react';
import App from '../../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
  const initialState = {
      textInput: "",
      alert: {
        type: 0,
        message: null,
      },
      results: null,
      favourites: []
  };
  const mockStore = configureStore()
  let store;

  beforeEach(() => {
    store = mockStore(initialState)
    render(<Provider store={store}><App /></Provider>)  
  })

  it('renders App Title', () => {
    const appTitle = screen.getByText(/Gif Search Engine/i);
    expect(appTitle).toBeInTheDocument();
  })

  it('renders Search Menu Title', () => {  
    const searchMenu = screen.getByText(/^Search$/i);
    expect(searchMenu).toBeInTheDocument();
  })

  it('renders Favourites Menu Title', () => {
    const favouritesMenu = screen.getByText(/Favourites/i);
    expect(favouritesMenu).toBeInTheDocument();
  })
})
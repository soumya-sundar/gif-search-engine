import { render, screen } from '@testing-library/react';
import App from './App';
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

  it('renders footer text', () => {
    store = mockStore(initialState)
    render(<Provider store={store}><App /></Provider>)

    const footerText = screen.getByText(/Contact: soumya-sundar @GitHub.com/i);
    expect(footerText).toBeInTheDocument();
  })
})
import { render, screen, fireEvent} from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const Button = ({onClick, children}) => (
  <button onClick={onClick}>{children}</button>
)

describe('With React Testing Library', () => {
  let initialState = {
      textInput: "elephant",
      alert: {
        type: 0,
        message: null,
      },
      results: null,
      favourites: []
  };
  const mockStore = configureStore()
  let store;

  it('Testing Add To Favourites button click', () => {
    /*const testMap = new Map()
    testMap.set("c5iMjFfrUFpza", {
      value: {
        images: { downsized: {height: '255', width: '460', size: '1624995', url: 'https://media2.giphy.com/media/c5iMjFfrUFpza/giphy…lo9vxqasgodehiwyjxxe1j7g94n4qt&rid=giphy.gif&ct=g'}}
      }, 
      title:"elephant"
    });
    initialState.results = testMap;
    store = mockStore(initialState)
    render(<Provider store={store}><App /></Provider>)
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Add to favourites</Button>)
    fireEvent.click(screen.getByText(/Add to favourites/i))
    expect(handleClick).toHaveBeenCalledTimes(1) */
  }) 

})
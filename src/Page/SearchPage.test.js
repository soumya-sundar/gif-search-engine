import { render, screen, fireEvent} from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const Button = ({onClick, children}) => (
  <button onClick={onClick}>{children}</button>
)

describe('With React Testing Library', () => {
  let initialState = {
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
  })

  it('renders Text Input and tests placeholder', () => {
    render(<Provider store={store}><App /></Provider>)  
    const placeHolder = screen.getByPlaceholderText('Search Giphy');
    expect(placeHolder).toBeInTheDocument();
  })

  it('renders Text Input and tests user Input', () => {
    render(<Provider store={store}><App /></Provider>)  
    initialState.textInput = "Elephant";
    store = mockStore(initialState)
    render(<Provider store={store}><App /></Provider>)

    const placeHolder = screen.getByDisplayValue("Elephant");
    expect(placeHolder).toBeInTheDocument();
  })

  test('calls onClick prop when Submit button is clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Submit</Button>)
    fireEvent.click(screen.getByText(/Submit/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

})

const initialState = {
    textInput: "",
    alert: {
      type: 0,
      message: null,
    },
    results: null,
    favourites: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'setState':
        return { ...state,
          alert: {
            type: action.alert.type,
            message: action.alert.message
          },
          textInput: action.textInput,
          results: action.payload
        };
      case 'addFavourites':
        let arr = state.favourites;
        const arr1 = arr.concat(action.payload);
        return { ...state, favourites: arr1};
      default:
        return state;
    }
  }

export default Reducer;
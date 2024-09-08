import { SET_THEME } from '../actions/themeActions';

// Initial state
const initialState = {
  theme: 'light', // yoki 'dark'
};

// Reducer
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;

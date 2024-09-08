import { createStore } from 'redux';
import rootReducer from './reducers'; // Barcha reducers to‘plamiga yo‘naltiring

const rootReducer = combineReducers({
    theme: themeReducer,
    // other reducers
  });
export default store;
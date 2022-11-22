import { combineReducers } from "redux";
import selectedItemsReducer from './selected/selectedSlice';

const rootReducer = combineReducers({
  selectedItems:selectedItemsReducer
});

export default rootReducer;

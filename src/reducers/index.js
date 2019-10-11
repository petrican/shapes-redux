import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
// import shapeReducer from './shapeReducer';
// import colorReducer from './colorReducer';

export default combineReducers({
    items: itemsReducer
    // shape: shapeReducer,
    // color: colorReducer
});
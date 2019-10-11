import {
    GET_SHAPE_FILTER,
    SET_SHAPE_FILTER
  } from '../actions/types';
  
  const initialState = {
    shapes: []
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_SHAPE_FILTER:
        return {
          ...state,
        };
        
      default:
        return state;
    }
  }
  